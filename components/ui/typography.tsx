import Link from "next/link"

export function CompanyLogo(){
    return (
        <Link href="/" className="flex gap-x-1">
            <div className='font-calsans text-3xl lg:text-4xl text-gray-900 relative'>
                 Resonanex
                <span className="flex  gap-x-1.5 lg:gap-x-2.5 items-center absolute top-0 lg:-top-1 right-1">
                    <span className="size-1.5 lg:size-2.5 rounded-full bg-theme"></span>
                    <span className="size-1.5 lg:size-2.5 rounded-full bg-theme"></span>
                    <span className="size-1.5 lg:size-2.5 rounded-full bg-theme"></span>
                </span>
            </div>
            <span className="text-[7px] self-center">TM</span>
        </Link>
    )
}

export function NavLink({title, linkName}: {title: string, linkName: string}){
    return (
        <Link className="font-semibold hover:text-theme text-gray-900" href={`/${linkName}`}>{title}</Link>
    )
}

export function Breadcrumb(){
    return (
        <div className="hidden md:flex gap-x-2 items-center text-gray-700 text-sm">
                <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-700 size-5" viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="/learn" className="font-semibold hover:underline">Learn</Link>
                <span className="text-gray-400">/</span>
                <h3 className="font-semibold">This is a test blog</h3>
        </div>
    )
}