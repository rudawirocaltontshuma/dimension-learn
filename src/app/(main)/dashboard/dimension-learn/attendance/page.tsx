import { PageHeader } from "../_components/page-header";
import { AttendanceCharts } from "./_components/attendance-charts";
import { AttendanceStats } from "./_components/attendance-stats";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Attendance" description="Daily attendance breakdown and trends across classes." />
      <AttendanceStats />
      <AttendanceCharts />
    </div>
  );
}
