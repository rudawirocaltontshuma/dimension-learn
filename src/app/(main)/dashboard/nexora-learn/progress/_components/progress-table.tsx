"use client";

import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { StatusBadge } from "../../_components/status-badge";
import type { Student } from "../../_data/mock-data";

export function ProgressTable({ students }: { students: Student[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Avg. Score</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell className="font-medium text-sm">{student.name}</TableCell>
              <TableCell className="text-sm">{student.enrolledCourses[0]}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={student.progress} className="h-1.5 w-24" />
                  <span className="text-muted-foreground text-xs tabular-nums">{student.progress}%</span>
                </div>
              </TableCell>
              <TableCell className="text-sm tabular-nums">{student.averageGrade}%</TableCell>
              <TableCell>
                <StatusBadge status={student.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
