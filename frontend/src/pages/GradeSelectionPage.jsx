import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './GradeSelectionPage.css';

export default function GradeSelectionPage() {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);
  const handleMainMenu = () => navigate('/');

  return (
    <div className="pd-container relative w-full h-screen overflow-hidden">
      {/* New background from backgrounds folder */}
      <img src="/assets/Background Page 4.jpeg" alt="Grade Background" className="w-full h-full object-cover" />

      {/* Back to previous page button */}
      <button
        type="button"
        onClick={handleBack}
        aria-label="Go back to previous page"
        className="absolute top-6 left-6 md:top-8 md:left-8 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full border-4 border-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 z-20"
        style={{ backgroundColor: "#3E2310" }}
      >
        <ArrowLeft className="h-7 w-7 md:h-8 md:w-8 text-white" strokeWidth={3} />
      </button>

      {/* Grade Buttons Container */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -44%)',
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        zIndex: 10,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <button
          onClick={() => alert("4th Grade coming soon!")}
          className="transition-transform duration-200 hover:scale-105 active:scale-95"
          style={{
            fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            fontWeight: 900,
            padding: "0.7em 2em",
            borderRadius: "999px",
            border: "4px solid",
            cursor: "pointer",
            background: "linear-gradient(135deg, #fff8e1 0%, #ffe082 100%)",
            borderColor: "#e6a817",
            color: "#7B3F00",
            boxShadow: "0 5px 0 #c4890e, 0 7px 14px rgba(0,0,0,0.18)",
          }}
        >
          4th Grade
        </button>

        <button
          onClick={() => alert("5th Grade coming soon!")}
          className="transition-transform duration-200 hover:scale-105 active:scale-95"
          style={{
            fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            fontWeight: 900,
            padding: "0.7em 2em",
            borderRadius: "999px",
            border: "4px solid",
            cursor: "pointer",
            background: "linear-gradient(135deg, #fff8e1 0%, #ffe082 100%)",
            borderColor: "#e6a817",
            color: "#7B3F00",
            boxShadow: "0 5px 0 #c4890e, 0 7px 14px rgba(0,0,0,0.18)",
          }}
        >
          5th Grade
        </button>

        <button
          onClick={() => navigate('/units/6')}
          className="transition-transform duration-200 hover:scale-105 active:scale-95"
          style={{
            fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            fontWeight: 900,
            padding: "0.7em 2em",
            borderRadius: "999px",
            border: "4px solid",
            cursor: "pointer",
            background: "linear-gradient(135deg, #fff8e1 0%, #ffe082 100%)",
            borderColor: "#e6a817",
            color: "#7B3F00",
            boxShadow: "0 5px 0 #c4890e, 0 7px 14px rgba(0,0,0,0.18)",
          }}
        >
          6th Grade
        </button>
      </div>

      {/* Back to Main Menu button */}
      <div className="absolute inset-x-0 bottom-8 md:bottom-10 flex justify-center z-20">
        <button
          type="button"
          onClick={handleMainMenu}
          className="flex items-center gap-3 rounded-full border-4 border-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
          style={{ backgroundColor: "#3E2310" }}
        >
          <ArrowLeft className="h-5 w-5 md:h-6 md:w-6 text-white" strokeWidth={3} />
          <span>Back to Main Menu</span>
        </button>
      </div>
    </div>
  );
}
