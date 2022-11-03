import ServiceList from "../../layouts/ServiceList";
import Button from "../../ui/Button";

export default function Services() {
    return (
        <section className="bg-noise-bg bg-noise pt-44 pb-40 text-txt-light px-6">
            <div className="max-w-6.5xl mx-auto grid grid-cols-12 gap-x-8">
                <h2 className="text-white flex-[3] text-4.5xl lg:text-5.5xl font-bold mb-9 col-span-full lg:col-span-4">
                    Our services
                </h2>
                <div className="flex flex-col gap-23 col-start-1 col-end-13  lg:col-start-6 lg:col-end-13">
                    <ServiceList />
                    <Button href={"/services"}>See Our Services</Button>
                </div>
            </div>
        </section>
    )
}