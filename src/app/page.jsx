import { Hero } from "@/components/Hero";
import { Trending } from "@/components/Trending";
import { AllPost } from "@/components/AllPost";

const Home = async () => {
  const result = await fetch("https://dev.to/api/articles");
  const obResult = await result.json();

  return (
    <div className="w-full items-center">
      <Hero />
      <Trending />
      <AllPost />
    </div>
  );
};

export default Home;
