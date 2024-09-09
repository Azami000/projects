import { IsCard } from "@/components/IsCard";

const AllPost = async () => {
  const result = await fetch("https://dev.to/api/articles");
  const obResult = await result.json();
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex gap-8"></div>
      <div className="flex font-bold">All Blog Post</div>
      <IsCard blogs={obResult} />
    </div>
  );
};

export default AllPost;
