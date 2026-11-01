export type UserRole = 'student' | 'donor' | 'organization' | 'reviewer' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  organizationName?: string;
  phone?: string;
  createdAt: string;
}

export type VerificationStatus =
  | 'Draft'
  | 'Submitted'
  | 'Under Review'
  | 'Additional Information Required'
  | 'Verified'
  | 'Rejected'
  | 'Appeal Pending'
  | 'Suspended';

export type DocumentType =
  | 'National ID / Passport'
  | 'Academic Transcript'
  | 'English Proficiency (IELTS/TOEFL)'
  | 'University Offer Letter'
  | 'Scholarship Letter'
  | 'Financial Document'
  | 'Standardized Test (GRE/GMAT)'
  | 'Recommendation Letter';

export interface VerificationDocument {
  id: string;
  studentId: string;
  type: DocumentType;
  fileName: string;
  fileSize: string;
  fileUrl?: string;
  status: 'Pending' | 'Verified' | 'Rejected' | 'Needs Info';
  submittedAt: string;
  reviewedAt?: string;
  reviewerNotes?: string;
}

export interface AcademicAchievement {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'Award' | 'Competition' | 'Research' | 'Extracurricular' | 'Certification';
  description: string;
}

export interface StudentProfile {
  id: string;
  userId: string;
  slug: string;
  fullName: string;
  avatar: string;
  country: string;
  city: string;
  bio: string;
  contactEmail: string;
  contactPhone: string;
  
  // Education
  currentInstitution: string;
  previousEducation: string;
  academicResults: string; // CGPA / Marks
  intendedDegree: string; // 'MS' | 'PhD' | 'Bachelors' | 'MBA'
  preferredSubject: string;
  targetCountry: string;
  targetUniversities: string[];
  admissionStatus: 'Admitted' | 'Conditional Offer' | 'Application Submitted' | 'Preparing Applications';
  
  // Achievements & Background
  achievements: AcademicAchievement[];
  
  // Study Plans
  personalStatement: string;
  educationalGoals: string;
  reasonsForStudyingAbroad: string;
  intendedCareerPath: string;
  
  // Financial Information (in BDT)
  totalEstimatedExpensesBDT: number;
  availableFinancialResourcesBDT: number;
  scholarshipReceivedBDT: number;
  remainingFundingRequirementBDT: number;
  
  // Verification
  verificationStatus: VerificationStatus;
  verificationRequestedAt?: string;
  verifiedAt?: string;
  documents: VerificationDocument[];
}

export type CampaignStatus =
  | 'Draft'
  | 'Submitted'
  | 'Under Review'
  | 'Approved'
  | 'Active'
  | 'Partially Funded'
  | 'Fully Funded'
  | 'Completed'
  | 'Suspended'
  | 'Cancelled';

export type FundingCategory =
  | 'IELTS/TOEFL/GRE Exams'
  | 'University Application Fees'
  | 'Academic Document & Evaluation'
  | 'Tuition Deposit'
  | 'Visa & SEVIS Fees'
  | 'Flight & Travel'
  | 'Initial Living & Accommodation'
  | 'Research & Books';

export interface ExpenseItem {
  id: string;
  category: FundingCategory;
  title: string;
  amountBDT: number;
  note?: string;
  receiptVerified?: boolean;
}

export interface CampaignMilestone {
  id: string;
  title: string;
  targetDate?: string;
  completed: boolean;
  completedAt?: string;
}

export interface Campaign {
  id: string;
  slug: string;
  studentId: string;
  studentName: string;
  studentAvatar: string;
  studentCity: string;
  studentInstitution: string;
  title: string;
  introduction: string;
  targetUniversity: string;
  destinationCountry: string;
  intendedDegree: string;
  admissionStatus: string;
  fundingGoalBDT: number;
  raisedAmountBDT: number;
  donorCount: number;
  expenses: ExpenseItem[];
  deadline: string;
  milestones: CampaignMilestone[];
  status: CampaignStatus;
  createdAt: string;
  featured?: boolean;
}

export type PaymentMethod = 'bKash' | 'Nagad' | 'Rocket' | 'Credit/Debit Card' | 'Bank Transfer';

export type DonationStatus =
  | 'Initiated'
  | 'Pending'
  | 'Successful'
  | 'Failed'
  | 'Refunded'
  | 'Disputed';

export interface Donation {
  id: string;
  campaignId: string;
  campaignTitle: string;
  studentId: string;
  studentName: string;
  donorId?: string;
  donorName: string;
  donorEmail: string;
  amountBDT: number;
  platformFeeBDT: number;
  paymentProcessingFeeBDT: number;
  paymentMethod: PaymentMethod;
  isAnonymous: boolean;
  status: DonationStatus;
  transactionHash: string;
  receiptNumber: string;
  createdAt: string;
  message?: string;
}

export interface Scholarship {
  id: string;
  slug: string;
  organizationId: string;
  organizationName: string;
  organizationLogo: string;
  title: string;
  description: string;
  budgetBDT: number;
  totalRecipients: number;
  awardedRecipients: number;
  eligibleCountries: string[];
  eligibleDegreeLevels: string[];
  eligibleSubjects: string[];
  applicationDeadline: string;
  requiredDocuments: string[];
  selectionProcess: string;
  fundingConditions: string;
  status: 'Open' | 'Under Review' | 'Closed';
  createdAt: string;
}

export interface ScholarshipApplication {
  id: string;
  scholarshipId: string;
  scholarshipTitle: string;
  organizationId: string;
  organizationName: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  studentAvatar: string;
  currentInstitution: string;
  intendedDegree: string;
  targetUniversity: string;
  academicResults: string;
  statement: string;
  submittedAt: string;
  status: 'Submitted' | 'Under Review' | 'Shortlisted' | 'Awarded' | 'Rejected';
  reviewerNotes?: string;
}

export interface ProgressUpdate {
  id: string;
  studentId: string;
  studentName: string;
  studentAvatar: string;
  campaignId: string;
  milestoneType:
    | 'English Proficiency Exam'
    | 'University Application'
    | 'University Admission'
    | 'Scholarship Confirmation'
    | 'Funding Milestone'
    | 'Visa Progress'
    | 'Travel Preparation'
    | 'University Enrollment';
  title: string;
  description: string;
  evidenceNote?: string;
  date: string;
  likesCount: number;
}

export interface AuditLog {
  id: string;
  actorId: string;
  actorName: string;
  actorRole: UserRole;
  action: string;
  targetType: 'Student' | 'Campaign' | 'Donation' | 'Verification' | 'Scholarship' | 'Organization';
  targetId: string;
  details: string;
  timestamp: string;
}

export interface NotificationItem {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'verification' | 'donation' | 'campaign' | 'scholarship' | 'progress' | 'system';
  read: boolean;
  timestamp: string;
  link?: string;
}

