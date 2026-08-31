import { notFound } from "next/navigation";

import { Mail } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { PageHeader } from "../../_components/page-header";
import { StatusBadge } from "../../_components/status-badge";
import { classes, courses, teachers } from "../../_data/mock-data";

export function generateStaticParams() {
  return teachers.map((teacher) => ({ id: teacher.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const teacher = teachers.find((t) => t.id === id);

  if (!teacher) {
    notFound();
  }

  const teacherCourses = courses.filter((course) => course.teacherId === teacher.id);
  const teacherClasses = classes.filter((cls) => cls.teacherName === teacher.name);

  return (
    <div className="flex flex-col gap-4">
      <PageHeader
        title={teacher.name}
        description={teacher.department}
        actions={<StatusBadge status={teacher.status} />}
      />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
        <Card className="xl:col-span-4">
          <CardHeader>
            <CardTitle className="text-sm">Profile</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Avatar size="lg">
                <AvatarFallback>{teacher.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-sm">{teacher.name}</div>
                <div className="flex items-center gap-1 text-muted-foreground text-xs">
                  <Mail className="size-3" />
                  {teacher.email}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t pt-4">
              <div>
                <div className="text-muted-foreground text-xs">Courses</div>
                <div className="text-xl tracking-tight">{teacher.courses}</div>
              </div>
              <div>
                <div className="text-muted-foreground text-xs">Students</div>
                <div className="text-xl tracking-tight">{teacher.students}</div>
              </div>
              <div>
                <div className="text-muted-foreground text-xs">Classes</div>
                <div className="text-xl tracking-tight">{teacher.classes}</div>
              </div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">Performance rating</div>
              <div className="text-xl tracking-tight">{teacher.performance}%</div>
            </div>
          </CardContent>
        </Card>

        <Card className="xl:col-span-8">
          <CardHeader>
            <CardTitle className="text-sm">Courses Taught</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Completion</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teacherCourses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-medium text-sm">{course.title}</TableCell>
                      <TableCell className="text-muted-foreground text-sm">{course.code}</TableCell>
                      <TableCell className="text-sm tabular-nums">{course.students}</TableCell>
                      <TableCell className="text-sm tabular-nums">{course.completion}%</TableCell>
                      <TableCell>
                        <StatusBadge status={course.status} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Classes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Class</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Schedule</TableHead>
                  <TableHead>Room</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teacherClasses.map((cls) => (
                  <TableRow key={cls.id}>
                    <TableCell className="font-medium text-sm">{cls.name}</TableCell>
                    <TableCell className="text-sm">{cls.courseTitle}</TableCell>
                    <TableCell className="text-sm tabular-nums">{cls.students}</TableCell>
                    <TableCell className="text-sm">{cls.schedule}</TableCell>
                    <TableCell className="text-sm">{cls.room}</TableCell>
                    <TableCell>
                      <StatusBadge status={cls.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
