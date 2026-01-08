import clsx from "clsx";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("bg-white  border-[#C8CBD9] p-6", className)}>
      {children}
    </div>
  );
}
