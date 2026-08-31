"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { StatusBadge } from "../../_components/status-badge";
import type { ClassSection } from "../../_data/mock-data";

export function ClassesTable({ classes }: { classes: ClassSection[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Class</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Teacher</TableHead>
            <TableHead>Students</TableHead>
            <TableHead>Schedule</TableHead>
            <TableHead>Room</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classes.map((cls) => (
            <TableRow key={cls.id}>
              <TableCell className="font-medium text-sm">{cls.name}</TableCell>
              <TableCell className="text-sm">{cls.courseTitle}</TableCell>
              <TableCell className="text-sm">{cls.teacherName}</TableCell>
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
  );
}
