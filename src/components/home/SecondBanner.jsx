export default function SecondBanner({
  image = "/images/second-banner.jpg",
  title = "Wealth that works across markets",
  text = "Speak with a relationship manager to plan your next step.",
}) {
  return (
    <section className="relative w-full overflow-hidden bg-gray-300">
      <img
        src={image}
        alt=""
        className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[400px]"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 mx-auto flex max-w-[1200px] flex-col items-center justify-center px-6 text-center text-white">
        <h2 className="font-serif text-3xl uppercase sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-[560px] text-base sm:text-lg">{text}</p>
        <a
          href="#"
          className="mt-6 border border-white px-8 py-3 text-sm font-semibold tracking-wider transition-colors hover:bg-white hover:text-black"
        >
          CONTACT US
        </a>
      </div>
    </section>
  );
}
