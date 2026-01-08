import RevenueBarChart from "../charts/BarChart";
import Card from "../ui/Card";

export default function RevenueCard() {
  return (
    <Card className="xl:col-span-2">
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500">Revenue</p>
          <h2 className="text-2xl font-bold">IDR 7,852,000</h2>
          <p className="text-sm text-green-500">▲ 2.1% vs last week</p>
        </div>
        <button className="text-blue-500 text-sm">View Report</button>
      </div>

      <RevenueBarChart />
    </Card>
  );
}
