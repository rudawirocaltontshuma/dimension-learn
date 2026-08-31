import { PageHeader } from "../_components/page-header";
import { SettingsTabs } from "./_components/settings-tabs";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Settings" description="Profile, notifications, appearance, and academic term configuration." />
      <SettingsTabs />
    </div>
  );
}
