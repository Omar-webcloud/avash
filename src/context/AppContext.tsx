'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  UserRole,
  StudentProfile,
  Campaign,
  Scholarship,
  Donation,
  ScholarshipApplication,
  ProgressUpdate,
  AuditLog,
  NotificationItem,
  VerificationDocument,
} from '@/types';
import {
  mockUsers,
  mockStudents,
  mockCampaigns,
  mockScholarships,
  mockDonations,
  mockApplications,
  mockProgressUpdates,
  mockAuditLogs,
  mockNotifications,
} from '@/lib/mockData';
import { Language, translations } from '@/lib/translations';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
  currentUser: User;
  
  students: StudentProfile[];
  campaigns: Campaign[];
  scholarships: Scholarship[];
  donations: Donation[];
  applications: ScholarshipApplication[];
  progressUpdates: ProgressUpdate[];
  auditLogs: AuditLog[];
  notifications: NotificationItem[];
  
  activeCampaignForDonation: Campaign | null;
  setActiveCampaignForDonation: (c: Campaign | null) => void;
  activeDonationForReceipt: Donation | null;
  setActiveDonationForReceipt: (d: Donation | null) => void;

  // Actions
  makeDonation: (data: {
    campaignId: string;
    amountBDT: number;
    paymentMethod: any;
    donorName?: string;
    donorEmail?: string;
    isAnonymous?: boolean;
    message?: string;
  }) => Donation;
  
  updateStudentProfile: (profile: Partial<StudentProfile>) => void;
  submitVerificationDocument: (doc: Omit<VerificationDocument, 'id' | 'submittedAt' | 'status'>) => void;
  reviewVerification: (studentId: string, status: any, reviewerNotes?: string) => void;
  createCampaign: (campaignData: Partial<Campaign>) => Campaign;
  reviewCampaign: (campaignId: string, status: any) => void;
  createScholarship: (scholarshipData: Partial<Scholarship>) => Scholarship;
  applyForScholarship: (data: Omit<ScholarshipApplication, 'id' | 'submittedAt' | 'status'>) => ScholarshipApplication;
  reviewScholarshipApplication: (appId: string, status: any, reviewerNotes?: string) => void;
  addProgressUpdate: (update: Omit<ProgressUpdate, 'id' | 'date' | 'likesCount'>) => ProgressUpdate;
  markNotificationRead: (id: string) => void;
  resetToDefaults: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'avash_platform_state_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [currentRole, setCurrentRoleState] = useState<UserRole>('student');
  const [currentUser, setCurrentUser] = useState<User>(mockUsers[0]);

  const [students, setStudents] = useState<StudentProfile[]>(mockStudents);
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns);
  const [scholarships, setScholarships] = useState<Scholarship[]>(mockScholarships);
  const [donations, setDonations] = useState<Donation[]>(mockDonations);
  const [applications, setApplications] = useState<ScholarshipApplication[]>(mockApplications);
  const [progressUpdates, setProgressUpdates] = useState<ProgressUpdate[]>(mockProgressUpdates);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(mockAuditLogs);
  const [notifications, setNotifications] = useState<NotificationItem[]>(mockNotifications);

  const [activeCampaignForDonation, setActiveCampaignForDonation] = useState<Campaign | null>(null);
  const [activeDonationForReceipt, setActiveDonationForReceipt] = useState<Donation | null>(null);

  // Load from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.students) setStudents(parsed.students);
        if (parsed.campaigns) setCampaigns(parsed.campaigns);
        if (parsed.scholarships) setScholarships(parsed.scholarships);
        if (parsed.donations) setDonations(parsed.donations);
        if (parsed.applications) setApplications(parsed.applications);
        if (parsed.progressUpdates) setProgressUpdates(parsed.progressUpdates);
        if (parsed.auditLogs) setAuditLogs(parsed.auditLogs);
        if (parsed.notifications) setNotifications(parsed.notifications);
      }
    } catch (e) {
      console.error('Error loading stored Avash data', e);
    }
  }, []);

  // Save to local storage on state change
  const saveState = (updated: {
    students?: StudentProfile[];
    campaigns?: Campaign[];
    scholarships?: Scholarship[];
    donations?: Donation[];
    applications?: ScholarshipApplication[];
    progressUpdates?: ProgressUpdate[];
    auditLogs?: AuditLog[];
    notifications?: NotificationItem[];
  }) => {
    try {
      const current = {
        students: updated.students || students,
        campaigns: updated.campaigns || campaigns,
        scholarships: updated.scholarships || scholarships,
        donations: updated.donations || donations,
        applications: updated.applications || applications,
        progressUpdates: updated.progressUpdates || progressUpdates,
        auditLogs: updated.auditLogs || auditLogs,
        notifications: updated.notifications || notifications,
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(current));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const setCurrentRole = (role: UserRole) => {
    setCurrentRoleState(role);
    const foundUser = mockUsers.find((u) => u.role === role) || mockUsers[0];
    setCurrentUser(foundUser);
  };

  const t = translations[language];

  // Actions
  const makeDonation = (data: {
    campaignId: string;
    amountBDT: number;
    paymentMethod: any;
    donorName?: string;
    donorEmail?: string;
    isAnonymous?: boolean;
    message?: string;
  }): Donation => {
    const campaign = campaigns.find((c) => c.id === data.campaignId);
    if (!campaign) throw new Error('Campaign not found');

    const now = new Date();
    const dateStr = now.toISOString().replace('T', ' ').substring(0, 19);
    const receiptNum = `AVASH-RCP-${now.getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const txnHash = `${data.paymentMethod.toUpperCase().replace(/\W/g, '')}_TXN_${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

    const newDonation: Donation = {
      id: `don-${Date.now()}`,
      campaignId: campaign.id,
      campaignTitle: campaign.title,
      studentId: campaign.studentId,
      studentName: campaign.studentName,
      donorId: currentUser.role === 'donor' ? currentUser.id : undefined,
      donorName: data.isAnonymous ? 'Anonymous Donor' : data.donorName || currentUser.name || 'Anonymous Donor',
      donorEmail: data.donorEmail || currentUser.email || 'donor@avash.org.bd',
      amountBDT: data.amountBDT,
      platformFeeBDT: 0,
      paymentProcessingFeeBDT: Math.round(data.amountBDT * 0.015),
      paymentMethod: data.paymentMethod,
      isAnonymous: !!data.isAnonymous,
      status: 'Successful',
      transactionHash: txnHash,
      receiptNumber: receiptNum,
      createdAt: dateStr,
      message: data.message,
    };

    const updatedDonations = [newDonation, ...donations];
    setDonations(updatedDonations);

    // Update campaign raisedAmountBDT and donorCount
    const newRaised = campaign.raisedAmountBDT + data.amountBDT;
    const newStatus = newRaised >= campaign.fundingGoalBDT ? 'Fully Funded' : 'Active';

    const updatedCampaigns = campaigns.map((c) =>
      c.id === campaign.id
        ? {
            ...c,
            raisedAmountBDT: newRaised,
            donorCount: c.donorCount + 1,
            status: newStatus as any,
          }
        : c
    );
    setCampaigns(updatedCampaigns);

    // Create Audit Log
    const newAuditLog: AuditLog = {
      id: `audit-${Date.now()}`,
      actorId: currentUser.id,
      actorName: data.isAnonymous ? 'Anonymous Donor' : newDonation.donorName,
      actorRole: 'donor',
      action: 'RECONCILED_DONATION',
      targetType: 'Donation',
      targetId: newDonation.id,
      details: `Successful ৳${data.amountBDT.toLocaleString()} contribution to campaign "${campaign.title}" via ${data.paymentMethod} (Txn: ${txnHash})`,
      timestamp: dateStr,
    };
    const updatedAuditLogs = [newAuditLog, ...auditLogs];
    setAuditLogs(updatedAuditLogs);

    // Add Notification to Student
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      userId: campaign.studentId,
      title: 'New Donation Received! ৳ ' + data.amountBDT.toLocaleString(),
      message: `${data.isAnonymous ? 'An anonymous supporter' : newDonation.donorName} donated ৳${data.amountBDT.toLocaleString()} via ${data.paymentMethod} to your campaign.`,
      type: 'donation',
      read: false,
      timestamp: dateStr.substring(0, 16),
      link: '/student/funding',
    };
    const updatedNotifs = [newNotif, ...notifications];
    setNotifications(updatedNotifs);

    saveState({
      donations: updatedDonations,
      campaigns: updatedCampaigns,
      auditLogs: updatedAuditLogs,
      notifications: updatedNotifs,
    });

    return newDonation;
  };

  const updateStudentProfile = (profileData: Partial<StudentProfile>) => {
    const updated = students.map((s) => (s.id === 'std-nafis' ? { ...s, ...profileData } : s));
    setStudents(updated);
    saveState({ students: updated });
  };

  const submitVerificationDocument = (docData: Omit<VerificationDocument, 'id' | 'submittedAt' | 'status'>) => {
    const newDoc: VerificationDocument = {
      ...docData,
      id: `doc-${Date.now()}`,
      status: 'Pending',
      submittedAt: new Date().toISOString().split('T')[0],
    };

    const updated = students.map((s) => {
      if (s.id === docData.studentId) {
        return {
          ...s,
          verificationStatus: 'Under Review' as any,
          documents: [newDoc, ...s.documents],
        };
      }
      return s;
    });

    setStudents(updated);
    saveState({ students: updated });
  };

  const reviewVerification = (studentId: string, status: any, reviewerNotes?: string) => {
    const dateStr = new Date().toISOString().split('T')[0];
    const updatedStudents = students.map((s) => {
      if (s.id === studentId) {
        return {
          ...s,
          verificationStatus: status,
          verifiedAt: status === 'Verified' ? dateStr : s.verifiedAt,
          documents: s.documents.map((d) => ({
            ...d,
            status: status === 'Verified' ? 'Verified' : 'Needs Info',
            reviewedAt: dateStr,
            reviewerNotes: reviewerNotes || d.reviewerNotes,
          })),
        };
      }
      return s;
    });

    setStudents(updatedStudents);

    // Audit log
    const audit: AuditLog = {
      id: `audit-${Date.now()}`,
      actorId: currentUser.id,
      actorName: currentUser.name,
      actorRole: 'admin',
      action: status === 'Verified' ? 'VERIFY_STUDENT' : 'UPDATE_VERIFICATION_STATUS',
      targetType: 'Verification',
      targetId: studentId,
      details: `Student verification updated to ${status}. Notes: ${reviewerNotes || 'Approved credentials'}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
    };
    const updatedAudit = [audit, ...auditLogs];
    setAuditLogs(updatedAudit);

    // Notification
    const notif: NotificationItem = {
      id: `notif-${Date.now()}`,
      userId: studentId,
      title: `Verification Status: ${status}`,
      message: `Your verification status has been updated to "${status}". Reviewer note: ${reviewerNotes || 'Documents approved.'}`,
      type: 'verification',
      read: false,
      timestamp: dateStr,
      link: '/student/verification',
    };
    const updatedNotifs = [notif, ...notifications];
    setNotifications(updatedNotifs);

    saveState({
      students: updatedStudents,
      auditLogs: updatedAudit,
      notifications: updatedNotifs,
    });
  };

  const createCampaign = (campaignData: Partial<Campaign>): Campaign => {
    const newCamp: Campaign = {
      id: `cmp-${Date.now()}`,
      slug: (campaignData.title || 'campaign').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      studentId: campaignData.studentId || 'std-nafis',
      studentName: campaignData.studentName || 'Nafis Ahmed',
      studentAvatar: campaignData.studentAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      studentCity: campaignData.studentCity || 'Dhaka',
      studentInstitution: campaignData.studentInstitution || 'BUET',
      title: campaignData.title || 'Support Higher Education',
      introduction: campaignData.introduction || '',
      targetUniversity: campaignData.targetUniversity || '',
      destinationCountry: campaignData.destinationCountry || '',
      intendedDegree: campaignData.intendedDegree || '',
      admissionStatus: campaignData.admissionStatus || 'Admitted',
      fundingGoalBDT: campaignData.fundingGoalBDT || 100000,
      raisedAmountBDT: 0,
      donorCount: 0,
      expenses: campaignData.expenses || [],
      deadline: campaignData.deadline || '2026-12-31',
      milestones: campaignData.milestones || [],
      status: 'Active',
      createdAt: new Date().toISOString().split('T')[0],
      featured: false,
    };

    const updated = [newCamp, ...campaigns];
    setCampaigns(updated);

    const audit: AuditLog = {
      id: `audit-${Date.now()}`,
      actorId: currentUser.id,
      actorName: currentUser.name,
      actorRole: 'student',
      action: 'CREATE_CAMPAIGN',
      targetType: 'Campaign',
      targetId: newCamp.id,
      details: `Created new funding campaign "${newCamp.title}" with goal ৳${newCamp.fundingGoalBDT.toLocaleString()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
    };
    const updatedAudit = [audit, ...auditLogs];
    setAuditLogs(updatedAudit);

    saveState({ campaigns: updated, auditLogs: updatedAudit });
    return newCamp;
  };

  const reviewCampaign = (campaignId: string, status: any) => {
    const updated = campaigns.map((c) => (c.id === campaignId ? { ...c, status } : c));
    setCampaigns(updated);
    saveState({ campaigns: updated });
  };

  const createScholarship = (scholarshipData: Partial<Scholarship>): Scholarship => {
    const newSch: Scholarship = {
      id: `sch-${Date.now()}`,
      slug: (scholarshipData.title || 'scholarship').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      organizationId: currentUser.id,
      organizationName: currentUser.organizationName || currentUser.name,
      organizationLogo: currentUser.avatar,
      title: scholarshipData.title || 'Scholarship Grant',
      description: scholarshipData.description || '',
      budgetBDT: scholarshipData.budgetBDT || 500000,
      totalRecipients: scholarshipData.totalRecipients || 5,
      awardedRecipients: 0,
      eligibleCountries: scholarshipData.eligibleCountries || ['Worldwide'],
      eligibleDegreeLevels: scholarshipData.eligibleDegreeLevels || ['MS', 'PhD'],
      eligibleSubjects: scholarshipData.eligibleSubjects || ['STEM'],
      applicationDeadline: scholarshipData.applicationDeadline || '2026-12-31',
      requiredDocuments: scholarshipData.requiredDocuments || ['Transcript', 'Admission Offer'],
      selectionProcess: scholarshipData.selectionProcess || 'Academic merit and interview.',
      fundingConditions: scholarshipData.fundingConditions || 'Progress updates required.',
      status: 'Open',
      createdAt: new Date().toISOString().split('T')[0],
    };

    const updated = [newSch, ...scholarships];
    setScholarships(updated);
    saveState({ scholarships: updated });
    return newSch;
  };

  const applyForScholarship = (data: Omit<ScholarshipApplication, 'id' | 'submittedAt' | 'status'>): ScholarshipApplication => {
    const newApp: ScholarshipApplication = {
      ...data,
      id: `app-${Date.now()}`,
      submittedAt: new Date().toISOString().split('T')[0],
      status: 'Submitted',
    };

    const updated = [newApp, ...applications];
    setApplications(updated);
    saveState({ applications: updated });
    return newApp;
  };

  const reviewScholarshipApplication = (appId: string, status: any, reviewerNotes?: string) => {
    const updated = applications.map((a) => (a.id === appId ? { ...a, status, reviewerNotes } : a));
    setApplications(updated);
    saveState({ applications: updated });
  };

  const addProgressUpdate = (updateData: Omit<ProgressUpdate, 'id' | 'date' | 'likesCount'>): ProgressUpdate => {
    const newUpdate: ProgressUpdate = {
      ...updateData,
      id: `upd-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      likesCount: 1,
    };

    const updated = [newUpdate, ...progressUpdates];
    setProgressUpdates(updated);
    saveState({ progressUpdates: updated });
    return newUpdate;
  };

  const markNotificationRead = (id: string) => {
    const updated = notifications.map((n) => (n.id === id ? { ...n, read: true } : n));
    setNotifications(updated);
    saveState({ notifications: updated });
  };

  const resetToDefaults = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setStudents(mockStudents);
    setCampaigns(mockCampaigns);
    setScholarships(mockScholarships);
    setDonations(mockDonations);
    setApplications(mockApplications);
    setProgressUpdates(mockProgressUpdates);
    setAuditLogs(mockAuditLogs);
    setNotifications(mockNotifications);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        currentRole,
        setCurrentRole,
        currentUser,
        students,
        campaigns,
        scholarships,
        donations,
        applications,
        progressUpdates,
        auditLogs,
        notifications,
        activeCampaignForDonation,
        setActiveCampaignForDonation,
        activeDonationForReceipt,
        setActiveDonationForReceipt,
        makeDonation,
        updateStudentProfile,
        submitVerificationDocument,
        reviewVerification,
        createCampaign,
        reviewCampaign,
        createScholarship,
        applyForScholarship,
        reviewScholarshipApplication,
        addProgressUpdate,
        markNotificationRead,
        resetToDefaults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};

