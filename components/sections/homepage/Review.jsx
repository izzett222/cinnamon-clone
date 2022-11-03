/* eslint-disable @next/next/no-img-element */
import Anchor from "../../ui/Anchor";

export default function Review() {
    return (
        <section className="pt-15 pb-24 lg:py-40 relative px-6">
            <div className="mx-auto max-w-6.5xl grid grid-cols-12-items gap-8 relative z-10">
                <div className="col-start-1 col-end-13 lg:col-end-10 flex flex-col justify-evenly">
                    <h2 className="text-case-title text-3.5xl lg:text-4.5xl font-bold mb-8 lg:mb-0 relative">
                        <span className="absolute text-[175px] top-9 lg:text-[258px] -left-12 opacity-20">
                            “
                        </span>
                        They’re consistent, and the communication is good.
                    </h2>
                    <p className="text-base text-txt-dark leading-6.5 my-8">
                        By hiring and managing talented people with skills specific to
                        your project, we build you a team that’s accomplished, agile and
                        scalable in both directions.
                    </p>
                    <div className="flex items-center gap-3">
                        <img
                            src="/image/profile.png"
                            className="w-[68px]"
                            alt="profile"
                        />
                        <div>
                            <h5 className=" text-xl lg:text-2xl text-case-title font-bold">
                                Garin Toren,
                            </h5>
                            <p>CEO, ping</p>
                        </div>
                    </div>
                </div>
                <div className="col-start-13 col-end-13 w-[200px] h-[200px] content-center hidden lg:grid">
                    <img src="/image/case7.png" alt="Illustration" />
                </div>
            </div>
            <div className="grid justify-between lg:grid-flow-col items-end mx-auto max-w-6.5xl">
                <div className="flex mt-[46px]">
                    <img
                        src="/image/blue-left-arrow.png"
                        className="w-12"
                        alt="arrow"
                    />
                    <img
                        src="/image/blue-right-arrow.png"
                        className="w-12 ml-[44px]"
                        alt="arrow"
                    />
                </div>
                <div className="mt-[46px]">
                    <Anchor href="/">View case study</Anchor>
                </div>
            </div>
        </section>
    )
}