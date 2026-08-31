import { PageHeader } from "../_components/page-header";
import { ReportsTabs } from "./_components/reports-tabs";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Reports" description="Generated summaries across students, courses, and staff." />
      <ReportsTabs />
    </div>
  );
}
