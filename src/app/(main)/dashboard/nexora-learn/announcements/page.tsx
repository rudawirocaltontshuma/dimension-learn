import { PageHeader } from "../_components/page-header";
import { announcements } from "../_data/mock-data";
import { AnnouncementsList } from "./_components/announcements-list";
import { CreateAnnouncementDialog } from "./_components/create-announcement-dialog";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader
        title="Announcements"
        description="Publish and manage updates to students, teachers, and parents."
        actions={<CreateAnnouncementDialog />}
      />
      <AnnouncementsList announcements={announcements} />
    </div>
  );
}
