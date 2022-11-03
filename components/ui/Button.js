import Link from "next/link"
export default function Button({ children, href, full }) {
    return <Link className={`group block leading-[18px] text-white bg-hover-purpler px-8 pt-4 pb-3 border-2 border-solid border-hover-purple relative hover:text-hover-purple overflow-hidden bg-white ${!full && 'w-fit'} text-center`} href={href}>
        <span className="block absolute w-[120%] pt-[120%] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 shadow-link-shadow group-hover:shadow-link-shadow-0 rounded-[50%] transition-all duration-400 ease-in-hover"></span>
        <span className="relative z-10">{children}</span>
    </Link>
}
