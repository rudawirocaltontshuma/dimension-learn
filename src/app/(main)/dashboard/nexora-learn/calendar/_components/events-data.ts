import { setDate, setHours, setMinutes, startOfMonth } from "date-fns";

const monthStart = startOfMonth(new Date());
const d = (day: number) => setDate(monthStart, day);
const dt = (day: number, hour: number, min = 0) => setMinutes(setHours(setDate(monthStart, day), hour), min);

export const academicEvents = [
  { title: "Fall Term Orientation", start: d(1), end: d(3), allDay: true },
  { title: "CS-101 Midterm Exam", start: dt(5, 9), end: dt(5, 11) },
  { title: "Faculty Meeting — Curriculum Review", start: dt(4, 14), end: dt(4, 15, 30) },
  { title: "Marketing Case Study Due", start: dt(8, 23, 59) },
  { groupId: "office-hours", title: "Office Hours — Dr. Okafor", start: dt(2, 13), end: dt(2, 15) },
  { title: "Studio Critique — Drawing & Composition", start: dt(9, 10), end: dt(9, 13) },
  { title: "Parent-Teacher Conference", start: d(12), end: d(12), allDay: true },
  { groupId: "office-hours", title: "Office Hours — Dr. Okafor", start: dt(9, 13), end: dt(9, 15) },
  { title: "Thermodynamics Unit Test", start: dt(14, 10), end: dt(14, 11, 30) },
  { title: "Library Extended Hours Begin", start: d(15), allDay: true, display: "background" },
  { title: "Midterm Exam Window", start: d(15), end: d(22), allDay: true },
  { title: "Genetics Lab Session", start: dt(18, 9), end: dt(18, 12) },
  { title: "Quarterly Progress Reports Due", start: d(24), allDay: true },
  { title: "Winter Break Planning Meeting", start: dt(26, 15), end: dt(26, 16) },
];
