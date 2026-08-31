import { PageHeader } from "../_components/page-header";
import { assignments } from "../_data/mock-data";
import { AssignmentsTable } from "./_components/assignments-table";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Assignments" description="Track assignment submissions and average scores by course." />
      <AssignmentsTable assignments={assignments} />
    </div>
  );
}
