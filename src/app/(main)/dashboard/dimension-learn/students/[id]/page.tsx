import { notFound } from "next/navigation";

import { Mail, School } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { PageHeader } from "../../_components/page-header";
import { StatusBadge } from "../../_components/status-badge";
import { courses, grades, students } from "../../_data/mock-data";

export function generateStaticParams() {
  return students.map((student) => ({ id: student.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const student = students.find((s) => s.id === id);

  if (!student) {
    notFound();
  }

  const studentCourses = courses.filter((course) => student.enrolledCourses.includes(course.title));
  const studentGrades = grades.filter((grade) => grade.studentName === student.name);

  return (
    <div className="flex flex-col gap-4">
      <PageHeader
        title={student.name}
        description={`${student.program} · ${student.className}`}
        actions={<StatusBadge status={student.status} />}
      />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
        <Card className="xl:col-span-4">
          <CardHeader>
            <CardTitle className="text-sm">Profile</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Avatar size="lg">
                <AvatarFallback>{student.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-sm">{student.name}</div>
                <div className="flex items-center gap-1 text-muted-foreground text-xs">
                  <Mail className="size-3" />
                  {student.email}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-xs">
              <School className="size-3.5" />
              {student.className}
            </div>
            <div className="grid grid-cols-2 gap-4 border-t pt-4">
              <div>
                <div className="text-muted-foreground text-xs">Attendance</div>
                <div className="text-xl tracking-tight">{student.attendance}%</div>
              </div>
              <div>
                <div className="text-muted-foreground text-xs">Average Grade</div>
                <div className="text-xl tracking-tight">{student.averageGrade}%</div>
              </div>
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Overall Progress</span>
                <span className="tabular-nums">{student.progress}%</span>
              </div>
              <Progress value={student.progress} />
            </div>
          </CardContent>
        </Card>

        <Card className="xl:col-span-8">
          <CardHeader>
            <CardTitle className="text-sm">Enrolled Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {studentCourses.map((course) => (
                <div key={course.id} className="flex flex-col gap-2 rounded-lg border p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{course.title}</span>
                    <StatusBadge status={course.status} />
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {course.code} · {course.teacherName}
                  </div>
                  <Progress value={course.completion} className="h-1.5" />
                  <div className="text-muted-foreground text-xs">{course.completion}% complete</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Grades & Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Assignment</TableHead>
                  <TableHead>Assessment</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Grade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentGrades.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground text-sm">
                      No grade records yet.
                    </TableCell>
                  </TableRow>
                ) : (
                  studentGrades.map((grade) => (
                    <TableRow key={grade.id}>
                      <TableCell className="text-sm">{grade.courseTitle}</TableCell>
                      <TableCell className="text-sm">{grade.assignment}</TableCell>
                      <TableCell className="text-sm">{grade.assessment}</TableCell>
                      <TableCell className="text-sm tabular-nums">{grade.score}%</TableCell>
                      <TableCell className="text-sm">{grade.grade}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
