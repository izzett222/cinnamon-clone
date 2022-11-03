export default function MenuButton({scrolled}) {
    return <button className={`group ${scrolled ? 'border-hover-purple' : 'border-white'} 
    hover:border-hover-purple 
    border-2 
    rounded-full 
    w-[46px] 
    h-[46px] 
    px-1.5 
    text-center 
    bg-transparent 
    hover:shadow-btn-shadow 
    transition-all 
    duration-300 
    ease-in-hover`}>
        <div className={`${scrolled ? "border-b-hover-purple border-r-hover-purple group-hover:border-b-white group-hover:border-r-white" : "border-b-white border-r-white"} border-l-transparent border-transparent border-[6px] relative left-1.5 -rotate-45 w-0`}></div>
    </button>
}