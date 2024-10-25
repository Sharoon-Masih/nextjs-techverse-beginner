import Hero from "@/components/home-sections/hero";
import Quotes from "@/components/home-sections/quotes";

export default function Home() {
  console.log('homepage server rendered ')
  return (
    <main>
      <Hero />
      <Quotes />
    </main>
  );
}

