export interface Message {
  id: number;
  messageTitle: string;
  message: string;
  messageSenderID: number;
  messageReceiverID: number;
  datePosted: Date;
  read: boolean;
}
