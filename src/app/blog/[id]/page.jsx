import Singleid from "@/components/Singleid";
import React from "react";

const SinglePost = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await res.json();

  return (
    <div className="flex flex-col gap-25">
      <Singleid data={data} />
    </div>
  );
};

export default SinglePost;
