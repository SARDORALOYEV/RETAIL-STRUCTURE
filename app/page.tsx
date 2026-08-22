import { getDashboardData } from "@/lib/obsidian";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const data = getDashboardData();
  return <Dashboard data={data} />;
}
