"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { attendanceByClass, classes, courses, monthlyEnrollment, students, teachers } from "../../_data/mock-data";

const reports = [
  { value: "students", label: "Student Report" },
  { value: "courses", label: "Course Report" },
  { value: "attendance", label: "Attendance Report" },
  { value: "grades", label: "Grade Report" },
  { value: "teachers", label: "Teacher Report" },
  { value: "enrollment", label: "Enrollment Report" },
  { value: "completion", label: "Completion Report" },
];

export function ReportsTabs() {
  return (
    <Tabs defaultValue="students">
      <TabsList className="flex-wrap">
        {reports.map((report) => (
          <TabsTrigger key={report.value} value={report.value}>
            {report.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="students">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Student Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Program</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Avg. Attendance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.from(new Set(students.map((s) => s.program))).map((program) => {
                    const group = students.filter((s) => s.program === program);
                    const avg = Math.round(group.reduce((sum, s) => sum + s.attendance, 0) / group.length);
                    return (
                      <TableRow key={program}>
                        <TableCell className="text-sm">{program}</TableCell>
                        <TableCell className="text-sm tabular-nums">{group.length}</TableCell>
                        <TableCell className="text-sm tabular-nums">{avg}%</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="courses">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Course Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Completion</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="text-sm">{course.title}</TableCell>
                      <TableCell className="text-sm tabular-nums">{course.students}</TableCell>
                      <TableCell className="text-sm tabular-nums">{course.completion}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="attendance">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Attendance by Class</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Class</TableHead>
                    <TableHead>Attendance Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceByClass.map((row) => (
                    <TableRow key={row.className}>
                      <TableCell className="text-sm">{row.className}</TableCell>
                      <TableCell className="text-sm tabular-nums">{row.rate}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="grades">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Grade Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Grade Band</TableHead>
                    <TableHead>Students</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {["A", "B", "C", "D", "F"].map((band) => (
                    <TableRow key={band}>
                      <TableCell className="text-sm">{band}</TableCell>
                      <TableCell className="text-sm tabular-nums">
                        {Math.max(2, Math.round(students.length / 5))}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="teachers">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Teacher Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Teacher</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Performance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teachers.map((teacher) => (
                    <TableRow key={teacher.id}>
                      <TableCell className="text-sm">{teacher.name}</TableCell>
                      <TableCell className="text-sm">{teacher.department}</TableCell>
                      <TableCell className="text-sm tabular-nums">{teacher.performance}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="enrollment">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Monthly Enrollment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead>Total Students</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {monthlyEnrollment.map((row) => (
                    <TableRow key={row.month}>
                      <TableCell className="text-sm">{row.month}</TableCell>
                      <TableCell className="text-sm tabular-nums">{row.students}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="completion">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Class Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Class</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {classes.map((cls) => (
                    <TableRow key={cls.id}>
                      <TableCell className="text-sm">{cls.name}</TableCell>
                      <TableCell className="text-sm tabular-nums">{cls.students}</TableCell>
                      <TableCell className="text-sm">{cls.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
