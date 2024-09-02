const Singleid = ({ data }) => {
  const { title, cover_image, description } = data;

  return (
    <div>
      <div>{title}</div>
      <img src={cover_image} alt="" />
      <div>{description}</div>
      <div>{}</div>
      <div></div>
    </div>
  );
};

export default Singleid;
