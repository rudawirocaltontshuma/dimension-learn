"use client";

import { useState } from "react";

import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { StatusBadge } from "../../_components/status-badge";
import type { CurriculumCourse } from "../../_data/mock-data";

export function CurriculumBuilder({ courses }: { courses: CurriculumCourse[] }) {
  const [data, setData] = useState(courses);

  function removeLesson(courseId: string, moduleId: string, lessonId: string) {
    setData((prev) =>
      prev.map((course) =>
        course.id !== courseId
          ? course
          : {
              ...course,
              modules: course.modules.map((mod) =>
                mod.id !== moduleId ? mod : { ...mod, lessons: mod.lessons.filter((l) => l.id !== lessonId) },
              ),
            },
      ),
    );
    toast.success("Lesson removed");
  }

  return (
    <div className="flex flex-col gap-4">
      {data.map((course) => (
        <Card key={course.id}>
          <CardHeader>
            <CardTitle className="text-sm">{course.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className="w-full">
              {course.modules.map((mod) => (
                <AccordionItem key={mod.id} value={mod.id}>
                  <AccordionTrigger className="text-sm">{mod.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2">
                      {mod.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="flex flex-col gap-2 rounded-lg border p-3 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div className="flex flex-col gap-1">
                            <span className="font-medium text-sm">{lesson.title}</span>
                            <span className="text-muted-foreground text-xs">{lesson.duration}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              <Progress value={lesson.completion} className="h-1.5 w-20" />
                              <span className="text-muted-foreground text-xs tabular-nums">{lesson.completion}%</span>
                            </div>
                            <StatusBadge status={lesson.status} />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="size-8 text-muted-foreground"
                              onClick={() => removeLesson(course.id, mod.id, lesson.id)}
                            >
                              <Trash2 />
                              <span className="sr-only">Remove lesson</span>
                            </Button>
                          </div>
                        </div>
                      ))}
                      {mod.lessons.length === 0 ? (
                        <p className="text-muted-foreground text-sm">No lessons in this module.</p>
                      ) : null}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
