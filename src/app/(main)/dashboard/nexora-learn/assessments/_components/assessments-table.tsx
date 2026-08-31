"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { StatusBadge } from "../../_components/status-badge";
import type { Assessment } from "../../_data/mock-data";

export function AssessmentsTable({ assessments }: { assessments: Assessment[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Assessment</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Students</TableHead>
            <TableHead>Avg. Score</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assessments.map((assessment) => (
            <TableRow key={assessment.id}>
              <TableCell className="text-sm font-medium">{assessment.title}</TableCell>
              <TableCell className="text-sm">{assessment.courseTitle}</TableCell>
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
  );
}
