"use client";

import { useId, useState } from "react";

import { Plus } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { teachers } from "../../_data/mock-data";

export function CreateCourseDialog() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const codeId = useId();
  const descId = useId();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus />
          Create course
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const title = formData.get("title");
            setOpen(false);
            event.currentTarget.reset();
            toast.success("Course created", {
              description: `${title} has been added to the catalog.`,
            });
          }}
        >
          <DialogHeader>
            <DialogTitle>Create course</DialogTitle>
            <DialogDescription>Add a new course to the catalog. This is a UI-only demo action.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor={titleId}>Course title</Label>
              <Input id={titleId} name="title" placeholder="e.g. Applied Linear Algebra" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor={codeId}>Course code</Label>
              <Input id={codeId} name="code" placeholder="e.g. MATH-240" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="teacher">Teacher</Label>
              <Select name="teacher" defaultValue={teachers[0].id}>
                <SelectTrigger id="teacher" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {teachers.map((teacher) => (
                    <SelectItem key={teacher.id} value={teacher.id}>
                      {teacher.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor={descId}>Description</Label>
              <Textarea id={descId} name="description" placeholder="Brief course description" rows={3} />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Create course</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
