import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="pd-container">
      <img src="/assets/landing-bg.jpg" alt="Background" className="pd-bg" />
      
      {/* Pronounce It Title */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full z-10">
        <h1 
          className="text-6xl md:text-8xl font-black tracking-widest drop-shadow-2xl"
          style={{ 
            fontFamily: "'Fredoka One', 'Comic Sans MS', cursive",
            color: "#FFD700",
            WebkitTextStroke: "2px #8B4513",
            textShadow: "4px 4px 0 #8B4513, 0 10px 20px rgba(0,0,0,0.5)"
          }}
        >
          Pronounce It
        </h1>
      </div>

      {/* About Us Button on the left board */}
      <div className="absolute top-[19%] left-[8%] md:top-[11%] md:left-[12%] z-20">
        <button
          onClick={() => navigate('/about')}
          style={{
            fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
            fontSize: "clamp(0.8rem, 1.8vw, 1.1rem)",
            fontWeight: 900,
            padding: "0.5em 1.5em",
            borderRadius: "999px",
            border: "4px solid #1a7abf",
            cursor: "pointer",
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
            outline: "none",
            background: "linear-gradient(135deg, #87CEEB 0%, #4db8ff 100%)",
            color: "#fff",
            boxShadow: "0 5px 0 #1a7abf, 0 7px 14px rgba(0,0,0,0.18)",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 8px 0 #1a7abf, 0 10px 22px rgba(0,0,0,0.22)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 5px 0 #1a7abf, 0 7px 14px rgba(0,0,0,0.18)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "translateY(2px)";
            e.currentTarget.style.boxShadow = "0 2px 0 #1a7abf, 0 4px 8px rgba(0,0,0,0.18)";
          }}
        >
          About Us
        </button>
      </div>
      {/* Centered Action Buttons Container */}
      <div className="landing-buttons-wrapper">
        <button
          onClick={() => navigate('/login')}
          style={{
            fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
            fontSize: "clamp(0.9rem, 2.2vw, 1.25rem)",
            fontWeight: 900,
            padding: "0.6em 1.8em",
            borderRadius: "999px",
            border: "4px solid #1a7abf",
            cursor: "pointer",
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
            outline: "none",
            background: "linear-gradient(135deg, #87CEEB 0%, #4db8ff 100%)",
            color: "#fff",
            boxShadow: "0 5px 0 #1a7abf, 0 7px 14px rgba(0,0,0,0.18)",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 8px 0 #1a7abf, 0 10px 22px rgba(0,0,0,0.22)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 5px 0 #1a7abf, 0 7px 14px rgba(0,0,0,0.18)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "translateY(2px)";
            e.currentTarget.style.boxShadow = "0 2px 0 #1a7abf, 0 4px 8px rgba(0,0,0,0.18)";
          }}
        >
          Log In
        </button>
        <button
          onClick={() => navigate('/login')}
          style={{
            fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
            fontSize: "clamp(0.9rem, 2.2vw, 1.25rem)",
            fontWeight: 900,
            padding: "0.6em 1.8em",
            borderRadius: "999px",
            border: "4px solid #3a9e5f",
            cursor: "pointer",
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
            outline: "none",
            background: "linear-gradient(135deg, #90EE90 0%, #4cd97b 100%)",
            color: "#fff",
            boxShadow: "0 5px 0 #3a9e5f, 0 7px 14px rgba(0,0,0,0.18)",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 8px 0 #3a9e5f, 0 10px 22px rgba(0,0,0,0.22)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 5px 0 #3a9e5f, 0 7px 14px rgba(0,0,0,0.18)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "translateY(2px)";
            e.currentTarget.style.boxShadow = "0 2px 0 #3a9e5f, 0 4px 8px rgba(0,0,0,0.18)";
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
