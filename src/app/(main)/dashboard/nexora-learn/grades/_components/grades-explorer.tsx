"use client";

import { useMemo, useState } from "react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import type { GradeEntry } from "../../_data/mock-data";

export function GradesExplorer({ grades }: { grades: GradeEntry[] }) {
  const [course, setCourse] = useState("all");
  const [student, setStudent] = useState("all");

  const courses = useMemo(() => Array.from(new Set(grades.map((g) => g.courseTitle))), [grades]);
  const studentNames = useMemo(() => Array.from(new Set(grades.map((g) => g.studentName))), [grades]);

  const filtered = grades.filter(
    (grade) =>
      (course === "all" || grade.courseTitle === course) && (student === "all" || grade.studentName === student),
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Select value={course} onValueChange={setCourse}>
          <SelectTrigger className="w-full sm:w-56">
            <SelectValue placeholder="Filter by course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All courses</SelectItem>
            {courses.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={student} onValueChange={setStudent}>
          <SelectTrigger className="w-full sm:w-56">
            <SelectValue placeholder="Filter by student" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All students</SelectItem>
            {studentNames.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Assignment</TableHead>
              <TableHead>Assessment</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Grade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground text-sm">
                  No grade records match these filters.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((grade) => (
                <TableRow key={grade.id}>
                  <TableCell className="font-medium text-sm">{grade.studentName}</TableCell>
                  <TableCell className="text-sm">{grade.courseTitle}</TableCell>
                  <TableCell className="text-sm">{grade.assignment}</TableCell>
                  <TableCell className="text-sm">{grade.assessment}</TableCell>
                  <TableCell className="text-sm tabular-nums">{grade.score}%</TableCell>
                  <TableCell className="text-sm">{grade.grade}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
