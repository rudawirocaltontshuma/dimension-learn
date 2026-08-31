import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard/dimension-learn");
  return <>Coming Soon</>;
}
