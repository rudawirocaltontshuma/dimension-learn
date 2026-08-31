"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import { coursePerformance } from "../_data/mock-data";

const chartConfig = {
  avgScore: { label: "Avg. Score", color: "var(--chart-3)" },
} satisfies ChartConfig;

export function CourseCompletionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Average Score by Course</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-72 w-full">
          <BarChart data={coursePerformance} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
            <CartesianGrid vertical={false} strokeDasharray="4 4" />
            <XAxis dataKey="course" axisLine={false} tickLine={false} tickMargin={10} />
            <YAxis axisLine={false} tickLine={false} tickMargin={10} domain={[0, 100]} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="avgScore" fill="var(--color-avgScore)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
