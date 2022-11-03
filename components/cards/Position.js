/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
export default function Position({children}) {
    return <Link href={"/"} className="flex group justify-between items-center text-position-light text-2xl font-semibold border-b border-solid border-b-position-border py-6">
        <span className=" leading-9">{children}</span>
        <img src="/image/arrowrightwhite.png" className="w-12 group-hover:-translate-y-0.5 transition-transform duration-300" alt="white arrow" />
    </Link>
}