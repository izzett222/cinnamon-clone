import Position from "../../cards/Position";
import Button from "../../ui/Button";
export default function Work() {
    return (
        <section className="bg-noise-bg bg-noise pt-44 pb-40 text-txt-light px-6">
            <div className="max-w-6.5xl mx-auto grid grid-cols-12 gap-x-8">
                <div className="mb-16 lg:mb-0 col-start-1 col-end-13 lg:col-end-6">
                    <h2 className="mb-6 font-bold text-position-light text-4.5xl lg:text-5.5xl">
                        We’re growing
                    </h2>
                    <p className="text-base text-txt-light leading-6.5 mb-8">
                        Seize the unique opportunity to participate in a wide range of
                        courses conducted by professionals with an impeccable reputation
                        in the digital industry.
                    </p>
                    <Button href={"/careers"}>See All Positions</Button>
                </div>
                <div className=" col-start-1 col-end-13 lg:col-start-8 lg:col-end-13">
                    <Position>Android Developer</Position>
                    <Position>Android Developer</Position>
                    <Position>Backend Development Team Lead</Position>
                </div>
            </div>
        </section>
    )
}