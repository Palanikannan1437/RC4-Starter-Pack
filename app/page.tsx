import {
  fetchTimelineData,
  TimelineObjectType,
} from "@palanikannan1437/rc4-core";
import { Timeline, Card, Button } from "@palanikannan1437/rc4-ui";

const CARD_CONTENT = [
  {
    title: "Caching Tasks",
    href: "https://turbo.build/repo/docs/core-concepts/caching",
    cta: "Read More",
  },
  {
    title: "Running Tasks",
    href: "https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks",
    cta: "Read More",
  },
  {
    title: "Configuration Options",
    href: "https://turbo.build/repo/docs/reference/configuration",
    cta: "Read More",
  },
];

function transferType(data: any): TimelineObjectType[] {
  const timeline = data.products;
  return timeline.map((timelineData: any) => {
    return {
      id: String(timelineData.id),
      title: String(timelineData.title),
      meta: String(timelineData.rating),
      subtitle: String(timelineData.category),
      description: String(timelineData.description),
    };
  });
}

export default async function Home() {
  const data = await fetchTimelineData({
    endpoint: "https://dummyjson.com/products?limit=5",
    transferType: transferType,
  });

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <main className="mx-auto w-auto px-4 pb-8 lg:px-8">
          <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
            Rocket.Chat
            <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent px-2 mb-8">
              Community Example
            </span>
          </h1>
          <Timeline type="horizontal" data={data} />

          <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
            <Button />
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 place-content-evenly">
            {CARD_CONTENT.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
