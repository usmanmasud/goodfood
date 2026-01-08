import clsx from "clsx";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("bg-white rounded-xl border p-6", className)}>
      {children}
    </div>
  );
}
