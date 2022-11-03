/* eslint-disable @next/next/no-img-element */
import Office from "../../cards/Office";

export default function OfficeList() {
    return (
        <section className="mt-40 px-6">
            <div className="mx-auto max-w-6.5xl">
                <h2 className="mb-14 font-bold text-case-title text-4.5xl lg:text-5.5xl">
                    Our offices
                </h2>
            </div>
            <div className="w-full scrollbar-hide overflow-auto">
                <div className="flex gap-8 mb-14 mx-auto max-w-6.5xl">
                    <Office
                        src="/image/office1.jpeg"
                        title="Zagreb"
                        text="Slavonska avenija 6, 10000, Zagreb, Croatia"
                    />
                    <Office
                        src="/image/office2.webp"
                        title="New York"
                        text="500 7th Ave, New York, NY 10018, United States"
                    />
                    <Office
                        src="/image/office3.webp"
                        title="Belgrade"
                        text="Bulevar vojvode Mišića 37 11000, Belgrade, Serbia"
                    />
                </div>
            </div>
            <div className="flex mx-auto max-w-6.5xl">
                    <img
                        src="/image/blue-left-arrow.png"
                        className="w-12 opacity-50 grayscale"
                        alt="arrow"
                    />
                    <img
                        src="/image/blue-right-arrow.png"
                        className="w-12 ml-11"
                        alt="arrow"
                    />
                </div>
        </section>
    )
}