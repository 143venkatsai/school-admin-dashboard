import React from 'react';
import { GiTrophyCup } from "react-icons/gi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { GiSmallFire } from "react-icons/gi";
import { BsLightningCharge } from "react-icons/bs";
import { IoEyeOutline } from 'react-icons/io5';

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
  }
];


const Leaderboard = () => {
const champions = [
  
  {
    "rank": 2,
    "name": "Noah Smith",
    "class": "Class 7",
    "points": 920,
    "accuracy": "97%",
    "stars": 43,
    "streak_days": 20,
    "avatar": "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    "rank": 1,
    "name": "Emma Johnson",
    "class": "Class 8",
    "points": 950,
    "accuracy": "98%",
    "stars": 45,
    "streak_days": 21,
    "avatar": "https://randomuser.me/api/portraits/women/1.jpg",
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
  }
];

const currentChampion = [
  {
    id:1,
    title: "Current Champion",
    icon: "👑" ,
    name: "Emma Johnson",
    points: "950 points",
    color: "text-yellow-600",
  },
  {
    id:2,
    title: "Longest Streak",
    icon: "🔥",
    name: "Emma Johnson",
    points: "15 days",
    color: "text-orange-600",
  },
  {
    id:3,
    title: "Most Active",
    icon: "⚡",
    name: "Emma Johnson",
    points: "68 lessons",
    color: "text-blue-600",
  },
  {
    id:4,
    title: "Highest Accuracy",
    icon: "🎯",
    name: "Emma Johnson",
    points: "96%",
    color: "text-green-600",
  }
]

  return (
    <>
      {/* Header Section */}
    <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className='flex items-center mb-2'>
            <HiOutlineTrophy className="inline-block text-4xl text-yellow-500 mr-2" />
            <GiTrophyCup className="inline-block text-4xl text-blue-500 mr-2" />
            <h1 className="text-3xl font-bold text-blue-500 mb-2">
            School Leaderboard
            </h1>
          </span>
          
          <p className="text-gray-600">
            Celebrating top performers and encouraging healthy competition
          </p>
        </div>
        <p className="text-gray-600 border px-3 py-1 rounded-lg lg:ml-auto">
          Updated: 12/08/2025
        </p>
      </section>

      <section className="mt-6">
        <div className="w-full flex flex-col items-center shadow-xl rounded-lg mb-8">
          {/* Header */}
          <div className="bg-yellow-50 rounded-t-xl p-4 w-full text-center shadow">
            <h2 className="text-blue-500 font-semibold flex justify-center items-center gap-1">
              <span role="img" aria-label="medal">🏅</span> Champions Podium
              <span role="img" aria-label="medal">🏅</span>
            </h2>
            <p className="text-sm text-orange-500">
              This month's top 3 achievers
            </p>
          </div>

      {/* Podium */}
      <div className="bg-white w-full rounded-b-xl shadow p-6 flex justify-center gap-6 items-end pt-20">
        {/* 2nd place */}
        <div className="flex flex-col items-center">
          <img
            src={champions[0].avatar}
            alt={champions[0].name}
            className="w-16 h-16 rounded-full border-4 border-gray-300 object-cover"
          />
          <div
            className="mt-2 px-2 py-10 rounded-tl-xl rounded-tr-xl text-center bg-gray-400"
          >
            <p className="font-semibold text-white text-lg">{champions[0].name}</p>
            <p className="text-sm text-white">{champions[0].class}</p>
            <p className="text-sm font-semibold text-white">{champions[0].points} pts</p>
          </div>
        </div>

        {/* 1st place */}
        <div className="flex flex-col items-center -mt-10">
          <img
            src={champions[1].avatar}
            alt={champions[1].name}
            className="w-20 h-20 rounded-full border-4 border-yellow-400 object-cover"
          />
          <div
            className="mt-2 px-2 py-15 rounded-tl-xl rounded-tr-xl bg-yellow-300 text-center"
          >
            <p className="font-semibold text-white text-lg">{champions[1].name}</p>
            <p className="text-sm text-white">{champions[1].class}</p>
            <p className="text-lg font-semibold text-white mb-4">{champions[1].points} pts</p>
            <span>
              <GiTrophyCup className="inline-block text-2xl text-yellow-800" />
              <GiSmallFire className="inline-block text-2xl text-yellow-900 mx-" />
              <BsLightningCharge className="inline-block text-2xl text-yellow-800" />
            </span>
          </div>
        </div>

        {/* 3rd place */}
        <div className="flex flex-col items-center">
          <img
            src={champions[2].avatar}
            alt={champions[2].name}
            className="w-16 h-16 rounded-full border-4 border-orange-400 object-cover"
          />
          <div
            className="mt-2 px-2 py-10 rounded-tl-xl rounded-tr-xl bg-orange-400 text-center"
          >
            <p className="font-semibold text-white text-lg">{champions[2].name}</p>
            <p className="text-sm text-white">{champions[2].class}</p>
            <p className="text-sm font-semibold text-white">{champions[2].points} pts</p>
          </div>
        </div>
      </div>
      </div>
      </section>

      {/* Leaderboard Section */}
      <section className="bg-white rounded-lg shadow-xl p-6">
        <h2 className="text-xl font-bold text-blue-500">Complete Rankings</h2>
      <p className="text-gray-500 text-sm mb-6">
        All students ranked by points earned this month
      </p>

      <ul className="space-y-4">
        {leaderboardData.map((student) => {
          const isTopThree = student.rank <= 3;
          const containerClasses = isTopThree
            ? "border border-yellow-300 bg-yellow-50"
            : "bg-gray-200";

          return (
            <li
              key={student.rank}
              className={`rounded-xl flex flex-col md:flex-row items-center justify-between p-4 ${containerClasses}`}
            >
              {/* Left side: Rank, Avatar, Info */}
              <div className="flex items-center gap-4 mr-auto">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full text-white font-bold"
                  style={{ backgroundColor: student.color }}
                >
                  #{student.rank}
                </div>

                
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{student.name}</h3>
                  <p className="text-sm text-gray-500">{student.class}</p>
                  <div className="text-sm">🏆🔥⚡</div>
                </div>
              </div>

              {/* Right side*/}
              <div className="flex items-center gap-6 mr-auto md:mr-0 mt-4 md:mt-0">
                <div className="text-right">
                  <p className="text-orange-500 font-bold text-lg">
                    {student.points}
                  </p>
                  <p className="text-xs text-gray-500">points</p>
                </div>
                <div className="text-green-500 font-semibold text-sm">
                  {student.accuracy}
                </div>
                <div className="text-gray-400 text-sm flex items-center gap-1">
                  🔥 {student.streak_days}
                </div>
                <button className="flex items-center gap-1 border border-gray-300 rounded-lg px-3 py-1 text-sm hover:bg-gray-100">
                  <IoEyeOutline /> View
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      </section>

      {/* Current Champions Section */}
      <section className="mt-6">
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {currentChampion.map((champion) => (
            <li key={champion.id} className="flex flex-col items-center p-4 rounded-lg shadow-xl">
              <span className="text-center font-bold mb-1 flex items-center justify-center text-3xl">
                {champion.icon}
              </span>
              <h3 className="text-lg font-semibold">{champion.title}</h3>
              <p className="text-sm text-gray-500" >{champion.name}</p>
              <p className={`text-xl font-bold ${champion.color}`}>{champion.points}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Leaderboard