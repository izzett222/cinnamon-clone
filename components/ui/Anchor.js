/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Anchor({children, href}) {
    return <Link href={href} className="text-hover-purple flex underline font-bold text-lg underline-offset-8 gap-4"><img src="/icons/arrowright.svg" alt="icon" />{children}</Link>
}