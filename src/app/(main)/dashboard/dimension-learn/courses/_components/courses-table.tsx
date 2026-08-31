"use client";

import Link from "next/link";

import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { StatusBadge } from "../../_components/status-badge";
import type { Course } from "../../_data/mock-data";

export function CoursesTable({ courses }: { courses: Course[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Course</TableHead>
            <TableHead>Code</TableHead>
            <TableHead>Teacher</TableHead>
            <TableHead>Students</TableHead>
            <TableHead>Modules</TableHead>
            <TableHead>Completion</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>
                <Link
                  href={`/dashboard/dimension-learn/courses/${course.id}`}
                  className="font-medium text-sm hover:underline"
                >
                  {course.title}
                </Link>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">{course.code}</TableCell>
              <TableCell className="text-sm">{course.teacherName}</TableCell>
              <TableCell className="text-sm tabular-nums">{course.students}</TableCell>
              <TableCell className="text-sm tabular-nums">{course.modules}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={course.completion} className="h-1.5 w-20" />
                  <span className="text-muted-foreground text-xs tabular-nums">{course.completion}%</span>
                </div>
              </TableCell>
              <TableCell>
                <StatusBadge status={course.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
