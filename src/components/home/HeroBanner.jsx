// src/components/home/HeroBanner.jsx
// Make sure the file name matches your actual file
import homeBanner from "../../assets/images/HomeBanner.jpeg";

export default function HeroBanner({
  image = homeBanner,
}) {
  return (
    <section className="relative w-full overflow-hidden bg-gray-300">
      <img
        src={image}
        alt=""
        className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[660px]"
      />
    </section>
  );
}