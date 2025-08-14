import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", engagement: 45, learning: 10 },
  { name: "Feb", engagement: 50, learning: 16 },
  { name: "Mar", engagement: 46, learning: 18 },
  { name: "Apr", engagement: 52, learning: 20 },
  { name: "May", engagement: 54, learning: 24 },
];

const StudentEngagementTrends =() => {
  return (
    <section className="bg-white shadow-lg rounded-2xl p-6">
      {/* Title */}
      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800">
        Student Engagement Trends
      </h2>
      <p className="text-sm text-gray-500">
        Monthly engagement patterns and learning time
      </p>

      {/* Chart */}
      <div className="mt-10" style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data} barSize={50}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={true}
              tickLine={true}
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              axisLine={true}
              tickLine={true}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              domain={[0, 60]}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={true}
              tickLine={true}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              domain={[0, 24]}
            />
            <Tooltip cursor={{ fill: "rgba(0, 0, 0, 0.05)" }} />
            <Bar
              yAxisId="left"
              dataKey="engagement"
              fill="#3B82F6"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              yAxisId="right"
              dataKey="learning"
              fill="#10B981"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default StudentEngagementTrends;
