import Button from "../ui/Button";

export default function Newsletter() {
    return <form className="flex flex-col flex-1 max-w-[280px]">
        <h6 className="text-hero-light mb-6">Our newsletter</h6>
        <input type="text" placeholder="Your email" className="bg-transparent placeholder:text-hero-light border-b-txt-light border-b border-solid pb-3 mb-6" />
        <Button href={"/"} full>Subscribe</Button>
    </form>
}