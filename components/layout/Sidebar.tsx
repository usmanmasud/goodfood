import {
  LayoutDashboard,
  ShoppingCart,
  ClipboardList,
  MessageSquare,
  Settings,
  CreditCard,
  User,
  HelpCircle,
} from "lucide-react";
import clsx from "clsx";

const menu = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Food Order", icon: ShoppingCart },
  { label: "Manage Menu", icon: ClipboardList },
  { label: "Customer Review", icon: MessageSquare },
];

const others = [
  { label: "Settings", icon: Settings },
  { label: "Payment", icon: CreditCard },
  { label: "Accounts", icon: User },
  { label: "Help", icon: HelpCircle },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r hidden lg:flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 font-bold text-indigo-600">
        GOODFOOD
      </div>

      {/* Menu */}
      <div className="px-4">
        <p className="text-xs text-gray-400 mb-3">MENU</p>
        {menu.map(({ label, icon: Icon, active }) => (
          <div
            key={label}
            className={clsx(
              "flex items-center gap-3 px-4 py-2 rounded-lg text-sm cursor-pointer mb-1",
              active
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-500 hover:bg-gray-100"
            )}
          >
            <Icon size={18} />
            {label}
          </div>
        ))}
      </div>

      {/* Others */}
      <div className="px-4 mt-6">
        <p className="text-xs text-gray-400 mb-3">OTHERS</p>
        {others.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-100 cursor-pointer mb-1"
          >
            <Icon size={18} />
            {label}
          </div>
        ))}
      </div>
    </aside>
  );
}
