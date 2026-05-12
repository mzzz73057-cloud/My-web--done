import { useNavigate } from 'react-router-dom';
import { Mic, Users } from "lucide-react";
import './PracticeModePage.css';

export function PracticeAloneButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="transition-transform duration-200 hover:scale-105 active:scale-95"
      style={{
        fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
        fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
        fontWeight: 900,
        padding: "0.7em 2em",
        borderRadius: "999px",
        border: "4px solid",
        cursor: "pointer",
        background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
        borderColor: "#38bdf8",
        color: "#0c4a6e",
        boxShadow: "0 5px 0 #0284c7, 0 7px 14px rgba(0,0,0,0.18)",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        whiteSpace: "nowrap"
      }}
    >
      <Mic className="h-6 w-6 md:h-7 md:w-7" strokeWidth={3} />
      Practice Alone
    </button>
  );
}

export function PracticeWithFriendsButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
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
        display: "flex",
        alignItems: "center",
        gap: "8px",
        whiteSpace: "nowrap"
      }}
    >
      <Users className="h-6 w-6 md:h-7 md:w-7" strokeWidth={3} />
      Practice With Friends
    </button>
  );
}

export default function PracticeModePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden"
      }}
    >
      <img
        src="/assets/Background Page 3.png"
        alt="background"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      <div style={{ position: "absolute", left: "22%", bottom: "12%", zIndex: 10 }}>
        <PracticeAloneButton onClick={() => navigate('/grades')} />
      </div>

      <div style={{ position: "absolute", left: "calc(54% - 1mm)", bottom: "12%", zIndex: 10 }}>
        <PracticeWithFriendsButton onClick={() => alert('Practice With Friends — coming soon! 🎉')} />
      </div>
    </div>
  );
}
