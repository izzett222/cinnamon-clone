export default function Location({locations, title}) {
    return <div className="flex-1 text-txt-light leading-6 mr-[44px] text-sm">
        <p className="text-hero-light font-bold mb-1 text-base">{title}</p>
        {locations?.map(el => <p key={el.id}>{el.text}</p>)}
    </div>
}