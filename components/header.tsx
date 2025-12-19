import { CompanyLogo, NavLink } from "./ui/typography"

export function MainHeader(){
    return (
        <header className="container mx-auto px-5 py-4 flex justify-between items-center">
              <div className="flex gap-x-1 items-end">
                <CompanyLogo />
                <span className="text-sm font-semibold text-gray-600">/ Labs</span>
              </div>
              <div className="flex items-center gap-x-7">
                <nav className="flex items-center gap-x-6">
                  <NavLink title="Learn" linkName="learn" />
                  <NavLink title="Write ups" linkName="write-ups" />
                  <NavLink title="Guides" linkName="guides" />
                </nav>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="size-5 fill-gray-700"><path d="M819-28 701-146q-48 32-103.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-62 17-117.5T146-701L27-820l57-57L876-85l-57 57ZM480-160q45 0 85.5-12t76.5-33L480-367v207Zm335-100-59-59q21-35 32.5-75.5T800-480q0-133-93.5-226.5T480-800v205L260-815q48-31 103.5-48T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 61-17 116.5T815-260Z"/></svg>
                </button>
              </div>
            </header>
    )
}