import React  from 'react';
import { IoEyeOutline } from 'react-icons/io5';

const studentsData = [
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

const Students = () => {
  return (
    <>
        
        <section className='p-5 shadow-xl rounded-lg mt-6'>
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
                <h1 className='text-2xl font-bold text-blue-500'>All Students</h1>
                <p className='text-gray-500 text-lg'>Complete Student directory with performance details</p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {studentsData.map((student) => {
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
        </section>
    </>
  )
}

export default Students