import { notFound } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PageHeader } from "../../_components/page-header";
import { StatusBadge } from "../../_components/status-badge";
import { assessments, assignments, courses, curriculum, resources, students } from "../../_data/mock-data";

export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  const courseCurriculum = curriculum.find((c) => c.id === course.id);
  const courseAssignments = assignments.filter((a) => a.courseTitle === course.title);
  const courseAssessments = assessments.filter((a) => a.courseTitle === course.title);
  const courseResources = resources.filter((r) => r.courseTitle === course.title);
  const courseStudents = students.filter((s) => s.enrolledCourses.includes(course.title));

  return (
    <div className="flex flex-col gap-4">
      <PageHeader
        title={course.title}
        description={`${course.code} · ${course.teacherName}`}
        actions={<StatusBadge status={course.status} />}
      />

      <Tabs defaultValue="overview">
        <TabsList className="flex-wrap">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="assessments">Assessments</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Course Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <p className="text-muted-foreground text-sm sm:col-span-4">{course.description}</p>
              <div>
                <div className="text-muted-foreground text-xs">Students</div>
                <div className="text-xl tracking-tight">{course.students}</div>
              </div>
              <div>
                <div className="text-muted-foreground text-xs">Modules</div>
                <div className="text-xl tracking-tight">{course.modules}</div>
              </div>
              <div>
                <div className="text-muted-foreground text-xs">Completion</div>
                <div className="text-xl tracking-tight">{course.completion}%</div>
              </div>
              <div>
                <div className="text-muted-foreground text-xs">Status</div>
                <StatusBadge status={course.status} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="curriculum">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Curriculum</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {courseCurriculum?.modules.map((mod) => (
                <div key={mod.id} className="rounded-lg border p-3">
                  <div className="font-medium text-sm">{mod.title}</div>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {mod.lessons.map((lesson) => (
                      <li key={lesson.id} className="flex flex-wrap items-center justify-between gap-2 text-sm">
                        <span>{lesson.title}</span>
                        <span className="flex items-center gap-2 text-muted-foreground text-xs">
                          {lesson.duration}
                          <StatusBadge status={lesson.status} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )) ?? <p className="text-muted-foreground text-sm">No curriculum data yet.</p>}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Enrolled Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Average Grade</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courseStudents.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium text-sm">{student.name}</TableCell>
                        <TableCell className="text-sm">{student.program}</TableCell>
                        <TableCell className="text-sm tabular-nums">{student.averageGrade}%</TableCell>
                        <TableCell>
                          <StatusBadge status={student.status} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Assignment</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Submissions</TableHead>
                      <TableHead>Avg. Score</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courseAssignments.map((assignment) => (
                      <TableRow key={assignment.id}>
                        <TableCell className="font-medium text-sm">{assignment.title}</TableCell>
                        <TableCell className="text-sm">{assignment.dueDate}</TableCell>
                        <TableCell className="text-sm tabular-nums">
                          {assignment.submissions}/{assignment.totalStudents}
                        </TableCell>
                        <TableCell className="text-sm tabular-nums">{assignment.averageScore}%</TableCell>
                        <TableCell>
                          <StatusBadge status={assignment.status} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assessments">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Assessments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Assessment</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Avg. Score</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courseAssessments.map((assessment) => (
                      <TableRow key={assessment.id}>
                        <TableCell className="font-medium text-sm">{assessment.title}</TableCell>
                        <TableCell className="text-sm">{assessment.date}</TableCell>
                        <TableCell className="text-sm tabular-nums">{assessment.students}</TableCell>
                        <TableCell className="text-sm tabular-nums">{assessment.averageScore || "—"}%</TableCell>
                        <TableCell>
                          <StatusBadge status={assessment.status} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Resources</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {courseResources.length === 0 ? (
                <p className="text-muted-foreground text-sm">No resources uploaded yet.</p>
              ) : (
                courseResources.map((resource) => (
                  <div key={resource.id} className="rounded-lg border p-3">
                    <div className="font-medium text-sm">{resource.title}</div>
                    <div className="text-muted-foreground text-xs">
                      {resource.type} · {resource.size}
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Course Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Overall completion</span>
                <span className="tabular-nums">{course.completion}%</span>
              </div>
              <Progress value={course.completion} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
