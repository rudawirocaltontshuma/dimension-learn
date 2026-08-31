"use client";

import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { StatusBadge } from "../../_components/status-badge";
import type { Student } from "../../_data/mock-data";

export function StudentsTable({ students }: { students: Student[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead>Student ID</TableHead>
            <TableHead>Program</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Attendance</TableHead>
            <TableHead>Average Grade</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>
                <Link
                  href={`/dashboard/nexora-learn/students/${student.id}`}
                  className="flex items-center gap-2.5 font-medium hover:underline"
                >
                  <Avatar size="sm">
                    <AvatarFallback>{student.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm">{student.name}</span>
                    <span className="text-muted-foreground text-xs">{student.email}</span>
                  </div>
                </Link>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm tabular-nums">{student.id}</TableCell>
              <TableCell className="text-sm">{student.program}</TableCell>
              <TableCell className="text-sm">{student.className}</TableCell>
              <TableCell className="text-sm tabular-nums">{student.attendance}%</TableCell>
              <TableCell className="text-sm tabular-nums">{student.averageGrade}%</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={student.progress} className="h-1.5 w-20" />
                  <span className="text-muted-foreground text-xs tabular-nums">{student.progress}%</span>
                </div>
              </TableCell>
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
