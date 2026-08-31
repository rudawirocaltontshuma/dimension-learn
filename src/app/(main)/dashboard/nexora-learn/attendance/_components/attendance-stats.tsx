import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { attendanceTrend } from "../../_data/mock-data";

export function AttendanceStats() {
  const totals = attendanceTrend.reduce(
    (acc, day) => ({
      present: acc.present + day.present,
      absent: acc.absent + day.absent,
      late: acc.late + day.late,
      excused: acc.excused + day.excused,
    }),
    { present: 0, absent: 0, late: 0, excused: 0 },
  );
  const total = totals.present + totals.absent + totals.late + totals.excused;
  const rate = Math.round((totals.present / total) * 100);

  const cards = [
    { label: "Present", value: totals.present },
    { label: "Absent", value: totals.absent },
    { label: "Late", value: totals.late },
    { label: "Excused", value: totals.excused },
    { label: "Attendance Rate", value: `${rate}%` },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
      {cards.map((card) => (
        <Card key={card.label}>
          <CardHeader>
            <CardTitle className="text-sm">{card.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-foreground leading-none tracking-tight">{card.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
