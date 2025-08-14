import React, {useState} from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";


import { MdPeople } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { BsBarChart } from "react-icons/bs";
import { GiTrophyCup } from "react-icons/gi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { FaRegStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { GiSmallFire } from "react-icons/gi";
import { BsLightningCharge } from "react-icons/bs";

const data = [
  {
    id: 1,
    title: "TOTAL STUDENTS",
    score: "245",
    icon: <MdPeople className="text-2xl" />,
    description: "+12% from last month",
    bgColor: "bg-blue-600",
    color: "text-white"
  },
  {
    id: 2,
    title: "TOTAL CLASSES",
    score: "8",
    icon: <GiGraduateCap className="text-2xl" />,
    description: "+8% from last month",
    bgColor: "bg-green-600",
    color: "text-white"
  },
  {
    id: 3,
    title: "AVG. PERFORMANCE",
    score: "86.2%",
    icon: <BsBarChart className="text-2xl" />,
    description: "+5% from last month",
    bgColor: "bg-purple-500",
    color: "text-white"
  },
  {
    id: 4,
    title: "TOP PERFORMER",
    score: "830pts",
    icon: <GiTrophyCup className="text-2xl" />,
    description: "Ahan K. Class 8",
    bgColor: "bg-orange-500",
    color: "text-white"
  }
];

const barData = [
  { name: "Class 1", students: 36 },
  { name: "Class 2", students: 32 },
  { name: "Class 3", students: 28 },
  { name: "Class 4", students: 30 },
  { name: "Class 5", students: 24 },
  { name: "Class 6", students: 27 },
  { name: "Class 7", students: 33 },
  { name: "Class 8", students: 34 },
];

const pieData = [
  { name: "Excellent (90-100%)", value: 35, color: "#34d399" }, 
  { name: "Good (80-89%)", value: 40, color: "#3b82f6" }, 
  { name: "Average (70-79%)", value: 15, color: "#fbbf24" }, 
  { name: "Needs Improvement", value: 10, color: "#ef4444" }, 
];

const leaderboardData = [
  {
    "rank": 1,
    "name": "Emma Johnson",
    "class": "Class 8",
    "points": 950,
    "accuracy": "98%",
    "stars": 45,
    "streak_days": 21,
    "avatar": "https://randomuser.me/api/portraits/women/1.jpg",
    "color": "#d4b806",
  },
  {
    "rank": 2,
    "name": "Noah Smith",
    "class": "Class 7",
    "points": 920,
    "accuracy": "97%",
    "stars": 43,
    "streak_days": 20,
    "avatar": "https://randomuser.me/api/portraits/men/2.jpg",
    "color": "#878786",
  },
  {
    "rank": 3,
    "name": "Olivia Brown",
    "class": "Class 8",
    "points": 890,
    "accuracy": "97%",
    "stars": 41,
    "streak_days": 19,
    "avatar": "https://randomuser.me/api/portraits/women/3.jpg",
    "color": "#e6630b",
  },
  {
    "rank": 4,
    "name": "Elijah Davis",
    "class": "Class 6",
    "points": 865,
    "accuracy": "96%",
    "stars": 40,
    "streak_days": 18,
    "avatar": "https://randomuser.me/api/portraits/men/4.jpg",
    "color": "#4981f2",
  },
  {
    "rank": 5,
    "name": "Ava Wilson",
    "class": "Class 7",
    "points": 850,
    "accuracy": "95%",
    "stars": 39,
    "streak_days": 17,
    "avatar": "https://randomuser.me/api/portraits/women/5.jpg",
    "color": "#4981f2",

  },
  {
    "rank": 6,
    "name": "William Martinez",
    "class": "Class 8",
    "points": 845,
    "accuracy": "95%",
    "stars": 38,
    "streak_days": 17,
    "avatar": "https://randomuser.me/api/portraits/men/6.jpg",
    "color": "#4981f2",

  },
  {
    "rank": 7,
    "name": "Sophia Anderson",
    "class": "Class 6",
    "points": 840,
    "accuracy": "94%",
    "stars": 37,
    "streak_days": 16,
    "avatar": "https://randomuser.me/api/portraits/women/7.jpg",
    "color": "#4981f2",
  },
  {
    "rank": 8,
    "name": "James Thomas",
    "class": "Class 5",
    "points": 835,
    "accuracy": "94%",
    "stars": 36,
    "streak_days": 15,
    "avatar": "https://randomuser.me/api/portraits/men/8.jpg",
    "color": "#4981f2",
  },
  {
    "rank": 9,
    "name": "Isabella Taylor",
    "class": "Class 4",
    "points": 825,
    "accuracy": "93%",
    "stars": 35,
    "streak_days": 14,
    "avatar": "https://randomuser.me/api/portraits/women/9.jpg",
    "color": "#4981f2",
  },
  {
    "rank": 10,
    "name": "Liam Garcia",
    "class": "Class 1",
    "points": 820,
    "accuracy": "86%",
    "stars": 20,
    "streak_days": 2,
    "avatar": "https://randomuser.me/api/portraits/men/10.jpg",
    "color": "#4981f2",
  },
  {
    "rank": 11,
    "name": "Mia Rodriguez",
    "class": "Class 2",
    "points": 780,
    "accuracy": "92%",
    "stars": 33,
    "streak_days": 12,
    "avatar": "https://randomuser.me/api/portraits/women/11.jpg",
    "color": "#4981f2",

  },
  {
    "rank": 12,
    "name": "Benjamin Hernandez",
    "class": "Class 3",
    "points": 770,
    "accuracy": "91%",
    "stars": 32,
    "streak_days": 12,
    "avatar": "https://randomuser.me/api/portraits/men/12.jpg",
    "color": "#4981f2",
  },
  {
    "rank": 13,
    "name": "Charlotte Moore",
    "class": "Class 4",
    "points": 765,
    "accuracy": "91%",
    "stars": 31,
    "streak_days": 11,
    "avatar": "https://randomuser.me/api/portraits/women/13.jpg",
    "color": "#4981f2",
  },
  {
    "rank": 14,
    "name": "Lucas Jackson",
    "class": "Class 5",
    "points": 760,
    "accuracy": "90%",
    "stars": 30,
    "streak_days": 11,
    "avatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "color": "#4981f2",
  },
  {
    "rank": 15,
    "name": "Amelia White",
    "class": "Class 6",
    "points": 750,
    "accuracy": "90%",
    "stars": 29,
    "streak_days": 10,
    "avatar": "https://randomuser.me/api/portraits/women/15.jpg",
    "color": "#4981f2",
  },
  {
    "rank": 16,
    "name": "Henry Harris",
    "class": "Class 7",
    "points": 740,
    "accuracy": "89%",
    "stars": 28,
    "streak_days": 10,
    "avatar": "https://randomuser.me/api/portraits/men/16.jpg",
    "color": "#4981f2",
  },
  {
    "rank": 17,
    "name": "Evelyn Martin",
    "class": "Class 8",
    "points": 730,
    "accuracy": "88%",
    "stars": 27,
    "streak_days": 9,
    "avatar": "https://randomuser.me/api/portraits/women/17.jpg",
    "color": "#4981f2",
  },
  {
    "rank": 18,
    "name": "Alexander Thompson",
    "class": "Class 1",
    "points": 725,
    "accuracy": "88%",
    "stars": 26,
    "streak_days": 9,
    "avatar": "https://randomuser.me/api/portraits/men/18.jpg",
    "color": "#4981f2",
  },
  {
    "rank": 19,
    "name": "Harper Garcia",
    "class": "Class 2",
    "points": 720,
    "accuracy": "87%",
    "stars": 25,
    "streak_days": 8,
    "avatar": "https://randomuser.me/api/portraits/women/19.jpg",
    "color": "#4981f2",
  },
  {
    "rank": 20,
    "name": "Daniel Martinez",
    "class": "Class 3",
    "points": 710,
    "accuracy": "87%",
    "stars": 25,
    "streak_days": 8,
    "avatar": "https://randomuser.me/api/portraits/men/20.jpg",
    "color": "#4981f2",
  }
];

const winner = [
  {
    id:1,
    name: "Emma Johnson",
    title: "Top Scorer",
    icon: <HiOutlineTrophy className="text-4xl text-yellow-700" />,
    points:"950 pts",
    bgColor: "#f2e4bf",
    color: "#c77b08",
    borderColor: "#dba046"
  },
  {
    id:2,
    name: "Emma Johnson",
    title: "Top Scorer",
    icon: <GiSmallFire className="text-2xl text-red-600" />,
    points: "15 days",
    bgColor: "#ddf5d0",
    color: "#158507",
    borderColor: "#84e86d"
  },
  {
    id:3,
    name: "Emma Johnson",
    title: "Top Scorer",
    icon: <BsLightningCharge className="text-2xl text-yello-600" />,
    points: "68 lessons",
    bgColor: "#e4eaf7",
    color: "#0b84e0",
    borderColor: "#51a2e0"
  },

];


const  Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("All Classes");
  const [visibleCount, setVisisbleCount] = useState(12);

  const uniqueClasses = ["All Classes", ...new Set(leaderboardData.map(s =>s.class))];
  console.log(uniqueClasses);

  const filteredStudents = leaderboardData.filter(student => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.title?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesClass =
      selectedClass === "All Classes" || student.class === selectedClass;

    return matchesSearch && matchesClass;
  });

  const handleLoadMore = () =>{
    setVisisbleCount(filteredStudents.length)
  }

  return (
    <>
      {/* Header Section */}
      <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-blue-500 mb-2">
            Greenwood Elementary School
          </h1>
          <p className="text-gray-600">
            Welcome back, School Admin! Here's your school's overview.
          </p>
        </div>
        <p className="text-gray-600 border px-3 py-1 rounded-lg lg:ml-auto">
          CBSE Board | Last updated: 12/08/2025, 15:46:57
        </p>
      </section>

      {/* Stats Section */}
      <section>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {data.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center shadow-xl rounded-2xl p-5"
            >
              <div>
                <h6 className="text-sm font-semibold text-gray-500">{item.title}</h6>
                <h1 className="text-3xl my-1 font-bold">{item.score}</h1>
                <p className="text-sm text-green-600 font-semibold">{item.description}</p>
              </div>
              <span
                className={`${item.color} ${item.bgColor} p-3 rounded-lg flex items-center justify-center`}
              >
                {item.icon}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      
      {/* Bar Chart */}
      <div className="bg-white p-5 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-blue-500 mb-1">
          Class-wise Student Enrollment
        </h2>
        <p className="text-gray-500 mb-4">
          Student distribution across different grades
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="students" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-5 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-blue-500 mb-1">
          Performance Distribution
        </h2>
        <p className="text-gray-500 mb-4">
          Overall accuracy breakdown across all students
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
    <section className='mt-6 shadow-xl rounded-2xl p-5 bg-white'>
      <div>
        <span className='flex items-center'>
          <HiOutlineTrophy className='text-yellow-600 h-5 w-5' />
          <GiTrophyCup className='text-blue-500 mx-2 h-5 w-5'/>
          <h1 className='text-2xl font-bold text-blue-500'>School Leaderboard - Top 10 Champions</h1>  
        </span>  
        <p className='text-gray-500'>Our highest performing students this month with points and achievements</p>
      </div>
      <ul className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4'>
        {leaderboardData.slice(0,10).map((item) =>(
          <li className="relative flex flex-col justify-center items-center bg-white shadow-xl rounded-lg p-4 pt-8" 
              key={item.rank}
          >
            {/* Rank Badge */}
            <span className="absolute top-0 right-0 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md" style={{ backgroundColor: item.color }}>
              #{item.rank}
            </span>

            {/* Card Content */}
          <div className="flex flex-col items-center">
            <img 
              src={item.avatar} 
              alt={item.name} 
              style={{ borderColor: item.color }}
              className="w-16 h-16 rounded-full mb-2 border-4 border-blue-500"
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-500">{item.class}</p>
            <p className='text-white text-md font-semibold my-2 py-1 px-4 rounded-3xl' style={{backgroundColor:item.color}}>{item.points} pts</p>
            <p className={`text-sm px-3 py-1 my-2 rounded-2xl ${parseInt(item.accuracy) >=90 ? "bg-green-100 text-green-800": "bg-blue-100 text-blue-800"}`}>{item.accuracy} Accuracy</p>
            <div className='flex items-center justify-center'>
              <span className="flex items-center font-semibold text-gray-600">
                <FaRegStar className="text-yellow-500 mr-1" />
                {item.stars}
              </span>
              <span className="flex items-center font-semibold text-gray-600">
                <GoDotFill className="text-green-500 ml-1" />
                {item.streak_days} day streak
              </span>
            </div>
            <span className='flex justify-center items-center font-semibold cursor-pointer border border-2 border-gray-400 shadow-lg px-4 py-1 mt-3 rounded-2xl'>
              <IoEyeOutline className="text-gray-500 h-5 w-5 mt-1 mr-2" />
              View Profile
            </span>
          </div>
        </li>
        ))}
      </ul>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
        {winner.map((item) => (
          <li key={item.id} style={{backgroundColor:item.bgColor, borderColor:item.borderColor}} className="flex flex-col items-center justify-between bg-white shadow-xl rounded-lg p-4">
            <h2 className="text-gray-500 text-2xl font-bold" style={{color:item.color}}>{item.title}</h2>      
            <span className="text-2xl text-yellow-600 my-2">
              {item.icon}
            </span>
            <span className='text-lg font-semibold text-gray-700' style={{color:item.color}}>
              {item.name} - {item.points}
            </span>
          </li>
        ))}
      </ul>
    </section>
    
    {/* Students Section */}
    <section className='p-5 shadow-xl rounded-lg mt-6'>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
          <div>
            <h1 className='text-2xl font-bold text-blue-500'>All Students</h1>
            <p className='text-gray-500'>Complete Student directory with performance details</p>
          </div>
          <div>
            <input type='text' vlaue={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)} placeholder='Search students...' className="border border-gray-300 rounded-lg px-4 py-2 mr-3 mb-4 sm:mb-0" />
            <select value={selectedClass} onChange={(e) =>setSelectedClass(e.target.value)}  className="border border-gray-300 rounded-lg px-4 py-2">
            {
              uniqueClasses.map((cls, index) =>(
                <option key={index} value={cls} >{cls}</option>
              ))
            }
            </select>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {filteredStudents.slice(0,visibleCount).map((student) => {
          const accuracyValue = parseInt(student.accuracy);
          const isHigh = accuracyValue >= 90;
          const badgeBg = isHigh ? "bg-green-100" : "bg-blue-100";
          const badgeText = isHigh ? "text-green-700" : "text-blue-700";

          return (
            <li
              key={student.rank}
              className="bg-white rounded-xl shadow-md flex items-center gap-4 p-4"
            >
              <img
                src={student.avatar}
                alt={student.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h2 className="font-semibold text-gray-900">{student.name}</h2>
                <p className="text-sm text-gray-500">{student.class}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span
                    className={`px-2 py-0.5 text-xs font-semibold rounded-full ${badgeBg} ${badgeText}`}
                  >
                    {student.accuracy}
                  </span>
                  <span className="text-sm text-gray-400">{student.points} XP</span>
                </div>
              </div>
              <button className="border border-2 border-gray-300 rounded-lg p-2 hover:bg-gray-100">
                <IoEyeOutline />
              </button>
            </li>
          );
        })}
      </ul>
      {visibleCount < filteredStudents.length && (
        <div className='flex justify-center mt-6'>
        <button className='border border-2 text-md rounded-lg shadow-xl border-gray-500 cursor-pointer px-4 py-1 text-gray-700' 
            onClick={handleLoadMore}
        >
        Load More Students {filteredStudents.length - visibleCount} remaining
        </button>
      </div>
      )}
    </section>
    
    </>
  );
};

export default Dashboard;
