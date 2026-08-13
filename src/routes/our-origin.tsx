import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/tengabiz/Nav";
import { OurOrigin } from "@/components/tengabiz/OurOrigin";
import { Footer } from "@/components/tengabiz/SectionsC";

export const Route = createFileRoute("/our-origin")({
  head: () => ({
    meta: [
      { title: "Our Origin — TengaBiz" },
      {
        name: "description",
        content:
          "How two Strathmore University students built TengaBiz from a student challenge to solve financial mismanagement in African SMEs.",
      },
    ],
  }),
  component: OurOriginPage,
});

function OurOriginPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <OurOrigin />
      </main>
      <Footer />
    </div>
  );
}
