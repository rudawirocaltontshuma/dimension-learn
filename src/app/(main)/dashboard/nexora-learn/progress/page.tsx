import { PageHeader } from "../_components/page-header";
import { students } from "../_data/mock-data";
import { ProgressChart } from "./_components/progress-chart";
import { ProgressTable } from "./_components/progress-table";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Learning Progress" description="Module completion and score trends across students." />
      <ProgressChart />
      <ProgressTable students={students} />
    </div>
  );
}
