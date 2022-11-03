/* eslint-disable @next/next/no-img-element */
export default function Office({title, src, text}) {
  return (
    <div className="group min-w-[75%] md:min-w-[544px] hover:cursor-pointer">
      <img src={src} alt="office" className=" mb-8" />
      <h5 className="flex gap-2 mb-2 text-2xl font-bold text-case-title group-hover:text-hover-purple">
        <img src="/icons/location.svg" alt="location icon" />
        {title}
      </h5>
      <p className="text-txt-dark leading-6.5 group-hover:text-hover-purple">{text}</p>
    </div>
  );
}
