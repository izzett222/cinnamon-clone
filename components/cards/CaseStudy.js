import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function CaseStudy({ src, tags, text, color, title }) {
  const tagsList = tags.map((el) => <span className="mb-6 mr-8 text-xs font-bold text-case-text" key={el.id}>{el.text}</span>);
  return (
    <div className="group hover:cursor-pointer">
      <div className={`${color} mb-10`}>
        <img src={src} className="w-full group-hover:scale-105 transition-transform duration-500" alt="case study" />
      </div>
      <div className="grid grid-cols-12 hover:cursor-pointer">
        <div className="flex col-span-full hover:cursor-pointer">{tagsList}</div>
        <Link href={"/"} className="col-span-full text-case-title text-3.5xl lg:text-4.5xl font-bold block">{title}</Link>
        <p className="col-span-full lg:col-span-8 text-base text-case-text leading-6.5 mt-4 hover:cursor-pointer">{text}</p>
      </div>
    </div>
  );
}
