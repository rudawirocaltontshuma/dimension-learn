import { PageHeader } from "../_components/page-header";
import { courses } from "../_data/mock-data";
import { CoursesTable } from "./_components/courses-table";
import { CreateCourseDialog } from "./_components/create-course-dialog";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader
        title="Courses"
        description="Course catalog with enrollment, modules, and completion progress."
        actions={<CreateCourseDialog />}
      />
      <CoursesTable courses={courses} />
    </div>
  );
}
