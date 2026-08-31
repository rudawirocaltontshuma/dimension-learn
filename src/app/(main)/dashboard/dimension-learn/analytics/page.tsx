import { PageHeader } from "../_components/page-header";
import { AnalyticsTabs } from "./_components/analytics-tabs";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Analytics" description="Deeper insight into students, courses, teachers, and attendance." />
      <AnalyticsTabs />
    </div>
  );
}
