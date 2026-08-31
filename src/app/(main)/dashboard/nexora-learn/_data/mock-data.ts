// Shared mock data source for the Nexora Learn module.
// Every subroute should import from here instead of forking its own data.

export type Status = "Active" | "Inactive" | "Pending" | "Completed" | "Archived" | "On Leave";

export const programs = [
  "Computer Science",
  "Business Administration",
  "Fine Arts",
  "Mechanical Engineering",
  "Biology",
];

export interface Student {
  id: string;
  name: string;
  avatar: string;
  email: string;
  program: string;
  className: string;
  attendance: number;
  averageGrade: number;
  progress: number;
  status: Status;
  enrolledCourses: string[];
}

export interface Teacher {
  id: string;
  name: string;
  avatar: string;
  email: string;
  department: string;
  courses: number;
  students: number;
  classes: number;
  performance: number;
  status: Status;
}

export interface Course {
  id: string;
  title: string;
  code: string;
  teacherId: string;
  teacherName: string;
  students: number;
  modules: number;
  completion: number;
  status: Status;
  description: string;
}

export interface ClassSection {
  id: string;
  name: string;
  courseId: string;
  courseTitle: string;
  teacherName: string;
  students: number;
  schedule: string;
  room: string;
  status: Status;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completion: number;
  status: Status;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface CurriculumCourse {
  id: string;
  title: string;
  modules: Module[];
}

export interface Assignment {
  id: string;
  title: string;
  courseTitle: string;
  teacherName: string;
  dueDate: string;
  submissions: number;
  totalStudents: number;
  averageScore: number;
  status: Status;
}

export interface Assessment {
  id: string;
  title: string;
  courseTitle: string;
  date: string;
  students: number;
  averageScore: number;
  status: Status;
}

export interface GradeEntry {
  id: string;
  studentName: string;
  courseTitle: string;
  assignment: string;
  assessment: string;
  score: number;
  grade: string;
}

export interface Certificate {
  id: string;
  title: string;
  studentName: string;
  courseTitle: string;
  issueDate: string;
  status: Status;
}

export interface Announcement {
  id: string;
  title: string;
  body: string;
  audience: string;
  date: string;
  status: "Published" | "Draft" | "Scheduled";
}

export interface Resource {
  id: string;
  title: string;
  type: "Document" | "Video" | "Presentation" | "Link";
  courseTitle: string;
  size: string;
  updated: string;
}

const firstNames = [
  "Amara",
  "Liam",
  "Sofia",
  "Noah",
  "Isabella",
  "Ethan",
  "Maya",
  "Lucas",
  "Chloe",
  "Mason",
  "Zara",
  "Elijah",
  "Ava",
  "James",
  "Layla",
  "Benjamin",
  "Nora",
  "Henry",
  "Aria",
  "Owen",
];
const lastNames = [
  "Okafor",
  "Chen",
  "Martinez",
  "Kim",
  "Patel",
  "Nguyen",
  "Silva",
  "Johansson",
  "Kowalski",
  "Rossi",
  "Dubois",
  "Haddad",
  "Ivanova",
  "Osei",
  "Tanaka",
  "Fischer",
  "Larsen",
  "Costa",
  "Yilmaz",
  "Novak",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function seededName(seed: number) {
  const first = firstNames[seed % firstNames.length];
  const last = lastNames[(seed * 7 + 3) % lastNames.length];
  return `${first} ${last}`;
}

function scoreToLetterGrade(score: number) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

const statuses: Status[] = ["Active", "Active", "Active", "Inactive", "Pending"];

export const courses: Course[] = [
  {
    id: "crs-101",
    title: "Intro to Computer Science",
    code: "CS-101",
    teacherId: "tch-01",
    teacherName: "Dr. Amara Okafor",
    students: 86,
    modules: 8,
    completion: 72,
    status: "Active",
    description: "Foundations of programming, algorithms, and computational thinking.",
  },
  {
    id: "crs-102",
    title: "Data Structures & Algorithms",
    code: "CS-201",
    teacherId: "tch-01",
    teacherName: "Dr. Amara Okafor",
    students: 64,
    modules: 10,
    completion: 58,
    status: "Active",
    description: "Core data structures, complexity analysis, and algorithm design.",
  },
  {
    id: "crs-103",
    title: "Principles of Marketing",
    code: "BUS-110",
    teacherId: "tch-02",
    teacherName: "Prof. Liam Chen",
    students: 92,
    modules: 6,
    completion: 81,
    status: "Active",
    description: "Market research, branding, and consumer behavior fundamentals.",
  },
  {
    id: "crs-104",
    title: "Financial Accounting",
    code: "BUS-210",
    teacherId: "tch-02",
    teacherName: "Prof. Liam Chen",
    students: 58,
    modules: 9,
    completion: 45,
    status: "Active",
    description: "Recording, reporting, and interpreting financial statements.",
  },
  {
    id: "crs-105",
    title: "Drawing & Composition",
    code: "ART-101",
    teacherId: "tch-03",
    teacherName: "Ms. Sofia Martinez",
    students: 34,
    modules: 5,
    completion: 90,
    status: "Active",
    description: "Fundamentals of visual composition, line, and form.",
  },
  {
    id: "crs-106",
    title: "Digital Illustration",
    code: "ART-205",
    teacherId: "tch-03",
    teacherName: "Ms. Sofia Martinez",
    students: 28,
    modules: 7,
    completion: 63,
    status: "Pending",
    description: "Vector and raster illustration techniques for digital media.",
  },
  {
    id: "crs-107",
    title: "Thermodynamics",
    code: "MECH-220",
    teacherId: "tch-04",
    teacherName: "Dr. Noah Kim",
    students: 47,
    modules: 11,
    completion: 38,
    status: "Active",
    description: "Energy systems, heat transfer, and thermodynamic cycles.",
  },
  {
    id: "crs-108",
    title: "Machine Design",
    code: "MECH-310",
    teacherId: "tch-04",
    teacherName: "Dr. Noah Kim",
    students: 39,
    modules: 9,
    completion: 55,
    status: "Archived",
    description: "Mechanical component design, stress analysis, and materials.",
  },
  {
    id: "crs-109",
    title: "Cell Biology",
    code: "BIO-101",
    teacherId: "tch-05",
    teacherName: "Dr. Isabella Patel",
    students: 71,
    modules: 8,
    completion: 67,
    status: "Active",
    description: "Structure and function of cells, organelles, and cellular processes.",
  },
  {
    id: "crs-110",
    title: "Genetics",
    code: "BIO-220",
    teacherId: "tch-05",
    teacherName: "Dr. Isabella Patel",
    students: 52,
    modules: 10,
    completion: 49,
    status: "Active",
    description: "Inheritance patterns, molecular genetics, and genomics.",
  },
];

export const teachers: Teacher[] = [
  {
    id: "tch-01",
    name: "Dr. Amara Okafor",
    avatar: initials("Amara Okafor"),
    email: "amara.okafor@nexoralearn.edu",
    department: "Computer Science",
    courses: 2,
    students: 150,
    classes: 4,
    performance: 92,
    status: "Active",
  },
  {
    id: "tch-02",
    name: "Prof. Liam Chen",
    avatar: initials("Liam Chen"),
    email: "liam.chen@nexoralearn.edu",
    department: "Business",
    courses: 2,
    students: 150,
    classes: 5,
    performance: 88,
    status: "Active",
  },
  {
    id: "tch-03",
    name: "Ms. Sofia Martinez",
    avatar: initials("Sofia Martinez"),
    email: "sofia.martinez@nexoralearn.edu",
    department: "Fine Arts",
    courses: 2,
    students: 62,
    classes: 3,
    performance: 95,
    status: "Active",
  },
  {
    id: "tch-04",
    name: "Dr. Noah Kim",
    avatar: initials("Noah Kim"),
    email: "noah.kim@nexoralearn.edu",
    department: "Mechanical Engineering",
    courses: 2,
    students: 86,
    classes: 3,
    performance: 81,
    status: "On Leave",
  },
  {
    id: "tch-05",
    name: "Dr. Isabella Patel",
    avatar: initials("Isabella Patel"),
    email: "isabella.patel@nexoralearn.edu",
    department: "Biology",
    courses: 2,
    students: 123,
    classes: 4,
    performance: 90,
    status: "Active",
  },
  {
    id: "tch-06",
    name: "Mr. Ethan Nguyen",
    avatar: initials("Ethan Nguyen"),
    email: "ethan.nguyen@nexoralearn.edu",
    department: "Computer Science",
    courses: 1,
    students: 40,
    classes: 2,
    performance: 76,
    status: "Inactive",
  },
];

export const students: Student[] = Array.from({ length: 24 }, (_, i) => {
  const name = seededName(i);
  const program = programs[i % programs.length];
  const course = courses[i % courses.length];
  const attendance = 78 + ((i * 3) % 22);
  const averageGrade = 62 + ((i * 5) % 38);
  const progress = 40 + ((i * 7) % 60);
  return {
    id: `stu-${String(i + 1).padStart(3, "0")}`,
    name,
    avatar: initials(name),
    email: `${name.toLowerCase().replace(" ", ".")}@nexoralearn.edu`,
    program,
    className: `${program.split(" ")[0]}-${100 + (i % 4) * 10}`,
    attendance,
    averageGrade,
    progress,
    status: statuses[i % statuses.length],
    enrolledCourses: [course.title, courses[(i + 3) % courses.length].title],
  };
});

export const classes: ClassSection[] = [
  {
    id: "cls-01",
    name: "CS-101 Section A",
    courseId: "crs-101",
    courseTitle: "Intro to Computer Science",
    teacherName: "Dr. Amara Okafor",
    students: 42,
    schedule: "Mon/Wed 09:00–10:30",
    room: "Room 204",
    status: "Active",
  },
  {
    id: "cls-02",
    name: "CS-101 Section B",
    courseId: "crs-101",
    courseTitle: "Intro to Computer Science",
    teacherName: "Dr. Amara Okafor",
    students: 44,
    schedule: "Tue/Thu 11:00–12:30",
    room: "Room 204",
    status: "Active",
  },
  {
    id: "cls-03",
    name: "CS-201 Section A",
    courseId: "crs-102",
    courseTitle: "Data Structures & Algorithms",
    teacherName: "Dr. Amara Okafor",
    students: 64,
    schedule: "Mon/Wed/Fri 13:00–14:00",
    room: "Lab 3",
    status: "Active",
  },
  {
    id: "cls-04",
    name: "BUS-110 Section A",
    courseId: "crs-103",
    courseTitle: "Principles of Marketing",
    teacherName: "Prof. Liam Chen",
    students: 92,
    schedule: "Tue/Thu 09:00–10:30",
    room: "Hall B",
    status: "Active",
  },
  {
    id: "cls-05",
    name: "BUS-210 Section A",
    courseId: "crs-104",
    courseTitle: "Financial Accounting",
    teacherName: "Prof. Liam Chen",
    students: 58,
    schedule: "Mon/Wed 14:00–15:30",
    room: "Room 112",
    status: "Pending",
  },
  {
    id: "cls-06",
    name: "ART-101 Section A",
    courseId: "crs-105",
    courseTitle: "Drawing & Composition",
    teacherName: "Ms. Sofia Martinez",
    students: 34,
    schedule: "Fri 10:00–13:00",
    room: "Studio 1",
    status: "Active",
  },
  {
    id: "cls-07",
    name: "MECH-220 Section A",
    courseId: "crs-107",
    courseTitle: "Thermodynamics",
    teacherName: "Dr. Noah Kim",
    students: 47,
    schedule: "Tue/Thu 14:00–15:30",
    room: "Lab 6",
    status: "Active",
  },
  {
    id: "cls-08",
    name: "BIO-101 Section A",
    courseId: "crs-109",
    courseTitle: "Cell Biology",
    teacherName: "Dr. Isabella Patel",
    students: 71,
    schedule: "Mon/Wed/Fri 08:00–09:00",
    room: "Room 301",
    status: "Active",
  },
];

export const curriculum: CurriculumCourse[] = courses.slice(0, 6).map((course, ci) => ({
  id: course.id,
  title: course.title,
  modules: Array.from({ length: 3 }, (_, mi) => ({
    id: `${course.id}-mod-${mi + 1}`,
    title: `Module ${mi + 1}: ${["Foundations", "Core Concepts", "Applied Practice"][mi]}`,
    lessons: Array.from({ length: 3 }, (_, li) => {
      const completion = Math.max(0, 100 - (ci * 5 + mi * 20 + li * 15));
      let status: Status = "Active";
      if (completion === 100) {
        status = "Completed";
      } else if (completion === 0) {
        status = "Pending";
      }
      return {
        id: `${course.id}-mod-${mi + 1}-lesson-${li + 1}`,
        title: `Lesson ${li + 1}: ${["Overview", "Deep Dive", "Workshop"][li]}`,
        duration: `${25 + li * 10} min`,
        completion,
        status,
      } satisfies Lesson;
    }),
  })),
}));

export const assignments: Assignment[] = [
  {
    id: "asg-01",
    title: "Algorithm Complexity Report",
    courseTitle: "Data Structures & Algorithms",
    teacherName: "Dr. Amara Okafor",
    dueDate: "2026-09-05",
    submissions: 51,
    totalStudents: 64,
    averageScore: 78,
    status: "Active",
  },
  {
    id: "asg-02",
    title: "Marketing Plan Draft",
    courseTitle: "Principles of Marketing",
    teacherName: "Prof. Liam Chen",
    dueDate: "2026-09-08",
    submissions: 90,
    totalStudents: 92,
    averageScore: 84,
    status: "Active",
  },
  {
    id: "asg-03",
    title: "Balance Sheet Exercise",
    courseTitle: "Financial Accounting",
    teacherName: "Prof. Liam Chen",
    dueDate: "2026-09-02",
    submissions: 58,
    totalStudents: 58,
    averageScore: 71,
    status: "Completed",
  },
  {
    id: "asg-04",
    title: "Portrait Study",
    courseTitle: "Drawing & Composition",
    teacherName: "Ms. Sofia Martinez",
    dueDate: "2026-09-12",
    submissions: 12,
    totalStudents: 34,
    averageScore: 88,
    status: "Pending",
  },
  {
    id: "asg-05",
    title: "Heat Exchanger Problem Set",
    courseTitle: "Thermodynamics",
    teacherName: "Dr. Noah Kim",
    dueDate: "2026-08-29",
    submissions: 40,
    totalStudents: 47,
    averageScore: 65,
    status: "Active",
  },
  {
    id: "asg-06",
    title: "Cell Cycle Lab Report",
    courseTitle: "Cell Biology",
    teacherName: "Dr. Isabella Patel",
    dueDate: "2026-09-15",
    submissions: 20,
    totalStudents: 71,
    averageScore: 79,
    status: "Pending",
  },
  {
    id: "asg-07",
    title: "Intro Programming Quiz Recap",
    courseTitle: "Intro to Computer Science",
    teacherName: "Dr. Amara Okafor",
    dueDate: "2026-08-25",
    submissions: 86,
    totalStudents: 86,
    averageScore: 82,
    status: "Completed",
  },
];

export const assessments: Assessment[] = [
  {
    id: "ase-01",
    title: "Midterm Exam",
    courseTitle: "Intro to Computer Science",
    date: "2026-09-18",
    students: 86,
    averageScore: 74,
    status: "Pending",
  },
  {
    id: "ase-02",
    title: "Data Structures Quiz 3",
    courseTitle: "Data Structures & Algorithms",
    date: "2026-09-10",
    students: 64,
    averageScore: 69,
    status: "Active",
  },
  {
    id: "ase-03",
    title: "Marketing Case Study",
    courseTitle: "Principles of Marketing",
    date: "2026-08-28",
    students: 92,
    averageScore: 85,
    status: "Completed",
  },
  {
    id: "ase-04",
    title: "Accounting Final",
    courseTitle: "Financial Accounting",
    date: "2026-09-22",
    students: 58,
    averageScore: 0,
    status: "Pending",
  },
  {
    id: "ase-05",
    title: "Studio Critique",
    courseTitle: "Drawing & Composition",
    date: "2026-08-30",
    students: 34,
    averageScore: 91,
    status: "Completed",
  },
  {
    id: "ase-06",
    title: "Thermo Unit Test",
    courseTitle: "Thermodynamics",
    date: "2026-09-14",
    students: 47,
    averageScore: 61,
    status: "Active",
  },
];

export const grades: GradeEntry[] = students.slice(0, 18).map((student, i) => {
  const course = courses[i % courses.length];
  const score = 55 + ((i * 9) % 45);
  const grade = scoreToLetterGrade(score);
  return {
    id: `grd-${String(i + 1).padStart(3, "0")}`,
    studentName: student.name,
    courseTitle: course.title,
    assignment: assignments[i % assignments.length].title,
    assessment: assessments[i % assessments.length].title,
    score,
    grade,
  };
});

export const certificates: Certificate[] = students.slice(0, 10).map((student, i) => {
  const course = courses[i % courses.length];
  const statusList: Status[] = ["Completed", "Completed", "Pending", "Completed"];
  return {
    id: `cert-${String(i + 1).padStart(3, "0")}`,
    title: `${course.title} Certificate of Completion`,
    studentName: student.name,
    courseTitle: course.title,
    issueDate: `2026-0${(i % 6) + 3}-${10 + (i % 15)}`,
    status: statusList[i % statusList.length],
  };
});

export const announcements: Announcement[] = [
  {
    id: "ann-01",
    title: "Fall Term Orientation Schedule",
    body: "Orientation sessions run September 1–3 across all campuses. Please review your assigned time slot.",
    audience: "All Students",
    date: "2026-08-25",
    status: "Published",
  },
  {
    id: "ann-02",
    title: "Faculty Meeting — Curriculum Review",
    body: "Mandatory faculty meeting to review the updated curriculum framework for the upcoming term.",
    audience: "Teachers",
    date: "2026-08-27",
    status: "Published",
  },
  {
    id: "ann-03",
    title: "Midterm Exam Window Announced",
    body: "Midterm exams will be held September 15–22. Check your course page for exact times.",
    audience: "All Students",
    date: "2026-09-01",
    status: "Scheduled",
  },
  {
    id: "ann-04",
    title: "Library Extended Hours",
    body: "The library will extend hours to 11 PM during exam weeks starting this month.",
    audience: "All Students",
    date: "2026-08-20",
    status: "Published",
  },
  {
    id: "ann-05",
    title: "New Grading Rubric Draft",
    body: "A draft of the updated grading rubric is available for department review and feedback.",
    audience: "Teachers",
    date: "2026-08-30",
    status: "Draft",
  },
  {
    id: "ann-06",
    title: "Parent-Teacher Conference Sign-up",
    body: "Sign-up slots for the fall parent-teacher conference are now open.",
    audience: "Parents",
    date: "2026-09-05",
    status: "Scheduled",
  },
];

export const resources: Resource[] = [
  {
    id: "res-01",
    title: "CS-101 Syllabus",
    type: "Document",
    courseTitle: "Intro to Computer Science",
    size: "1.2 MB",
    updated: "2026-08-10",
  },
  {
    id: "res-02",
    title: "Algorithm Complexity Lecture",
    type: "Video",
    courseTitle: "Data Structures & Algorithms",
    size: "48 min",
    updated: "2026-08-14",
  },
  {
    id: "res-03",
    title: "Marketing Fundamentals Deck",
    type: "Presentation",
    courseTitle: "Principles of Marketing",
    size: "6.4 MB",
    updated: "2026-08-16",
  },
  {
    id: "res-04",
    title: "Accounting Standards Reference",
    type: "Link",
    courseTitle: "Financial Accounting",
    size: "External",
    updated: "2026-08-18",
  },
  {
    id: "res-05",
    title: "Composition Techniques Handout",
    type: "Document",
    courseTitle: "Drawing & Composition",
    size: "3.1 MB",
    updated: "2026-08-12",
  },
  {
    id: "res-06",
    title: "Thermodynamics Cycle Animation",
    type: "Video",
    courseTitle: "Thermodynamics",
    size: "22 min",
    updated: "2026-08-19",
  },
  {
    id: "res-07",
    title: "Cell Biology Overview Slides",
    type: "Presentation",
    courseTitle: "Cell Biology",
    size: "5.8 MB",
    updated: "2026-08-21",
  },
  {
    id: "res-08",
    title: "Genetics Reading List",
    type: "Link",
    courseTitle: "Genetics",
    size: "External",
    updated: "2026-08-22",
  },
  {
    id: "res-09",
    title: "Digital Illustration Brush Pack",
    type: "Document",
    courseTitle: "Digital Illustration",
    size: "9.5 MB",
    updated: "2026-08-11",
  },
  {
    id: "res-10",
    title: "Machine Design Case Study",
    type: "Video",
    courseTitle: "Machine Design",
    size: "35 min",
    updated: "2026-08-13",
  },
];

export const attendanceTrend = [
  { day: "Mon", present: 412, absent: 28, late: 14, excused: 6 },
  { day: "Tue", present: 398, absent: 35, late: 18, excused: 9 },
  { day: "Wed", present: 421, absent: 22, late: 11, excused: 6 },
  { day: "Thu", present: 405, absent: 30, late: 16, excused: 9 },
  { day: "Fri", present: 388, absent: 41, late: 20, excused: 11 },
];

export const attendanceByClass = classes.slice(0, 6).map((c) => ({
  className: c.name,
  rate: 82 + ((c.students * 3) % 16),
}));

export const monthlyEnrollment = [
  { month: "Mar", students: 1180 },
  { month: "Apr", students: 1210 },
  { month: "May", students: 1245 },
  { month: "Jun", students: 1190 },
  { month: "Jul", students: 1260 },
  { month: "Aug", students: 1320 },
];

export const coursePerformance = courses
  .slice(0, 6)
  .map((c) => ({ course: c.code, avgScore: 60 + (c.completion % 35) }));

export const departmentDistribution = [
  { department: "Computer Science", value: 150 },
  { department: "Business", value: 150 },
  { department: "Fine Arts", value: 62 },
  { department: "Mechanical Engineering", value: 86 },
  { department: "Biology", value: 123 },
];
