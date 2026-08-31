"use client";

import { Download } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { StatusBadge } from "../../_components/status-badge";
import type { Certificate } from "../../_data/mock-data";

export function CertificatesTable({ certificates }: { certificates: Certificate[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Certificate</TableHead>
            <TableHead>Student</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Issue Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {certificates.map((certificate) => (
            <TableRow key={certificate.id}>
              <TableCell className="text-sm font-medium">{certificate.title}</TableCell>
              <TableCell className="text-sm">{certificate.studentName}</TableCell>
              <TableCell className="text-sm">{certificate.courseTitle}</TableCell>
              <TableCell className="text-sm">{certificate.issueDate}</TableCell>
              <TableCell>
                <StatusBadge status={certificate.status} />
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 text-muted-foreground"
                  disabled={certificate.status !== "Completed"}
                  onClick={() =>
                    toast.success("Certificate downloaded", {
                      description: `${certificate.title} for ${certificate.studentName}.`,
                    })
                  }
                >
                  <Download />
                  <span className="sr-only">Download certificate</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
