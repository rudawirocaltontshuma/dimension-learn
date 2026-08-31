import { PageHeader } from "../_components/page-header";
import { resources } from "../_data/mock-data";
import { ResourceLibrary } from "./_components/resource-library";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Resources" description="Shared library of course documents, videos, and links." />
      <ResourceLibrary resources={resources} />
    </div>
  );
}
