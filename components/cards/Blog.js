/* eslint-disable @next/next/no-img-element */
export default function Blog({src, about, author, date, time, title}) {
  return (
    <div className="flex-1">
      <img src={src} alt="blog" className=" mb-4" />
      <p className="text-txt-dark text-xs font-bold mb-3">{about}</p>
      <div className="grid grid-flow-col gap-3 items-center grid-cols-prof auto-cols-max">
        <p className="truncate">{author}</p>
        <div className="bg-tertial w-1.5 h-1.5 rounded-full"></div>
        <p>{date}</p>
        <div className="bg-tertial w-1.5 h-1.5 rounded-full"></div>
        <p>{time}</p>
      </div>
      <h5 className="text-xl mt-3 lg:text-2xl font-bold text-case-title">{title}</h5>
    </div>
  );
}
