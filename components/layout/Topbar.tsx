import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      {/* Search */}
      <div className="relative w-72 hidden md:block">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 ml-auto">
        <Bell className="text-gray-400 cursor-pointer" />

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
            🍔
          </div>
          <span className="text-sm font-medium">Delicious Burger</span>
        </div>
      </div>
    </header>
  );
}
