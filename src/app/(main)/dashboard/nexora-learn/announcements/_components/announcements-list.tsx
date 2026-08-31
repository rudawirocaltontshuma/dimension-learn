import { Card, CardContent } from "@/components/ui/card";

import { StatusBadge } from "../../_components/status-badge";
import type { Announcement } from "../../_data/mock-data";

export function AnnouncementsList({ announcements }: { announcements: Announcement[] }) {
  return (
    <div className="flex flex-col gap-3">
      {announcements.map((announcement) => (
        <Card key={announcement.id}>
          <CardContent className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-1">
              <div className="font-medium text-sm">{announcement.title}</div>
              <p className="text-muted-foreground text-sm">{announcement.body}</p>
              <div className="text-muted-foreground text-xs">
                {announcement.audience} · {announcement.date}
              </div>
            </div>
            <StatusBadge status={announcement.status} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
