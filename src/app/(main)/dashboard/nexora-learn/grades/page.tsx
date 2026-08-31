import { PageHeader } from "../_components/page-header";
import { grades } from "../_data/mock-data";
import { GradesExplorer } from "./_components/grades-explorer";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Grades" description="Gradebook overview across assignments and assessments." />
      <GradesExplorer grades={grades} />
    </div>
  );
}
