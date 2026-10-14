import { LuArrowRight } from "react-icons/lu";
import { VALUE_CARDS } from "../../data/homeData";

export default function ValueSection() {
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="text-center">
          <h2 className="font-serif text-3xl uppercase leading-tight tracking-tight text-black sm:text-4xl lg:text-[42px]">
            How can Citigold Private Client keep adding value?
          </h2>
          <p className="mx-auto mt-5 max-w-[700px] text-[17px] leading-7 text-gray-900">
            Turn your Citigold Private Client relationship into more, with
            rewards and advantages that support how you manage wealth across
            markets.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {VALUE_CARDS.map(({ title, text, Icon, href }) => (
            <article key={title.join(" ")}>
              <span className="flex h-9 w-9 items-center justify-center bg-slate-200 text-gray-800">
                <Icon size={18} />
              </span>

              <h3 className="mt-8 text-[24px] font-semibold leading-7 tracking-wide text-black">
                {title[0]}
                <br />
                {title[1]}
              </h3>

              <p className="mt-4 max-w-[260px] text-[15px] leading-6 text-gray-900">
                {text}
              </p>

              <a
                href={href}
                className="group mt-6 inline-flex items-center gap-3 text-[14px] font-medium tracking-widest text-gray-900"
              >
                EXPLORE
                <LuArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
