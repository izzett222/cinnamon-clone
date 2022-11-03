import Service from "../cards/Service";

export default function ServiceList() {
    return <div className="grid md:grid-cols-services gap-x-32 gap-y-31 leading-7">
        <Service
            icon={"/icons/service2.png"}
            title={"Product design"}
            text={`Producing, prototyping and testing sketches, high-fidelity 
            wireframes and the final UI is a process that results in intuitive 
            and impactful design that’s easy on the eyes.`}
        />
        <Service
            icon={"/icons/service1.png"}
            title={"Development"}
            text={`By selecting the befitting tech stack and architecture for 
            the deliverable in question, we build out the product until it's 
            a fully-fledged digital solution.`}
        />
        <Service
            icon={"/icons/service3.png"}
            title={"Quality assurance"}
            text={`Our QA engineering team makes your product bug-free, 
            bulletproof and performance-driven through both automatic 
            and manual testing. `}
        />
        <Service
            icon={"/icons/service4.png"}
            title={"Marketing & growth"}
            text={`By understanding the mechanics of digital marketing
            , we make sure to put your product, at the right time, in 
            front of the right people.`}
        />
    </div>
}