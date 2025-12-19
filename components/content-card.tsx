import Image from "next/image";
import displayImg from "../public/utils/display-img.jpg"
import Link from "next/link";

export function BlogBasicCard(){
    return (
        <div className="flex flex-col gap-y-3 cursor-pointer">
          <div className="relative">
            <Image src={displayImg} alt="blog-img" />
            <span className="absolute right-1.5 top-1.5 bg-theme/75 text-white font-semibold text-sm px-3 py-2 rounded-lg">Learn</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, dolor.</h1>
          <p className="text-gray-600 truncate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nostrum perferendis...</p>
          <ul className="flex gap-4 items-start">
            <li className="text-xs font-semibold bg-gray-300 rounded-full px-2.5 py-1.5 text-gray-900">Tag 1</li>
            <li className="text-xs font-semibold bg-gray-300 rounded-full px-2.5 py-1.5 text-gray-900">Tag 1</li>
            <li className="text-xs font-semibold bg-gray-300 rounded-full px-2.5 py-1.5 text-gray-900">Tag 1</li>
            <li className="text-xs font-semibold bg-gray-300 rounded-full px-2.5 py-1.5 text-gray-900">Tag 1</li>
            <li className="text-xs font-semibold bg-gray-300 rounded-full px-2.5 py-1.5 text-gray-900">Tag 1</li>
          </ul>
          <Link href="#" className="cursor-pointer flex items-center self-end gap-x-1">
            <span className="text-theme font-semibold">Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="size-5 fill-theme"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
          </Link>
        </div>
    )
}