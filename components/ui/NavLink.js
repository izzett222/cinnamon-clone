import Link from "next/link";

export default function NavLink({ children, href }) {
    return <Link href={href || "/"} className="font-semibold text-base py-3 px-4 hover:text-hover-purple after:hidden hover:after:block relative after:absolute after:w-2 after:h-2 after:bg-hover-purple after:-bottom-1.5 after:left-0 after:right-0 after:mx-auto after:border-solid after:border-2 after:border-hover-purple after:rounded-full transition-all">{children}</Link>
}