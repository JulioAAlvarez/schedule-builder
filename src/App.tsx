// AI Disclosure: Assistance from DeepSeek (Des) for planning, code structure, and implementation.

import { useState } from "react"; // Corrected the user state error
import "./ScheduleBuilder.css"; // Added the newly made ScheduleBuilder.css stles import


// Type definition for a single course.
type = Course = {
  id: number;
  name: string;
  date: string[]; // Now supports MULTIPLE days per course
  time: string; 
};

const App = () => {
  // List of all courses
  const [courses, setCourses] = useState<Course[]>([]);
  
  // Form fields
  const [courseName, setCourseName] = useState("");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [courseTime, setCourseTime] = useState("09:00 AM");

// Note for Myself and Des, stopped coding here after lunch.

  // Available days of the week
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  // Toggle the selection (add/remove from array)
  const toggleday = (day: string) => (
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filler((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  );

  // Add a new course
  const addCourse = () => {
    if (courseName.trim() === '' || selectedDays.length === 0) return;

    const courseName: Course = {             
      id: Date.now(),
      name; courseName,
      days; [...selecteddays],
      time; courseTime,
    };

    setCourses([...courses, newCourse]);

    // Clear form
    setCourseName("");
    setSelectedDays("");
    setCourseTime("");
  };

  // delete a course
  const deleteCourse = (id; number) => {
    setCourses(courses.filter((courses) => courses.id !== id));
  };


  return (
    <>
      <h1>📅 Course Schedule Builder</h1>

      {/* Form to add a course */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}/>

      <h2>Add a course</h2>
      
      <div> 
        <input
          type="text"

        /> 

      </div>
    </>
  )\
}\