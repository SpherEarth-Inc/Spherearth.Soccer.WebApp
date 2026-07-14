import { PageHero } from "@/components/layout/page-hero";
import { ProgramCards } from "@/components/sections/program-cards";
import { programsContent } from "@/lib/content/pages/programs";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: "Choose Program",
  description:
    "Explore Founding, Premier, and Signature programs at SpherEarth Football Academy and find the right pathway for your child.",
  path: "/programs/choose-program/",
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Overview", href: "/programs/" },
  { label: "Program" },
];

export default function ChooseProgramPage() {
  return (
    <>
      <PageHero
        title="Programs"
        description="Founding, Premier, and Signature pathways for every stage of development."
        breadcrumb={breadcrumb}
        image={programsContent.meta.heroImage}
      />
      <ProgramCards
        title="Choose a program"
        cards={programsContent.programCards}
        headerStyle="overview"
      />
    </>
  );
}
