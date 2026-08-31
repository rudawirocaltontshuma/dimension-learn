"use client";

import { useId, useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const themeOptions = ["System", "Light", "Dark"];

export function SettingsTabs() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weeklyDigest: true,
  });
  const nameId = useId();
  const emailId = useId();
  const titleId = useId();

  function saveSection(section: string) {
    toast.success(`${section} settings saved`);
  }

  return (
    <Tabs defaultValue="profile">
      <TabsList className="flex-wrap">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="appearance">Appearance</TabsTrigger>
        <TabsTrigger value="academic-term">Academic Term</TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Profile</CardTitle>
            <CardDescription>Update your account details.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor={nameId}>Full name</Label>
                <Input id={nameId} defaultValue="Administrator" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor={emailId}>Email</Label>
                <Input id={emailId} type="email" defaultValue="admin@nexoralearn.edu" />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor={titleId}>Title</Label>
                <Input id={titleId} defaultValue="Academic Administrator" />
              </div>
            </div>
            <div>
              <Button onClick={() => saveSection("Profile")}>Save changes</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Notifications</CardTitle>
            <CardDescription>Choose how you want to be notified.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <div className="font-medium text-sm">Email notifications</div>
                <div className="text-muted-foreground text-xs">Grades, submissions, and announcements.</div>
              </div>
              <Switch
                checked={notifications.email}
                onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, email: checked }))}
              />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <div className="font-medium text-sm">Push notifications</div>
                <div className="text-muted-foreground text-xs">Real-time alerts on your device.</div>
              </div>
              <Switch
                checked={notifications.push}
                onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, push: checked }))}
              />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <div className="font-medium text-sm">Weekly digest</div>
                <div className="text-muted-foreground text-xs">A summary of activity every Monday.</div>
              </div>
              <Switch
                checked={notifications.weeklyDigest}
                onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, weeklyDigest: checked }))}
              />
            </div>
            <div>
              <Button onClick={() => saveSection("Notification")}>Save changes</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="appearance">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Appearance</CardTitle>
            <CardDescription>Choose the theme for your dashboard.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="grid gap-2 sm:w-64">
              <Label htmlFor="theme">Theme</Label>
              <Select defaultValue="System">
                <SelectTrigger id="theme">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {themeOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button onClick={() => saveSection("Appearance")}>Save changes</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="academic-term">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Academic Term</CardTitle>
            <CardDescription>Configure the active academic term.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="term-name">Term name</Label>
                <Input id="term-name" defaultValue="Fall 2026" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="term-status">Status</Label>
                <Select defaultValue="Active">
                  <SelectTrigger id="term-status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="term-start">Start date</Label>
                <Input id="term-start" type="date" defaultValue="2026-09-01" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="term-end">End date</Label>
                <Input id="term-end" type="date" defaultValue="2026-12-19" />
              </div>
            </div>
            <div>
              <Button onClick={() => saveSection("Academic term")}>Save changes</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
