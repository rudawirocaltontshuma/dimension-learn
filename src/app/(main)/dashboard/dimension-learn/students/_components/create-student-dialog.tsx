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

import { programs } from "../../_data/mock-data";

export function CreateStudentDialog() {
  const [open, setOpen] = useState(false);
  const nameId = useId();
  const emailId = useId();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus />
          Create student
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const name = formData.get("name");
            setOpen(false);
            event.currentTarget.reset();
            toast.success("Student created", {
              description: `${name} has been added to the directory.`,
            });
          }}
        >
          <DialogHeader>
            <DialogTitle>Create student</DialogTitle>
            <DialogDescription>Add a new student to the directory. This is a UI-only demo action.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor={nameId}>Full name</Label>
              <Input id={nameId} name="name" placeholder="e.g. Amara Okafor" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor={emailId}>Email</Label>
              <Input id={emailId} name="email" type="email" placeholder="student@dimensionlearn.edu" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="program">Program</Label>
              <Select name="program" defaultValue={programs[0]}>
                <SelectTrigger id="program" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {programs.map((program) => (
                    <SelectItem key={program} value={program}>
                      {program}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Create student</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
