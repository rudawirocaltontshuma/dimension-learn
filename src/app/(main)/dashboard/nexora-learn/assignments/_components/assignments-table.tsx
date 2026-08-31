"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { StatusBadge } from "../../_components/status-badge";
import type { Assignment } from "../../_data/mock-data";

export function AssignmentsTable({ assignments }: { assignments: Assignment[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Assignment</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Teacher</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Submissions</TableHead>
            <TableHead>Avg. Score</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assignments.map((assignment) => (
            <TableRow key={assignment.id}>
              <TableCell className="text-sm font-medium">{assignment.title}</TableCell>
              <TableCell className="text-sm">{assignment.courseTitle}</TableCell>
              <TableCell className="text-sm">{assignment.teacherName}</TableCell>
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
  );
}
