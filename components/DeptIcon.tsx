"use client";

import type { IconType } from "react-icons";
import {
  FaCoins,
  FaChartLine,
  FaWarehouse,
  FaBullhorn,
  FaUserFriends,
  FaTruck,
  FaBoxOpen,
  FaBalanceScale,
  FaIndustry,
  FaShoppingCart,
  FaRobot,
} from "react-icons/fa";

const DEPT_ICON_RULES: [RegExp, IconType][] = [
  [/KOMRON_Moliya/i, FaCoins],
  [/KOMRON_Analitika/i, FaChartLine],
  [/ABDUVORIS_Sklad/i, FaWarehouse],
  [/ABDUVORIS_Marketing/i, FaBullhorn],
  [/KAMRON_HR/i, FaUserFriends],
  [/KAMRON_Logistika/i, FaTruck],
  [/KAMRON_Taminot/i, FaBoxOpen],
  [/ABDULLOH_Legal/i, FaBalanceScale],
  [/ISHLAB_CHIQARISH/i, FaIndustry],
  [/SOTUV/i, FaShoppingCart],
];

export function iconForDept(sectionId: string): IconType {
  const match = DEPT_ICON_RULES.find(([re]) => re.test(sectionId));
  return match ? match[1] : FaRobot;
}

export default function DeptIcon({
  sectionId,
  className,
}: {
  sectionId: string;
  className?: string;
}) {
  const Icon = iconForDept(sectionId);
  return <Icon className={className} />;
}
