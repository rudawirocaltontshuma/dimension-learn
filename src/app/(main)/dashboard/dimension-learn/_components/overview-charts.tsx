"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import { attendanceTrend, monthlyEnrollment } from "../_data/mock-data";

const enrollmentConfig = {
  students: { label: "Students", color: "var(--chart-1)" },
} satisfies ChartConfig;

const attendanceConfig = {
  present: { label: "Present", color: "var(--chart-2)" },
  absent: { label: "Absent", color: "var(--chart-4)" },
} satisfies ChartConfig;

export function OverviewCharts() {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
      <Card className="xl:col-span-7">
        <CardHeader>
          <CardTitle className="text-sm">Enrollment Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={enrollmentConfig} className="h-64 w-full">
            <AreaChart data={monthlyEnrollment} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
              <defs>
                <linearGradient id="dimension-enrollment-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-students)" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="var(--color-students)" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="4 4" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={10} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="students"
                stroke="var(--color-students)"
                fill="url(#dimension-enrollment-fill)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="xl:col-span-5">
        <CardHeader>
          <CardTitle className="text-sm">Weekly Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={attendanceConfig} className="h-64 w-full">
            <AreaChart data={attendanceTrend} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="4 4" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={10} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="present"
                stroke="var(--color-present)"
                fill="var(--color-present)"
                fillOpacity={0.15}
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="absent"
                stroke="var(--color-absent)"
                fill="var(--color-absent)"
                fillOpacity={0.15}
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
