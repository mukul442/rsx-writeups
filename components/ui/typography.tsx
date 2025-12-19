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
        <Link className="font-semibold hover:text-theme text-gray-900" href={linkName}>{title}</Link>
    )
}