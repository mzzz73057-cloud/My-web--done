import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './UnitSelectionPage.css';

export default function UnitSelectionPage() {
  const { grade } = useParams();
  const navigate = useNavigate();
  const gradeId = grade || 6;

  const handleBack = () => navigate(-1);
  const goToLesson = (unit) => navigate(`/lessons/${gradeId}/${unit}`);

  return (
    <div className="pd-container relative">
      <img src="/assets/Background Page 5.png" alt="Unit Background" className="pd-bg" />

      {/* Back Button */}
      <button
        type="button"
        onClick={handleBack}
        aria-label="Go back to previous page"
        className="absolute top-6 left-6 md:top-8 md:left-8 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full border-4 border-white shadow-lg transition-transform hover:scale-105 active:scale-95 z-20"
        style={{ backgroundColor: "#F57C00", marginTop: "1.5cm" }}
      >
        <ArrowLeft className="h-7 w-7 md:h-8 md:w-8 text-white" strokeWidth={3} />
      </button>

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -44%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        zIndex: 10
      }}>
        <button
          onClick={() => alert("Unit I coming soon!")}
          type="button"
          className="transition-transform duration-200 hover:scale-105 active:scale-95 hover:-translate-y-1"
          style={{
            width: 200, height: 200, borderRadius: 32,
            border: "4px solid #e9d8ff",
            background: "linear-gradient(160deg, #b07cff 0%, #7a3ff0 100%)",
            boxShadow: "0 10px 0 #5a23c2, 0 18px 30px rgba(122, 63, 240, 0.45)",
            color: "white", cursor: "pointer",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "space-between",
            padding: "16px 12px 20px",
            fontFamily: '"Baloo 2", "Nunito", system-ui, sans-serif',
            textShadow: "0 2px 0 rgba(0,0,0,0.18)",
          }}
        >
          <span style={{ fontSize: 22, fontWeight: 800 }}>UNIT I</span>
          <span style={{ fontSize: 64 }}>🎮</span>
          <span style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>
            Entertaining Myself
          </span>
        </button>

        <button
          onClick={() => alert("Unit II coming soon!")}
          type="button"
          className="transition-transform duration-200 hover:scale-105 active:scale-95 hover:-translate-y-1"
          style={{
            width: 200, height: 200, borderRadius: 32,
            border: "4px solid #d4f5dd",
            background: "linear-gradient(160deg, #7be495 0%, #2bb24c 100%)",
            boxShadow: "0 10px 0 #1d8a3a, 0 18px 30px rgba(43, 178, 76, 0.45)",
            color: "white", cursor: "pointer",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "space-between",
            padding: "16px 12px 20px",
            fontFamily: '"Baloo 2", "Nunito", system-ui, sans-serif',
            textShadow: "0 2px 0 rgba(0,0,0,0.18)",
          }}
        >
          <span style={{ fontSize: 22, fontWeight: 800 }}>UNIT II</span>
          <span style={{ fontSize: 64 }}>🏋️</span>
          <span style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>
            Keeping Fit
          </span>
        </button>

        <button
          onClick={() => alert("Unit III coming soon!")}
          type="button"
          className="transition-transform duration-200 hover:scale-105 active:scale-95 hover:-translate-y-1"
          style={{
            width: 200, height: 200, borderRadius: 32,
            border: "4px solid #d6ecff",
            background: "linear-gradient(160deg, #6cc2ff 0%, #1f7fe0 100%)",
            boxShadow: "0 10px 0 #1660ad, 0 18px 30px rgba(31, 127, 224, 0.45)",
            color: "white", cursor: "pointer",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "space-between",
            padding: "16px 12px 20px",
            fontFamily: '"Baloo 2", "Nunito", system-ui, sans-serif',
            textShadow: "0 2px 0 rgba(0,0,0,0.18)",
          }}
        >
          <span style={{ fontSize: 22, fontWeight: 800 }}>UNIT III</span>
          <span style={{ fontSize: 64 }}>❄️</span>
          <span style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>
            Having Fun in the Seasons
          </span>
        </button>

        <button
          onClick={() => alert("Unit IV coming soon!")}
          type="button"
          className="transition-transform duration-200 hover:scale-105 active:scale-95 hover:-translate-y-1"
          style={{
            width: 200, height: 200, borderRadius: 32,
            border: "4px solid #ffd9de",
            background: "linear-gradient(160deg, #ff7a8a 0%, #e63149 100%)",
            boxShadow: "0 10px 0 #b41f33, 0 18px 30px rgba(230, 49, 73, 0.45)",
            color: "white", cursor: "pointer",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "space-between",
            padding: "16px 12px 20px",
            fontFamily: '"Baloo 2", "Nunito", system-ui, sans-serif',
            textShadow: "0 2px 0 rgba(0,0,0,0.18)",
          }}
        >
          <span style={{ fontSize: 22, fontWeight: 800 }}>UNIT IV</span>
          <span style={{ fontSize: 64 }}>❤️</span>
          <span style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>
            Caring
          </span>
        </button>

        <button
          onClick={() => goToLesson(5)}
          type="button"
          className="transition-transform duration-200 hover:scale-105 active:scale-95 hover:-translate-y-1"
          style={{
            width: 200, height: 200, borderRadius: 32,
            border: "4px solid #fff3b8",
            background: "linear-gradient(160deg, #ffe066 0%, #f5b800 100%)",
            boxShadow: "0 10px 0 #c08a00, 0 18px 30px rgba(245, 184, 0, 0.45)",
            color: "white", cursor: "pointer",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "space-between",
            padding: "16px 12px 20px",
            fontFamily: '"Baloo 2", "Nunito", system-ui, sans-serif',
            textShadow: "0 2px 0 rgba(0,0,0,0.18)",
          }}
        >
          <span style={{ fontSize: 22, fontWeight: 800 }}>UNIT V</span>
          <span style={{ fontSize: 64 }}>🎉</span>
          <span style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>
            Celebrations
          </span>
        </button>

        <button
          onClick={() => alert("Unit VI coming soon!")}
          type="button"
          className="transition-transform duration-200 hover:scale-105 active:scale-95 hover:-translate-y-1"
          style={{
            width: 200, height: 200, borderRadius: 32,
            border: "4px solid #ffe1c9",
            background: "linear-gradient(160deg, #ffa45c 0%, #ef6a14 100%)",
            boxShadow: "0 10px 0 #b94a08, 0 18px 30px rgba(239, 106, 20, 0.45)",
            color: "white", cursor: "pointer",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "space-between",
            padding: "16px 12px 20px",
            fontFamily: '"Baloo 2", "Nunito", system-ui, sans-serif',
            textShadow: "0 2px 0 rgba(0,0,0,0.18)",
          }}
        >
          <span style={{ fontSize: 22, fontWeight: 800 }}>UNIT VI</span>
          <span style={{ fontSize: 64 }}>🛒</span>
          <span style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>
            Going Shopping
          </span>
        </button>

      </div>
    </div>
  );
}
