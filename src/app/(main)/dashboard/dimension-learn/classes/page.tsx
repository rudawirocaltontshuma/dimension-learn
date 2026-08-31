import { PageHeader } from "../_components/page-header";
import { classes } from "../_data/mock-data";
import { ClassesTable } from "./_components/classes-table";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Classes" description="Class sections with schedules, rooms, and rosters." />
      <ClassesTable classes={classes} />
    </div>
  );
}
