import Link from "next/link"

export function BasicFooter(){
    return (
        <footer className="container mx-auto px-5 py-4 border-t border-gray-200 flex items-center justify-between">
            <span className="text-sm text-gray-500">Copyright Resonanex Services 2025</span>
            <ul className="flex items-center gap-x-5">
                <li><Link className="text-sm text-gray-500 hover:text-gray-700 hover:underline" href="#">Privacy Policy</Link></li>
                <li><Link className="text-sm text-gray-500 hover:text-gray-700 hover:underline" href="#">Cookies Consent</Link></li>
                <li><Link className="text-sm text-gray-500 hover:text-gray-700 hover:underline" href="#">Contact us</Link></li>
            </ul>
        </footer>
    )
}