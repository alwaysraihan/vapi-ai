import {
  AnalyticsIcon,
  CadreIcon,
  CommunicationIcon,
  InfluenceIcon,
} from "@/icons/icons";

// Type
type NavItem = {
  id: string;
  label: string;
  href: string;
  bgColor: string;
  icon: React.ElementType;
};

// Data
export const navData: NavItem[] = [
  {
    id: "1",
    label: "Influence",
    href: "#",
    bgColor: "#7FBF80",
    icon: InfluenceIcon,
  },
  {
    id: "2",
    label: "Communication",
    href: "#",
    bgColor: "#009DDD",
    icon: CommunicationIcon,
  },
  {
    id: "3",
    label: "Analytics",
    href: "#",
    bgColor: "#DBCA38",
    icon: AnalyticsIcon,
  },
  {
    id: "4",
    label: "Cadre",
    href: "#",
    bgColor: "#DD5350",
    icon: CadreIcon,
  },
];
