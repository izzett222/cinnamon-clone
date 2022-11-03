/* eslint-disable @next/next/no-img-element */
import Button from "../../ui/Button"

export default function Team() {
    return (
        <section className="py-24 lg:py-40 bg-hero-light relative px-6">
        <div className="grid grid-cols-12 mx-auto max-w-6.5xl gap-y-8 gap-x-8 justify-around relative z-10">
          <div className="col-start-1 col-end-13 lg:col-end-6 ">
            <h2 className="text-case-title text-5.5xl font-bold mb-8 lg:mb-0 w-max">
              Agile team
              <br />
              on demand
            </h2>
            <img
              src="/image/team1.png"
              className="lg:hidden"
              alt="Illustration"
            />
          </div>
          <div className="flex flex-col gap-8 lg:max-w-[352px] col-start-1 col-end-13 lg:col-start-7">
            <p className="text-base text-txt-dark leading-6.5 mt-4">
              By hiring and managing talented people with skills specific to
              your project, we build you a team that’s accomplished, agile and
              scalable in both directions.
            </p>
            <Button href={"/"}>See How It Works</Button>
          </div>
        </div>
        <img
          src="/image/team1.png"
          className="absolute right-0 bottom-0 w-83 h-56 hidden lg:block"
          alt="Illustration"
        />
      </section>
    )
}