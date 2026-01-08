"use client";

import { revenueData } from "@/lib/data";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function RevenueBarChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={revenueData}>
          <XAxis dataKey="day" />
          <Tooltip />
          <Bar dataKey="current" fill="#6366F1" radius={[6, 6, 0, 0]} />
          <Bar dataKey="previous" fill="#E5E7EB" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
