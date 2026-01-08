import Card from "../ui/Card";
import OrderDonutChart from "../charts/DonutChart";

export default function OrderTimeCard() {
  return (
    <Card className="">
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500">Order Time</p>
          <p className="text-xs text-gray-400">From 1–6 Dec, 2020</p>
        </div>
        <button className="text-sm text-indigo-500">View Report</button>
      </div>

      <OrderDonutChart />

      <div className="flex justify-between mt-4 text-sm">
        <Legend color="bg-indigo-600" label="Afternoon" value="40%" />
        <Legend color="bg-indigo-400" label="Evening" value="32%" />
        <Legend color="bg-indigo-200" label="Morning" value="28%" />
      </div>
    </Card>
  );
}

function Legend({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full ${color}`} />
      <span className="text-gray-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
