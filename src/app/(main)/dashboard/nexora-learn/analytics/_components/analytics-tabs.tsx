"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  attendanceByClass,
  attendanceTrend,
  coursePerformance,
  departmentDistribution,
  monthlyEnrollment,
  teachers,
} from "../../_data/mock-data";

const pieColors = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)", "var(--chart-5)"];

const enrollmentConfig = { students: { label: "Students", color: "var(--chart-1)" } } satisfies ChartConfig;
const scoreConfig = { avgScore: { label: "Avg. Score", color: "var(--chart-3)" } } satisfies ChartConfig;
const performanceConfig = { performance: { label: "Performance", color: "var(--chart-2)" } } satisfies ChartConfig;
const attendanceConfig = {
  present: { label: "Present", color: "var(--chart-2)" },
  absent: { label: "Absent", color: "var(--chart-4)" },
} satisfies ChartConfig;
const rateConfig = { rate: { label: "Attendance Rate", color: "var(--chart-1)" } } satisfies ChartConfig;
const distributionConfig = { value: { label: "Students" } } satisfies ChartConfig;

export function AnalyticsTabs() {
  return (
    <Tabs defaultValue="students">
      <TabsList className="flex-wrap">
        <TabsTrigger value="students">Student Analytics</TabsTrigger>
        <TabsTrigger value="courses">Course Analytics</TabsTrigger>
        <TabsTrigger value="teachers">Teacher Analytics</TabsTrigger>
        <TabsTrigger value="attendance">Attendance Analytics</TabsTrigger>
        <TabsTrigger value="performance">Performance Analytics</TabsTrigger>
      </TabsList>

      <TabsContent value="students">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
          <Card className="xl:col-span-7">
            <CardHeader>
              <CardTitle className="text-sm">Enrollment Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={enrollmentConfig} className="h-64 w-full">
                <AreaChart data={monthlyEnrollment} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
                  <CartesianGrid vertical={false} strokeDasharray="4 4" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={10} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="students"
                    stroke="var(--color-students)"
                    fill="var(--color-students)"
                    fillOpacity={0.15}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card className="xl:col-span-5">
            <CardHeader>
              <CardTitle className="text-sm">Students by Department</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={distributionConfig} className="mx-auto h-64 aspect-square">
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Pie data={departmentDistribution} dataKey="value" nameKey="department" innerRadius={50}>
                    {departmentDistribution.map((entry, index) => (
                      <Cell key={entry.department} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="courses">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Average Score by Course</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={scoreConfig} className="h-72 w-full">
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
      </TabsContent>

      <TabsContent value="teachers">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Performance by Teacher</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={performanceConfig} className="h-72 w-full">
              <BarChart
                data={teachers.map((t) => ({ name: t.name.split(" ").slice(-1)[0], performance: t.performance }))}
                layout="vertical"
                margin={{ left: 0, right: 16, top: 0, bottom: 0 }}
              >
                <CartesianGrid horizontal={false} strokeDasharray="4 4" />
                <XAxis type="number" domain={[0, 100]} axisLine={false} tickLine={false} tickMargin={10} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={70} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="performance" fill="var(--color-performance)" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="attendance">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
          <Card className="xl:col-span-7">
            <CardHeader>
              <CardTitle className="text-sm">Attendance Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={attendanceConfig} className="h-64 w-full">
                <LineChart data={attendanceTrend} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
                  <CartesianGrid vertical={false} strokeDasharray="4 4" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={10} />
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
              <ChartContainer config={rateConfig} className="h-64 w-full">
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
      </TabsContent>

      <TabsContent value="performance">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Overall Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={enrollmentConfig} className="h-72 w-full">
              <LineChart data={monthlyEnrollment} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
                <CartesianGrid vertical={false} strokeDasharray="4 4" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={10} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="students" stroke="var(--color-students)" strokeWidth={2} dot={false} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
