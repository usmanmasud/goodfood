import { Bell, ChevronDown, Menu, Search } from "lucide-react";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="h-16 bg-white border-b border-[#C8CBD9] flex items-center px-4 md:px-6">
      {/* Mobile Menu */}
      <button
        onClick={onMenuClick}
        className="lg:hidden mr-3"
        aria-label="Open menu"
      >
        <Menu />
      </button>

      {/* Search */}
      <div className=" items-center flex justify-between px-2 bg-[#F6F6FB] border-none w-[60%]">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-[#F6F6FB] border-none pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none"
        />
        <Search
          size={16}
          className=" bg-[#F6F6FB] border-none  text-gray-400"
        />
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
            🍔
          </div>
          <span className="text-sm font-medium hidden sm:block">
            Delicious Burger
          </span>
          <ChevronDown className="text-gray-400 cursor-pointer" />
        </div>
        <Bell className="text-gray-400 md:ml-4 cursor-pointer" />
      </div>
    </header>
  );
}
