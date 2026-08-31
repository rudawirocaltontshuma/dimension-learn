import { PageHeader } from "../_components/page-header";
import { students } from "../_data/mock-data";
import { CreateStudentDialog } from "./_components/create-student-dialog";
import { StudentsTable } from "./_components/students-table";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader
        title="Students"
        description="Directory of all enrolled students across programs and classes."
        actions={<CreateStudentDialog />}
      />
      <StudentsTable students={students} />
    </div>
  );
}
