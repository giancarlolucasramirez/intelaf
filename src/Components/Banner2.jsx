import banner2 from "../assets/img/banner2.jpg";

const Banner2 = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <img
        src={banner2}
        alt="Banner Corsair"
        className="w-full rounded-3xl"
        style={{ display: "block" }}
      />
    </div>
  );
};

export default Banner2;
