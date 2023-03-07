export interface Form {
  title: string;
  startAt: Date;
  venue: string;
  capacity?: number;
  price?: number;
  description: string;
  banner: string;
  tags: string[];
  isManualApprove: boolean;
  privacy: string;
}
