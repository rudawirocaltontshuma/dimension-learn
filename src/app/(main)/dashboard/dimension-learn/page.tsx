import Link from "next/link";

import { GraduationCap, Megaphone } from "lucide-react";

import { Button } from "@/components/ui/button";

import { CourseCompletionChart } from "./_components/course-completion-chart";
import { KpiCards } from "./_components/kpi-cards";
import { OverviewCharts } from "./_components/overview-charts";
import { PageHeader } from "./_components/page-header";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader
        title="Dimension Learn"
        description="A unified view of students, teachers, courses, and academic performance."
        actions={
          <>
            <Button asChild size="sm">
              <Link href="/dashboard/dimension-learn/announcements">
                <Megaphone />
                New Announcement
              </Link>
            </Button>
            <Button asChild size="sm" variant="outline">
              <Link href="/dashboard/dimension-learn/grades">
                <GraduationCap />
                Gradebook
              </Link>
            </Button>
          </>
        }
      />

      <KpiCards />
      <OverviewCharts />
      <CourseCompletionChart />
    </div>
  );
}
