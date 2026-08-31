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

const audiences = ["All Students", "Teachers", "Parents"];

export function CreateAnnouncementDialog() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const bodyId = useId();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus />
          New announcement
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
            toast.success("Announcement published", {
              description: `${title} has been sent to its audience.`,
            });
          }}
        >
          <DialogHeader>
            <DialogTitle>New announcement</DialogTitle>
            <DialogDescription>Publish an update to students, teachers, or parents.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor={titleId}>Title</Label>
              <Input id={titleId} name="title" placeholder="e.g. Exam Schedule Update" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="audience">Audience</Label>
              <Select name="audience" defaultValue={audiences[0]}>
                <SelectTrigger id="audience" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {audiences.map((audience) => (
                    <SelectItem key={audience} value={audience}>
                      {audience}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor={bodyId}>Message</Label>
              <Textarea id={bodyId} name="body" placeholder="Write the announcement..." rows={4} required />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Publish</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
