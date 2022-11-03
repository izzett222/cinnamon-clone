/* eslint-disable @next/next/no-img-element */
import Button from "../../ui/Button"

export default function ContactUs() {
    return (
        <section className="bg-hero-light px-6 py-24 lg:py-40 relative mt-24">
            <div className="mx-auto max-w-6.5xl flex flex-col items-center">
                <h2 className="text-case-title text-4.5xl lg:text-5.5xl font-bold">
                    Have a project in mind?
                </h2>
                <h2 className="text-case-title text-4.5xl lg:text-5.5xl font-bold mb-10">
                    Let&apos;s work together.
                </h2>
                <Button href="/contact">Contact Us</Button>
            </div>
            <img
                src="/image/project1.png"
                alt="Illustration"
                className="w-[220px] lg:w-[428px] absolute bottom-0 left-0"
            />
        </section>
    )
}