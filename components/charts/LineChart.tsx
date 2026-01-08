"use client";

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { orderData } from "@/lib/data";

export default function OrdersLineChart() {
  return (
    <div className="h-52">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={orderData}>
          <XAxis dataKey="day" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#6366F1"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#E5E7EB"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
