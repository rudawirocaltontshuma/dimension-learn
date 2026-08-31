"use client";

import type { ComponentType } from "react";

import { FileText, Link2, PlayCircle, Presentation } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import type { Resource } from "../../_data/mock-data";

const typeIcons: Record<Resource["type"], ComponentType<{ className?: string }>> = {
  Document: FileText,
  Video: PlayCircle,
  Presentation: Presentation,
  Link: Link2,
};

const tabs: { value: Resource["type"] | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "Document", label: "Documents" },
  { value: "Video", label: "Videos" },
  { value: "Presentation", label: "Presentations" },
  { value: "Link", label: "Links" },
];

function ResourceGrid({ resources }: { resources: Resource[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {resources.map((resource) => {
        const Icon = typeIcons[resource.type];
        return (
          <Card key={resource.id}>
            <CardContent className="flex flex-col gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
                <Icon className="size-4 text-muted-foreground" />
              </div>
              <div>
                <div className="font-medium text-sm">{resource.title}</div>
                <div className="text-muted-foreground text-xs">{resource.courseTitle}</div>
              </div>
              <div className="flex items-center justify-between text-muted-foreground text-xs">
                <span>{resource.type}</span>
                <span>{resource.size}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export function ResourceLibrary({ resources }: { resources: Resource[] }) {
  return (
    <Tabs defaultValue="all">
      <TabsList className="flex-wrap">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <ResourceGrid resources={tab.value === "all" ? resources : resources.filter((r) => r.type === tab.value)} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
