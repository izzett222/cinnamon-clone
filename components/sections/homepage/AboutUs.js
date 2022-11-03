/* eslint-disable @next/next/no-img-element */
import Button from "../../ui/Button";

export default function AboutUs() {
  return (
    <section className="py-24 lg:py-62 bg-hero-light relative px-6">
      <div className="mx-auto max-w-6.5xl">
        <h2 className="mb-4 font-bold text-case-title text-4.5xl">
          Who we are
        </h2>
        <p className="max-w-md mb-8 lg:mb-16 text-txt-dark leading-6.5">
          Meet our international teams made up of 86 innovators, branched into 8
          departments, that influence the market throughout 20 different
          countries.
        </p>
        <img
          src="/image/aboutus.png"
          alt="employees"
          className=" w-70 mb-6 lg:hidden"
        />
        <ul className="grid-cols-2 text-xl font-bold gap-y-6 mb-20 hidden lg:grid w-3/4 text-case-title">
          <li>Product design</li>
          <li>Web development</li>
          <li>Mobile development</li>
          <li>Quality assurance</li>
          <li>Marketing</li>
          <li>Project management</li>
          <li>Human resources</li>
          <li>Sales</li>
          <li>Fluffy friends</li>
        </ul>
        <img
        src="/image/aboutus.png"
        alt="employees"
        className="max-w-17.5 lg:max-w-85 2xl:max-w-none 2xl:w-auto hidden lg:block absolute top-1/2 -translate-y-1/2 right-0"
      />
        <Button href="/about-us">Read About Us</Button>
      </div>


    </section>
  );
}
