// import NewsAndEventsSection from '@/app/components/layout/sections/NewsAndEventsSection';
//TODO: For now the excerpt from the NewsAndEventsSection is commented out since we don't know the use yet
export default function Home() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
          Welcome to Risk Reforged
        </h1>
        <p className="text-muted-foreground text-lg">
          A strategic game of conquest and diplomacy in Warcraft III
        </p>
      </section>

      {/* <NewsAndEventsSection /> */}
    </div>
  );
}
