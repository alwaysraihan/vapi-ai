import {
  AnalyticsIcon,
  CadreIcon,
  CommunicationIcon,
  InfluenceIcon,
} from "@/icons/icons";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

export const servicesData: Service[] = [
  {
    id: "1",
    title: "Influence: Earning the Vote",
    description:
      "Influence is the compelling power of a leader or party's vision and solutions that truly address public needs, thereby persuading voters to choose you. We help you define, articulate, and amplify this core appeal, ensuring your message resonates deeply and genuinely with the electorate.",
    icon: InfluenceIcon,
  },
  {
    id: "2",
    title: "Communication: Amplifying Your Message",
    description:
      "Effective communication is about strategically promoting your influencing points and party stance to effectively reach and resonate with the broader public. Our tools and guidance ensure your message cuts through the noise, reaches the right audiences, and fosters strong engagement.",
    icon: CommunicationIcon,
  },
  {
    id: "3",
    title: "Analytics: Understanding the Public Pulse",
    description:
      "Analytics is our innovative approach to systematically measuring public sentiment. Through our patented quantitative surveys and pioneering AI-powered qualitative research, we provide unparalleled insights into voter opinions, concerns, and preferences, allowing for data-driven strategic adaptation.",
    icon: AnalyticsIcon,
  },
  {
    id: "4",
    title: "Cadre: Mobilizing for Success",
    description:
      "Cadre refers to your dedicated grassroots teams and key executors who are crucial for bringing voters to the polls and acting as thought leaders on behalf of your leadership. We provide the tools and strategies to organize, empower, and activate your ground game, ensuring effective voter mobilization and message reinforcement.",
    icon: CadreIcon,
  },
];
