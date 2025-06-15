import { sectionMap } from "@/utils/sectionMap";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default function SectionPage({ params }: Props) {
  const Component = sectionMap[params.id];

  if (!Component) return notFound();

  return <Component />;
}
