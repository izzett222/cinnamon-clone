/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Newsletter from "../forms/Newsletter";
import Location from "../cards/Location";
export default function Footer() {
    return (
        <footer className="bg-noise-bg bg-noise px-6 pt-[90px] text-txt-light">
            <div className="mx-auto max-w-6.5xl flex flex-col">
                <div className="flex flex-col md:flex-row pb-8 border-b border-b-[#8f8f8f66] border-solid md:justify-between">
                    <div className="md:mr-12 flex flex-col justify-between">
                        <div className="flex flex-col justify-between">
                            <img
                                src="/icons/cinnamon-logo.svg"
                                className="w-40 h-5"
                                alt="logo"
                            />
                            <h4 className="md:hidden text-hero-light text-2xl mt-10 w-[182px]">
                                All software, zero bullshit.
                            </h4>
                            <nav className="mt-[44px] mb-16 grid grid-cols-3 gap-6 md:gap-4 md:grid-cols-1">
                                <Link href="/" className="text-white font-semibold">
                                    Home
                                </Link>
                                <Link
                                    href="/"
                                    className="hover:text-white delay-200 ease-in transition-colors"
                                >
                                    Projects
                                </Link>
                                <Link
                                    href="/"
                                    className="hover:text-white delay-200 ease-in transition-colors"
                                >
                                    Services
                                </Link>
                                <Link
                                    href="/"
                                    className="hover:text-white delay-200 ease-in transition-colors"
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/"
                                    className="hover:text-white delay-200 ease-in transition-colors"
                                >
                                    Careers
                                </Link>
                                <Link
                                    href="/"
                                    className="hover:text-white delay-200 ease-in transition-colors"
                                >
                                    Blog
                                </Link>
                            </nav>
                        </div>

                        <nav className="hidden md:block">
                            <Link href={"/"} className="text-hero-light underline text-sm">
                                hello@cinnamon.agency
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h4 className="hidden md:block text-hero-light text-2xl lg:text-3.5xl font-bold -mt-1.5 lg:-mt-2">
                            All software, zero bullshit.
                        </h4>
                        <div className="flex gap-6 flex-1 mb-20">
                            <Location
                                title="Zagreb"
                                locations={[{ id: 1, text: "Slavonska avenija 6," }, { id: 2, text: "10000, Zagreb, Croatia" }, { id: 3, text: "+385 99 347 3103" }]}
                            />
                            <Location
                                title="New York"
                                locations={[{ id: 1, text: "500 7th Ave, New York," }, { id: 2, text: "NY 10018, United States" }]}
                            />
                            <Location
                                title="Belgrade"
                                locations={[{ id: 1, text: "Bulevar vojvode Mišića 37" }, { id: 2, text: "11000, Belgrade, Serbia" }]}
                            />
                        </div>
                        <div className="flex-1 flex  flex-col gap-y-10 md:flex-row justify-between">
                            <Newsletter />
                            <div className="flex-1 max-w-[216px] flex flex-col gap-10 self-center">
                                <img
                                    src="/icons/pangea.svg"
                                    className="w-[216px]"
                                    alt="pangea badge"
                                />
                                <img
                                    src="/image/clutch-badge.webp"
                                    className="w-[216px]"
                                    alt="clutch badge"
                                />
                            </div>

                            <nav className="md:hidden wd-full text-center">
                                <Link href={"/"} className="text-hero-light underline text-sm">
                                    hello@cinnamon.agency
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse items-center md:flex-row pb-8 md:pb-0 gap-y-6 md:py-9 justify-between">
                    <div className="flex">
                        <p>© 2022 Cinnamon</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="flex gap-5 mr-3.5  border-b border-b-[#8f8f8f66] border-solid py-8 w-full md:border-none md:w-auto justify-center">
                        <img src="/icons/linkedin.svg" alt="linkedin" />
                        <img src="/icons/dribbble.svg" alt="dribbble" />
                        <img src="/icons/behance.svg" alt="behance" />
                        <img src="/icons/instagram.svg" alt="instagram" />
                        <img src="/icons/facebook.svg" alt="facebook" />
                        <img src="/icons/rss.svg" alt="rss" />
                    </div>
                </div>
            </div>
        </footer>
    )
}