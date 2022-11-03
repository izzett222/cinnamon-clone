import CaseStudy from "../../cards/CaseStudy";
export default function CaseStudyList() {
    return (
        <section className="px-6">
        <div className="max-w-6.5xl mx-auto my-40 flex flex-col gap-40">
          <CaseStudy
            tags={[
              { id: 1, text: "PRODUCT DESIGN" },
              { id: 2, text: "QUALITY ASSURANCE" },
            ]}
            title={
              <>
                <span>{"Corrily:  Optimize prices"}</span>
                <br />
                <span>{"to maximize revenue"}</span>
              </>
            }
            src="/image/case1.webp"
            color={"bg-case-green"}
            text={`Corrily tailors your prices and discounts to the needs of
            different user segments in order to increase your revenue. Cinnamon
             was tasked with creating a new visual identity for Corrily and 
             incorporating a fresh, and stunning website redesign.`}
          />
          <CaseStudy
            tags={[
              { id: 1, text: "PRODUCT DESIGN" },
              { id: 2, text: "WEB DEVELOPMENT" },
            ]}
            title={
              <>
                <span>{"Fiona: Engage &"}</span>
                <br />
                <span>{" Decide"}</span>
              </>
            }
            src="/image/case2.webp"
            color={"bg-case-purple"}
            text={`Fiona is a fintech consumer-facing website that enables users 
            to search for financial products, discover them, and receive 
            personalized recommendations.`}
          />
          <CaseStudy
            tags={[
              { id: 1, text: "PRODUCT DESIGN" },
              { id: 2, text: "WEB DEVELOPMENT" },
              { id: 3, text: "QUALITY ASSURANCE" },
            ]}
            title={
              <>
                <span>{"Ukulele: "}</span>
                <br />
                <span>{" The largest ukulele tabs archive"}</span>
              </>
            }
            src="/image/case3.webp"
            color={"bg-case-yellow"}
            text={`Fiona is a fintech consumer-facing website that enables users 
            to search for financial products, discover them, and receive 
            personalized recommendations.`}
          />
        </div>
      </section>
    )
}