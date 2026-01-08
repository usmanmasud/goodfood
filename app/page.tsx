import DashboardLayout from "@/components/layout/DashboardLayout";
import RevenueCard from "@/components/cards/RevenueCard";
import OrderTimeCard from "@/components/cards/OrderTimeCard";
import RatingCard from "@/components/cards/RatingCard";
import OrderCard from "@/components/cards/OrderCard";
import MostOrderedFood from "@/components/cards/MostOrderedFood";

export default function Home() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold text-[#1F384C] mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <RevenueCard />
        <OrderTimeCard />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3  mt-6">
        <RatingCard />
        <MostOrderedFood />
        <OrderCard />
      </div>
    </DashboardLayout>
  );
}
