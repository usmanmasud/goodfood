import OrdersLineChart from "../charts/LineChart";
import Card from "../ui/Card";

export default function OrderCard() {
  return (
    <Card>
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500">Order</p>
          <h2 className="text-2xl font-bold">2,568</h2>
          <p className="text-sm text-red-500">▼ 2.1% vs last week</p>
          <p className="text-xs text-gray-400">From 1–6 Dec, 2020</p>
        </div>
        <button className="text-sm text-indigo-500">View Report</button>
      </div>

      <OrdersLineChart />
    </Card>
  );
}
