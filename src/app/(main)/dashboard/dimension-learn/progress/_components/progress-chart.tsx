"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import { monthlyEnrollment } from "../../_data/mock-data";

const chartConfig = {
  students: { label: "Avg. Progress Index", color: "var(--chart-2)" },
} satisfies ChartConfig;

export function ProgressChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Learning Progress Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <LineChart data={monthlyEnrollment} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
            <CartesianGrid vertical={false} strokeDasharray="4 4" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={10} />
            <YAxis axisLine={false} tickLine={false} tickMargin={10} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line type="monotone" dataKey="students" stroke="var(--color-students)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
