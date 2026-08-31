import { PageHeader } from "../_components/page-header";
import { teachers } from "../_data/mock-data";
import { TeachersTable } from "./_components/teachers-table";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Teachers" description="Faculty directory with course load, students, and performance." />
      <TeachersTable teachers={teachers} />
    </div>
  );
}
