import { PageHeader } from "../_components/page-header";
import { certificates } from "../_data/mock-data";
import { CertificatesTable } from "./_components/certificates-table";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Certificates" description="Issued and pending certificates of completion." />
      <CertificatesTable certificates={certificates} />
    </div>
  );
}
