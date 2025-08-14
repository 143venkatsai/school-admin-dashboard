import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import StudentEngagementTrends from "./StudentEngagementTrends";


ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale, BarElement);

const analyticsData = [
  {
    id: 1,
    title: "Total Learning Hours",
    value: "2,487",
    description: "+12% from last month",
  },
  {
    id: 2,
    title: "Lessons Completed",
    value: "1,892",
    description: "+18% from last month",
  },
  {
    id: 3,
    title: "Average Session Time",
    value: "24 min",
    description: "+8% from last month",
  },
  {
    id: 4,
    title: "Total Learning Hours",
    value: "1,156",
    description: "+5% from last month",
  },
];

// Pie chart data
const pieData = {
  labels: [],
  datasets: [
    {
      data: [25, 45, 30],
      backgroundColor: ["#22c55e", "#f59e0b", "#ef4444"],
      borderWidth: 0,
    },
  ],
};

const pieOptions = {
  plugins: {
    legend: { display: false }, 
    tooltip: { enabled: true },
  },
  responsive: true,
  maintainAspectRatio: false,
};

// Progress bar data
const skills = [
  { name: "Vocabulary", value: 82, color: "bg-blue-500" },
  { name: "Grammar", value: 78, color: "bg-green-500" },
  { name: "Pronunciation", value: 76, color: "bg-yellow-500" },
  { name: "Listening", value: 85, color: "bg-purple-500" },
  { name: "Speaking", value: 74, color: "bg-red-500" },
];

// Bar chart data
const barData = {
  labels: ["Vocabulary", "Grammar", "Pronunciation", "Listening", "Speaking"],
  datasets: [
    {
      data: [82, 78, 76, 85, 74],
      backgroundColor: [
        "#3b82f6",
        "#22c55e",
        "#f59e0b",
        "#a855f7",
        "#ef4444",
      ],
      borderRadius: 5,
    },
  ],
};

// Month-over-month improvement data
const improvements = [
  { skill: "Vocabulary", value: "+5%" },
  { skill: "Grammar", value: "+8%" },
  { skill: "Pronunciation", value: "+12%" },
  { skill: "Listening", value: "+3%" },
  { skill: "Speaking", value: "+15%" },
];


const Analytics = () => {
  return (
    <>
      {/* Top Stats */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Analytics & Reports</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyticsData.map((item) => (
            <li
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-500 mb-2">
                {item.title}
              </h2>
              <p className="text-2xl font-bold">{item.value}</p>
              <p className="text-sm text-green-500 mt-1">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gray-50 py-6">
        {/* Left card */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-bold mb-2">
            Student Performance Distribution
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Overall accuracy breakdown across all students
          </p>
          <div className="flex flex-col items-center">
            <div className="w-52 h-52 mt-6">
              <Pie data={pieData} options={pieOptions} />
            </div>
            {/* Custom Legend */}
            <ul className="mt-6 space-y-2 text-sm mr-auto">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                Excellent (85-100%)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                Good (70-84%)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                Needs Improvement (&lt;70%)
              </li>
            </ul>
          </div>
        </div>

        {/* Right card */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-6">
          <div>
            <h2 className="text-lg font-bold">
              Average Performance by Skill Area
            </h2>
            <p className="text-gray-500 text-sm">
              Individual skill performance metrics and improvements
            </p>
          </div>

          {/* Progress bars */}
          <div className="space-y-3">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`${skill.color} h-3 rounded-full`}
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="w-full h-48">
            <Bar
              data={barData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
              }}
            />
          </div>

          {/* Month-over-month improvement */}
          <div>
            <h3 className="text-md font-semibold mb-3">
              Month-over-Month Improvement
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {improvements.map((item) => (
                <div
                  key={item.skill}
                  className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex flex-col items-center"
                >
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-green-500 font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <StudentEngagementTrends />
    </>
  );
};

export default Analytics;
