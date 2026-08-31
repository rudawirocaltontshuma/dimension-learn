import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  Active:
    "border-green-600/50 bg-green-500/10 text-green-700 dark:border-green-800/50 dark:bg-green-500/15 dark:text-green-300",
  Completed:
    "border-green-600/50 bg-green-500/10 text-green-700 dark:border-green-800/50 dark:bg-green-500/15 dark:text-green-300",
  Published:
    "border-green-600/50 bg-green-500/10 text-green-700 dark:border-green-800/50 dark:bg-green-500/15 dark:text-green-300",
  Pending:
    "border-amber-600/50 bg-amber-500/10 text-amber-700 dark:border-amber-800/50 dark:bg-amber-500/15 dark:text-amber-300",
  Scheduled:
    "border-amber-600/50 bg-amber-500/10 text-amber-700 dark:border-amber-800/50 dark:bg-amber-500/15 dark:text-amber-300",
  "On Leave":
    "border-amber-600/50 bg-amber-500/10 text-amber-700 dark:border-amber-800/50 dark:bg-amber-500/15 dark:text-amber-300",
  Inactive: "border-border bg-muted text-muted-foreground",
  Archived: "border-border bg-muted text-muted-foreground",
  Draft: "border-border bg-muted text-muted-foreground",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <Badge variant="outline" className={cn("rounded-full px-2.5 font-normal", statusStyles[status])}>
      {status}
    </Badge>
  );
}
