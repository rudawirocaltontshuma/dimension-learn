import { ArrowUp, Info } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { classes, courses, students, teachers } from "../_data/mock-data";

export function KpiCards() {
  const activeStudents = students.filter((s) => s.status === "Active").length;
  const activeCourses = courses.filter((c) => c.status === "Active").length;
  const avgAttendance = Math.round(students.reduce((sum, s) => sum + s.attendance, 0) / students.length);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Total Students</CardTitle>
          <CardAction>
            <Info className="size-3 text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-3xl text-foreground leading-none tracking-tight">{students.length}</span>
            <Badge className="rounded-sm border-green-600/50 bg-green-500/10 px-1 font-normal text-green-700 text-xs dark:border-green-800/50 dark:bg-green-500/15 dark:text-green-300">
              <ArrowUp />
              4.3%
            </Badge>
          </div>
          <div className="text-right text-muted-foreground text-xs">{activeStudents} active enrollments</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Teaching Staff</CardTitle>
          <CardAction>
            <Info className="size-3 text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col">
          <div className="text-3xl text-foreground leading-none tracking-tight">{teachers.length}</div>
          <div className="text-right text-muted-foreground text-xs">across 5 departments</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Active Courses</CardTitle>
          <CardAction>
            <Info className="size-3 text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col">
          <div className="text-3xl text-foreground leading-none tracking-tight">{activeCourses}</div>
          <div className="text-right text-muted-foreground text-xs">{classes.length} class sections</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Avg. Attendance</CardTitle>
          <CardAction>
            <Info className="size-3 text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-3xl text-foreground leading-none tracking-tight">{avgAttendance}%</span>
            <Badge className="rounded-sm border-green-600/50 bg-green-500/10 px-1 font-normal text-green-700 text-xs dark:border-green-800/50 dark:bg-green-500/15 dark:text-green-300">
              <ArrowUp />
              1.2%
            </Badge>
          </div>
          <div className="text-right text-muted-foreground text-xs">vs last term</div>
        </CardContent>
      </Card>
    </div>
  );
}
