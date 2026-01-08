"use client";

import {
  LayoutDashboard,
  ShoppingCart,
  ClipboardList,
  MessageSquare,
  Settings,
  CreditCard,
  User,
  HelpCircle,
  X,
} from "lucide-react";
import clsx from "clsx";

interface Props {
  open?: boolean;
  onClose?: () => void;
}

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

export default function Sidebar({ open, onClose }: Props) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-[#F1F2F7]  flex-col">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <div
        className={clsx(
          "fixed inset-0 z-50 lg:hidden transition-all",
          open ? "visible" : "invisible"
        )}
      >
        {/* Overlay */}
        <div
          className={clsx(
            "absolute inset-0 bg-black/30 transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={onClose}
        />

        {/* Drawer */}
        <aside
          className={clsx(
            "absolute left-0 top-0 h-full w-64 bg-[#F1F2F7]  transition-transform",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <SidebarContent onClose={onClose} />
        </aside>
      </div>
    </>
  );
}

function SidebarContent({ onClose }: Props) {
  return (
    <>
      <div className="">
        <div className="flex mb-8 border-b border-[#C8CBD9] gap-2 items-center h-16 px-6">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full text-md text-white flex items-center justify-center font-bold bg-[#5A67BA]">
              G
            </div>
            <span className="font-bold text-[#5A67BA]">GOODFOOD</span>
          </div>
          <X
            className="cursor-pointer md:hidden text-xl text-gray-500"
            onClick={onClose}
          />
        </div>

        <p className="text-xs px-4 text-gray-400 mb-3">MENU</p>
        {menu.map(({ label, icon: Icon, active }) => (
          <div
            key={label}
            className={clsx(
              "flex items-center gap-3 px-4 py-2 rounded-lg text-sm cursor-pointer mb-1",
              active
                ? "bg-[#e1e5fe] text-[#5A6ACF]"
                : "text-gray-500 hover:bg-gray-100"
            )}
          >
            <Icon size={18} />
            {label}
          </div>
        ))}
      </div>

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
    </>
  );
}
