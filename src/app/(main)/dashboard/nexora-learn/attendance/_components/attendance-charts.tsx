"use client";

import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import { attendanceByClass, attendanceTrend } from "../../_data/mock-data";

const trendConfig = {
  present: { label: "Present", color: "var(--chart-2)" },
  absent: { label: "Absent", color: "var(--chart-4)" },
} satisfies ChartConfig;

const classConfig = {
  rate: { label: "Attendance Rate", color: "var(--chart-1)" },
} satisfies ChartConfig;

export function AttendanceCharts() {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
      <Card className="xl:col-span-7">
        <CardHeader>
          <CardTitle className="text-sm">Attendance Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={trendConfig} className="h-64 w-full">
            <LineChart data={attendanceTrend} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="4 4" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={10} />
              <YAxis axisLine={false} tickLine={false} tickMargin={10} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="present" stroke="var(--color-present)" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="absent" stroke="var(--color-absent)" strokeWidth={2} dot={false} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="xl:col-span-5">
        <CardHeader>
          <CardTitle className="text-sm">Attendance by Class</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={classConfig} className="h-64 w-full">
            <BarChart data={attendanceByClass} layout="vertical" margin={{ left: 0, right: 16, top: 0, bottom: 0 }}>
              <CartesianGrid horizontal={false} strokeDasharray="4 4" />
              <XAxis type="number" domain={[0, 100]} axisLine={false} tickLine={false} tickMargin={10} />
              <YAxis dataKey="className" type="category" axisLine={false} tickLine={false} width={90} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar dataKey="rate" fill="var(--color-rate)" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
