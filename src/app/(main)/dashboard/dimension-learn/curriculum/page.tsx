import { PageHeader } from "../_components/page-header";
import { curriculum } from "../_data/mock-data";
import { CurriculumBuilder } from "./_components/curriculum-builder";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Curriculum" description="Course, module, and lesson structure across the catalog." />
      <CurriculumBuilder courses={curriculum} />
    </div>
  );
}
