import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Mic, AudioLines, ArrowLeft } from "lucide-react";
import './LessonSelectionPage.css';

const lessonsData = [
  {
    title: "Lesson 1: Children's Day",
    gradient: "linear-gradient(90deg, #FF4FA3 0%, #FFD93D 100%)",
    textColor: "#ffffff",
  },
  {
    title: "Lesson 2: Mother's Day",
    gradient: "linear-gradient(90deg, #34D399 0%, #16A34A 100%)",
    textColor: "#ffffff",
  },
  {
    title: "Lesson 3: Happy New Year",
    gradient: "linear-gradient(90deg, #60A5FA 0%, #1D4ED8 100%)",
    textColor: "#ffffff",
  },
  {
    title: "Lesson 4: Teacher's Day",
    gradient: "linear-gradient(90deg, #F87171 0%, #B91C1C 100%)",
    textColor: "#ffffff",
  },
  {
    title: "Lesson 5: End of School Year Party",
    gradient: "linear-gradient(90deg, #FDE047 0%, #F97316 100%)",
    textColor: "#ffffff",
  },
];

function LessonButton({ lesson, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center justify-between gap-4 rounded-full px-6 py-4 shadow-[0_8px_0_rgba(0,0,0,0.18),0_12px_24px_rgba(0,0,0,0.18)] ring-4 ring-white/70 transition-transform duration-150 hover:scale-[1.05] active:translate-y-2 active:shadow-[0_2px_0_rgba(0,0,0,0.18),0_6px_12px_rgba(0,0,0,0.18)]"
      style={{
        background: lesson.gradient,
        color: lesson.textColor,
      }}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/25 ring-2 ring-white/60 backdrop-blur-sm">
        <Mic className="h-6 w-6" strokeWidth={2.5} />
      </span>

      <span
        className="flex-1 text-center text-lg font-black tracking-wide drop-shadow-[0_3px_0_rgba(0,0,0,0.3)] sm:text-2xl"
        style={{ fontFamily: "'Baloo 2', 'Fredoka', system-ui, sans-serif" }}
      >
        {lesson.title}
      </span>

      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/25 ring-2 ring-white/60 backdrop-blur-sm">
        <AudioLines className="h-6 w-6" strokeWidth={2.5} />
      </span>
    </button>
  );
}

export default function LessonSelectionPage() {
  const { grade, unitNumber } = useParams();
  const navigate = useNavigate();
  const [lessons, setLessons] = useState([]);

  const handleBack = () => navigate(-1);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`/api/lessons/${grade}/${unitNumber}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setLessons(res.data.lessons || []);
      } catch (err) {
        console.error('Error fetching lessons:', err);
      }
    };
    fetchLessons();
  }, [grade, unitNumber]);

  const handleLessonClick = (lessonNum) => {
    if (unitNumber === '5') {
      navigate(`/unit5/lesson${lessonNum}`);
    } else {
      alert(`Lesson ${lessonNum} content coming soon!`);
    }
  };

  return (
    <div className="pd-container relative">
      <img src="/assets/Background page 6.png" alt="Lesson Background" className="pd-bg" />

      {/* Back Button */}
      <button
        type="button"
        onClick={handleBack}
        aria-label="Go back to previous page"
        className="absolute top-6 left-6 md:top-8 md:left-8 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full border-4 border-white shadow-lg transition-transform hover:scale-105 active:scale-95 z-20"
        style={{ backgroundColor: "#D32F2F" }}
      >
        <ArrowLeft className="h-7 w-7 md:h-8 md:w-8 text-white" strokeWidth={3} />
      </button>

      <div style={{
        position: 'absolute',
        top: '12%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(70vw, 750px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        zIndex: 10
      }}>
        {lessonsData.map((lesson, index) => (
          <LessonButton 
            key={index} 
            lesson={lesson} 
            onClick={() => handleLessonClick(index + 1)} 
          />
        ))}
      </div>
    </div>
  );
}
