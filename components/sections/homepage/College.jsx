/* eslint-disable @next/next/no-img-element */
import Button from "../../ui/Button"

export default function College() {
    return (
        <section className="py-24 lg:py-40 relative px-6">
        <div className="grid grid-cols-4 lg:grid-cols-18 grid-rows-2 gap-8 mx-auto max-w-6.5xl gap-y-8 justify-around relative z-10">
          <div className="col-start-1 row-span-1 lg:row-span-2 col-end-6 lg:col-end-7">
            <img
              src="/image/college.png"
              className="max-w-75"
              alt="Cinnamon college"
            />
          </div>
          <div className="flex flex-col row-span-1 lg:row-span-2 col-start-1 col-end-6 lg:col-start-8 lg:col-end-14 gap-8 lg:max-w-[352px]">
            <p className="text-base text-txt-dark leading-6.5">
              Seize the unique opportunity to participate in a wide range of
              courses conducted by professionals with an impeccable reputation
              in the digital industry.
            </p>
            <Button href={"/"}>See How It Works</Button>
          </div>
        </div>
        <img
          src="/image/college2.png"
          className="absolute right-0 bottom-0 max-w-139 max-h-100 w-full h-full hidden lg:block"
          alt="Illustration"
        />
      </section>
    )
}