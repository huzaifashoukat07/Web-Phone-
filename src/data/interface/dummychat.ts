export interface ChatItem {
  id: number;
  sourceUserName?: string;
  sourceNumber?: string;
  fullName?: string;
  phoneNumber?: string;
  lastMessage: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM AM/PM
  isUnread: boolean;
}

export const dummyChats: ChatItem[] = [
  {
    id: 1,
    fullName: "Ali Khan",
    phoneNumber: "+971501234567",
    lastMessage: "Hey! Are you coming today?",
    date: "2025-11-24",
    time: "10:30 AM",
    isUnread: true,
  },
  {
    id: 2,
    fullName: "Sara Ahmed",
    phoneNumber: "+971561234890",
    lastMessage: "Thanks for your help!",
    date: "2025-11-23",
    time: "04:15 PM",
    isUnread: false,
  },
  {
    id: 3,
    fullName: "Hamza Ali",
    phoneNumber: "+971552345678",
    lastMessage: "Call me when free",
    date: "2025-11-22",
    time: "09:00 AM",
    isUnread: true,
  },
  {
    id: 4,
    fullName: "Fatima Noor",
    phoneNumber: "+971501234999",
    lastMessage: "Meeting postponed to tomorrow",
    date: "2025-11-21",
    time: "02:45 PM",
    isUnread: false,
  },
  {
    id: 5,
    fullName: "Omar Siddiqui",
    phoneNumber: "+971552345123",
    lastMessage: "Got it, thanks!",
    date: "2025-11-20",
    time: "11:20 AM",
    isUnread: false,
  },
];
