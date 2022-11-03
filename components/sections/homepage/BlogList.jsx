import Blog from "../../cards/Blog";
import Anchor from "../../ui/Anchor";
export default function BlogList() {
    return (
        <section className="mt-40 px-6 overflow-auto">
        <div className="mx-auto max-w-6.5xl">
          <h2 className="mb-14 font-bold text-case-title text-4.5xl">
            Stay in the loop on tech topics
          </h2>
          <div className="flex gap-8 mb-14">
            <Blog
                title="Differences in Hiring an Agency vs. Freelancers 2.0"
                time="6min"
                date="2022-10-13"
                about={"SALES"}
                author="Matija Bermanec & Lorena Ujević"
                src={"/image/blog2.webp"}
             />
            <Blog
                title="Cinnamon Flutter Template Overview"
                time="3min"
                date="2022-10-03"
                about={"DEVELOPMENT"}
                author="Samantha Holstead"
                src={"/image/blog3.webp"}
             />
                        <Blog
                title="How Tinder Swindled User Experience"
                time="10min"
                date="2022-09-15"
                about={"Design"}
                author="Jan Marin"
                src={"/image/blog4.webp"}
             />
          </div>
          <Anchor href={"/blog"}>VIEW MORE BLOGS</Anchor>
        </div>
      </section>
    )
}