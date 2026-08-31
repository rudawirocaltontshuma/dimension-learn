import { PageHeader } from "../_components/page-header";
import { assessments } from "../_data/mock-data";
import { AssessmentsTable } from "./_components/assessments-table";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Assessments" description="Exams and quizzes scheduled across all active courses." />
      <AssessmentsTable assessments={assessments} />
    </div>
  );
}
