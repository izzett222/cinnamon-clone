/* eslint-disable @next/next/no-img-element */
export default function Service({ icon, title, text }) {
  return (
    <div className="">
      <img src={icon} className="w-12 h-12" alt="icon" />
      <h5 className="pt-6 pb-4.5 text-2xl text-white font-bold">{title}</h5>
      <p className="text-base text-txt-light leading-6.5">
        {text}
      </p>
    </div>
  );
}
