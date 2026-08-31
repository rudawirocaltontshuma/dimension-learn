"use client";

import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { StatusBadge } from "../../_components/status-badge";
import type { Teacher } from "../../_data/mock-data";

export function TeachersTable({ teachers }: { teachers: Teacher[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Teacher</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Courses</TableHead>
            <TableHead>Students</TableHead>
            <TableHead>Classes</TableHead>
            <TableHead>Performance</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell>
                <Link
                  href={`/dashboard/nexora-learn/teachers/${teacher.id}`}
                  className="flex items-center gap-2.5 font-medium hover:underline"
                >
                  <Avatar size="sm">
                    <AvatarFallback>{teacher.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm">{teacher.name}</span>
                    <span className="text-muted-foreground text-xs">{teacher.email}</span>
                  </div>
                </Link>
              </TableCell>
              <TableCell className="text-sm">{teacher.department}</TableCell>
              <TableCell className="text-sm tabular-nums">{teacher.courses}</TableCell>
              <TableCell className="text-sm tabular-nums">{teacher.students}</TableCell>
              <TableCell className="text-sm tabular-nums">{teacher.classes}</TableCell>
              <TableCell className="text-sm tabular-nums">{teacher.performance}%</TableCell>
              <TableCell>
                <StatusBadge status={teacher.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
