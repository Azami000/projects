"use client";

const Singleid = ({ data }) => {
  const { title, cover_image, description, body_html } = data;

  return (
    <div className="flex flex-col w-[800px] gap-8">
      <div>{title}</div>
      <img src={cover_image} alt="" />
      <div>{description}</div>
      <div dangerouslySetInnerHTML={{ __html: body_html }} />
      <div></div>
    </div>
  );
};

export default Singleid;
