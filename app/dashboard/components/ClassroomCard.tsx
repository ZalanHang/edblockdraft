"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Classroom } from "@/utils/types";
import { displayName } from "@/utils/functions";

export default function ClassroomCard ({classroom}: {classroom: Classroom}) {
    const router = useRouter();
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
      setShowOptions(!showOptions);
    };

    return (
      <div
        className="bg-accent shadow-lg rounded-lg m-4 w-72 hover:scale-105 hover:shadow-xl duration-150 hover:cursor-pointer"
        onMouseDown={() => router.push(`/classroom/${classroom.classroomCode}`)}
        onMouseLeave={() => setShowOptions(false)}>
        {/* {imageSrc && (
          <img src={imageSrc} alt={name} className="w-full h-40 object-cover" />
        )} */}
        <div className="flex flex-row justify-between p-4 rounded-lg">

          <div>
            <h4>{classroom.name}</h4>
            <p className="text-gray-600 mt-2">{displayName(classroom.teacher)}</p>
          </div>
          <img
                src="/icons/dots.png"
                alt="Show Options"
                style={{ maxWidth: '32px', maxHeight: '32px'}}
                className="hover:bg-gray-400 hover:cursor-pointer"
                onMouseDown={(e) => {
                  e.stopPropagation(); // Prevent parent link from navigating
                  toggleOptions();
                }}
            />

          {showOptions && (
            <div className="bg-gray-100 p-2 group hover:bg-red-800 hover:cursor-pointer" 
              style={{
                position: 'absolute',
                top: '50%', 
                right: 0,
                zIndex: 1, 
              }}>
            <ul>
              <li onClick={() => console.log("TODO: REMOVE USER FROM CLASS")}>
                <p className="text-red-800 font-semibold group-hover:text-white">Leave</p>
              </li>
            </ul>
          </div>
      )}
        </div>
      </div>
    );
  };
