import { useNavigate } from 'react-router-dom';
import { GraduationCap, Home } from 'lucide-react';
import { useEffect } from 'react';

export default function AboutUsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => obs.observe(el));

    return () => {
      els.forEach((el) => obs.unobserve(el));
    };
  }, []);

  return (
    <div className="font-body min-h-screen relative overflow-x-hidden" style={{
      background: 'linear-gradient(135deg, #FFF0F5, #FEF9C3, #DBEAFE, #D9F99D, #FCE7F3, #CCFBF1, #FFE4E6)',
      backgroundSize: '600% 600%',
      animation: 'colorMove 14s ease-in-out infinite'
    }}>
      <style>{`
        @keyframes colorMove {
          0%   { background-position: 0% 50%; }
          25%  { background-position: 50% 100%; }
          50%  { background-position: 100% 50%; }
          75%  { background-position: 50% 0%; }
          100% { background-position: 0% 50%; }
        }
        .bubble { position: absolute; border-radius: 50%; opacity: 0.13; pointer-events: none; }
        @keyframes floatUp { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-18px); } }
        @keyframes floatSlow { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-12px) rotate(4deg); } }
        @keyframes wiggle { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
        @keyframes bounceEmoji { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.5) translateY(30px); } 70% { transform: scale(1.06) translateY(-4px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes slideUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes sparkle { 0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); } 50% { opacity: 0.7; transform: scale(1) rotate(180deg); } }
        .anim-float { animation: floatUp 3s ease-in-out infinite; }
        .anim-float-slow { animation: floatSlow 5s ease-in-out infinite; }
        .anim-wiggle { animation: wiggle 2s ease-in-out infinite; }
        .anim-bounce { animation: bounceEmoji 2s ease-in-out infinite; }
        .anim-pop { animation: popIn 0.7s ease-out both; }
        .anim-slide { animation: slideUp 0.7s ease-out both; }
        .anim-sparkle { animation: sparkle 2.5s ease-in-out infinite; }
        .team-card { transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .team-card:hover { transform: translateY(-10px) scale(1.03); }
        .feat-card { transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .feat-card:hover { transform: translateY(-8px) rotate(-1deg); }
        .parent-card { transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease; }
        .parent-card:hover { transform: translateY(-10px) scale(1.02); }
        .reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.7s ease-out, transform 0.7s ease-out; }
        .reveal.show { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* FLOATING DECORATIONS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="bubble anim-float" style={{ width: '140px', height: '140px', background: '#FF6B9D', top: '8%', left: '4%' }}></div>
        <div className="bubble anim-float-slow" style={{ width: '100px', height: '100px', background: '#60A5FA', top: '18%', right: '8%', animationDelay: '1s' }}></div>
        <div className="bubble anim-float" style={{ width: '160px', height: '160px', background: '#FACC15', top: '48%', left: '12%', animationDelay: '2s' }}></div>
        <div className="bubble anim-float-slow" style={{ width: '80px', height: '80px', background: '#4ADE80', top: '62%', right: '18%', animationDelay: '0.5s' }}></div>
        <div className="bubble anim-float" style={{ width: '120px', height: '120px', background: '#C084FC', top: '78%', left: '48%', animationDelay: '3s' }}></div>
        <div className="bubble anim-float-slow" style={{ width: '90px', height: '90px', background: '#FB923C', top: '32%', left: '68%', animationDelay: '1.5s' }}></div>
        <div className="bubble anim-float" style={{ width: '130px', height: '130px', background: '#22D3EE', bottom: '8%', right: '4%', animationDelay: '2.5s' }}></div>

        <span className="absolute anim-sparkle" style={{ top: '7%', left: '22%', fontSize: '22px', color: '#FACC15', filter: 'drop-shadow(0 0 4px rgba(250,204,21,0.5))' }}>✦</span>
        <span className="absolute anim-sparkle" style={{ top: '14%', right: '22%', fontSize: '18px', color: '#FACC15', filter: 'drop-shadow(0 0 4px rgba(250,204,21,0.5))', animationDelay: '0.7s' }}>✦</span>
        <span className="absolute anim-sparkle" style={{ top: '44%', left: '7%', fontSize: '20px', color: '#FACC15', filter: 'drop-shadow(0 0 4px rgba(250,204,21,0.5))', animationDelay: '1.4s' }}>✦</span>
        <span className="absolute anim-sparkle" style={{ top: '68%', right: '10%', fontSize: '22px', color: '#FACC15', filter: 'drop-shadow(0 0 4px rgba(250,204,21,0.5))', animationDelay: '0.3s' }}>✦</span>
        <span className="absolute anim-sparkle" style={{ bottom: '18%', left: '28%', fontSize: '18px', color: '#FACC15', filter: 'drop-shadow(0 0 4px rgba(250,204,21,0.5))', animationDelay: '1.8s' }}>✦</span>
        <span className="absolute anim-sparkle" style={{ top: '53%', left: '82%', fontSize: '20px', color: '#FACC15', filter: 'drop-shadow(0 0 4px rgba(250,204,21,0.5))', animationDelay: '1.1s' }}>✦</span>
      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HERO */}
        <section className="min-h-[65vh] flex items-center justify-center px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="anim-pop">
              <h1 className="font-fun text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight" style={{ background: 'linear-gradient(to right,#FF6B9D,#FACC15,#4ADE80,#60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                About Us
              </h1>
            </div>
            <p className="font-fun text-xl sm:text-2xl text-gray-600 mt-6 anim-slide" style={{ animationDelay: '0.2s' }}>
              Meet the people behind the fun!
            </p>
            <div className="flex justify-center gap-4 mt-8 anim-slide" style={{ animationDelay: '0.4s' }}>
              <span className="text-4xl anim-bounce">🦋</span>
              <span className="text-4xl anim-bounce" style={{ animationDelay: '0.15s' }}>⭐</span>
              <span className="text-4xl anim-bounce" style={{ animationDelay: '0.3s' }}>🎨</span>
              <span className="text-4xl anim-bounce" style={{ animationDelay: '0.45s' }}>📚</span>
              <span className="text-4xl anim-bounce" style={{ animationDelay: '0.6s' }}>🌻</span>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 reveal">
              <span className="text-5xl block mb-3">👩‍🏫👩‍🏫</span>
              <h2 className="font-fun text-4xl sm:text-5xl font-extrabold text-gray-800">
                Who <span style={{ color: '#FF6B9D' }}>We</span> <span style={{ color: '#60A5FA' }}>Are</span>
              </h2>
              <div className="w-24 h-1.5 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(to right,#FF6B9D,#FACC15)' }}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

              {/* MAISSA */}
              <div className="team-card reveal" style={{ transitionDelay: '0.1s' }}>
                <div style={{ background: 'linear-gradient(135deg,#FFF0F5,#F3E8FF)', border: '2px solid #FBCFE8', borderRadius: '1.5rem', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, right: 0, width: '70px', height: '70px', background: '#FF6B9D', opacity: 0.1, borderBottomLeftRadius: '60px' }}></div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '50px', height: '50px', background: '#C084FC', opacity: 0.1, borderTopRightRadius: '50px' }}></div>
                  <div style={{ width: '110px', height: '110px', margin: '0 auto 1.5rem', borderRadius: '50%', background: 'linear-gradient(135deg,#FF6B9D,#C084FC)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(255,107,157,0.3)', overflow: 'hidden' }}>
                    <img src="/backgrounds/Maissa.png" alt="Maissa Zaied" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 className="font-fun text-2xl font-bold text-gray-800 text-center">Maissa Zaied</h3>
                  <div className="flex justify-center mt-2">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#FCE7F3', color: '#EC4899', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '6px 14px', borderRadius: '9999px' }}>
                      <GraduationCap size={13} />
                      Pre-service Teacher
                    </span>
                  </div>
                  <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.7)', borderRadius: '0.75rem', padding: '0.75rem 1rem' }}>
                      <span style={{ fontSize: '1.3rem' }}>🏛️</span>
                      <div>
                        <p style={{ fontSize: '0.65rem', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Institution</p>
                        <p style={{ color: '#374151', fontWeight: 700, fontSize: '0.875rem' }}>HIHSM</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.7)', borderRadius: '0.75rem', padding: '0.75rem 1rem' }}>
                      <span style={{ fontSize: '1.3rem' }}>🔍</span>
                      <div>
                        <p style={{ fontSize: '0.65rem', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Research Field</p>
                        <p style={{ color: '#374151', fontWeight: 700, fontSize: '0.875rem' }}>Education & Teaching</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FATMA */}
              <div className="team-card reveal" style={{ transitionDelay: '0.3s' }}>
                <div style={{ background: 'linear-gradient(135deg,#EFF6FF,#ECFEFF)', border: '2px solid #BFDBFE', borderRadius: '1.5rem', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, right: 0, width: '70px', height: '70px', background: '#60A5FA', opacity: 0.1, borderBottomLeftRadius: '60px' }}></div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '50px', height: '50px', background: '#22D3EE', opacity: 0.1, borderTopRightRadius: '50px' }}></div>
                  <div style={{ width: '110px', height: '110px', margin: '0 auto 1.5rem', borderRadius: '50%', background: 'linear-gradient(135deg,#60A5FA,#22D3EE)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(96,165,250,0.3)', overflow: 'hidden' }}>
                    <img src="/backgrounds/Fatma.png" alt="Fatma Turki" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 className="font-fun text-2xl font-bold text-gray-800 text-center">Fatma Turki</h3>
                  <div className="flex justify-center mt-2">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#DBEAFE', color: '#3B82F6', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '6px 14px', borderRadius: '9999px' }}>
                      <GraduationCap size={13} />
                      Pre-service Teacher
                    </span>
                  </div>
                  <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.7)', borderRadius: '0.75rem', padding: '0.75rem 1rem' }}>
                      <span style={{ fontSize: '1.3rem' }}>🏛️</span>
                      <div>
                        <p style={{ fontSize: '0.65rem', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Institution</p>
                        <p style={{ color: '#374151', fontWeight: 700, fontSize: '0.875rem' }}>HIHSM</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.7)', borderRadius: '0.75rem', padding: '0.75rem 1rem' }}>
                      <span style={{ fontSize: '1.3rem' }}>🔍</span>
                      <div>
                        <p style={{ fontSize: '0.65rem', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Research Field</p>
                        <p style={{ color: '#374151', fontWeight: 700, fontSize: '0.875rem' }}>Education & Teaching</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* HOW IT STARTED */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto reveal">
            <div className="text-center mb-12">
              <span className="text-5xl block mb-3">🌱</span>
              <h2 className="font-fun text-4xl sm:text-5xl font-extrabold text-gray-800">
                How It <span style={{ color: '#4ADE80' }}>Started</span>
              </h2>
              <div className="w-24 h-1.5 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(to right,#4ADE80,#22D3EE)' }}></div>
            </div>
            <div style={{ background: 'linear-gradient(135deg,#F0FDF4,#FEFCE8,#FFF7ED)', border: '2px solid #BBF7D0', borderRadius: '1.5rem', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
              <div className="anim-wiggle" style={{ position: 'absolute', top: '12px', left: '16px', fontSize: '2rem', opacity: 0.15 }}>📖</div>
              <div className="anim-wiggle" style={{ position: 'absolute', bottom: '12px', right: '16px', fontSize: '2rem', opacity: 0.15, animationDelay: '1s' }}>💡</div>
              <div className="anim-float" style={{ position: 'absolute', top: '50%', right: '24px', fontSize: '1.5rem', opacity: 0.12 }}>🌟</div>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#374151', fontSize: '1.1rem', lineHeight: 1.8 }}>
                <p><span style={{ fontSize: '1.8rem', marginRight: '4px' }}>💡</span> As two pre-service teachers at HIHSM, we noticed something: kids needed a space that was more than just supervision — they needed a place that sparked <strong style={{ color: '#16A34A' }}>joy, creativity, and growth</strong>.</p>
                <p><span style={{ fontSize: '1.8rem', marginRight: '4px' }}>🎨</span> We combined our passion for education and teaching research to build something meaningful — a program designed <em>with kids in mind</em>, where every activity has a purpose behind the fun.</p>
                <p><span style={{ fontSize: '1.8rem', marginRight: '4px' }}>🚀</span> What started as a small idea between two friends became a mission: <strong style={{ color: '#EA580C' }}>make after-school time the best part of a child's day</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* OBJECTIVES */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 reveal">
              <span className="text-5xl block mb-3">🎯</span>
              <h2 className="font-fun text-4xl sm:text-5xl font-extrabold text-gray-800">
                Our <span style={{ color: '#C084FC' }}>Objectives</span>
              </h2>
              <div className="w-24 h-1.5 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(to right,#C084FC,#FF6B9D)' }}></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="feat-card reveal" style={{ transitionDelay: '0.1s', background: 'linear-gradient(135deg,#FAF5FF,#FDF2F8)', border: '2px solid #E9D5FF', borderRadius: '1rem', padding: '1.5rem' }}>
                <div style={{ width: '52px', height: '52px', background: 'linear-gradient(135deg,#C084FC,#FF6B9D)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1rem', boxShadow: '0 4px 15px rgba(192,132,252,0.3)' }}>🧠</div>
                <h3 className="font-fun text-xl font-bold text-gray-800 mb-2">Improve Skills</h3>
                <p style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.7 }}>To help Tunisian primary EFL students improve their English speaking skills through fun, interactive gamified activities.</p>
              </div>

              <div className="feat-card reveal" style={{ transitionDelay: '0.2s', background: 'linear-gradient(135deg,#FFF7ED,#FEF9C3)', border: '2px solid #FED7AA', borderRadius: '1rem', padding: '1.5rem' }}>
                <div style={{ width: '52px', height: '52px', background: 'linear-gradient(135deg,#FB923C,#FACC15)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1rem', boxShadow: '0 4px 15px rgba(251,146,60,0.35)' }}>🎮</div>
                <h3 className="font-fun text-xl font-bold text-gray-800 mb-2">Engaging Experience</h3>
                <p style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.7 }}>To transform English language learning into an engaging experience using game elements such as points, badges, levels, and rewards.</p>
              </div>

              <div className="feat-card reveal" style={{ transitionDelay: '0.3s', background: 'linear-gradient(135deg,#EFF6FF,#ECFEFF)', border: '2px solid #BFDBFE', borderRadius: '1rem', padding: '1.5rem' }}>
                <div style={{ width: '52px', height: '52px', background: 'linear-gradient(135deg,#60A5FA,#22D3EE)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1rem', boxShadow: '0 4px 15px rgba(96,165,250,0.3)' }}>🚀</div>
                <h3 className="font-fun text-xl font-bold text-gray-800 mb-2">Empower Educators</h3>
                <p style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.7 }}>To provide educators with a ready-to-use digital tool that complements their classroom teaching and encourages oral communication.</p>
              </div>

            </div>
          </div>
        </section>

        {/* PARENTS SECTION */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="anim-pop" style={{ display: 'inline-block', background: 'linear-gradient(to right,#FACC15,#FB923C,#FF6B9D)', color: 'white', fontFamily: '"Baloo 2", cursive', fontSize: '1.5rem', fontWeight: 700, padding: '14px 32px', borderRadius: '9999px', boxShadow: '0 8px 25px rgba(251,146,60,0.35)' }}>
                Parents, we got you! 👋
              </div>
              <p style={{ color: '#6B7280', fontSize: '1.1rem', marginTop: '1rem' }}>Safe, secure, and seriously good for them.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* 100% Safe */}
              <div className="parent-card reveal" style={{ transitionDelay: '0.1s' }}>
                <div style={{ background: 'linear-gradient(135deg,#DCFCE7,#F0FDF4,#ECFDF5)', border: '2px solid #BBF7D0', borderRadius: '1.5rem', padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden', height: '100%' }}>
                  <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', fontSize: '7rem', opacity: 0.04 }}>🛡️</div>
                  <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', borderRadius: '50%', background: 'linear-gradient(135deg,#4ADE80,#10B981)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', boxShadow: '0 8px 25px rgba(74,222,128,0.35)' }}>🛡️</div>
                  <div style={{ display: 'inline-block', background: '#16A34A', color: 'white', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '6px 18px', borderRadius: '9999px', marginBottom: '1rem' }}>100% Safe</div>
                  <p style={{ color: '#4B5563', lineHeight: 1.8 }}>Fully vetted staff, secure check-in/out, and a secure facility. Safety is the only thing we take seriously.</p>
                </div>
              </div>

              {/* Skill Building */}
              <div className="parent-card reveal" style={{ transitionDelay: '0.3s' }}>
                <div style={{ background: 'linear-gradient(135deg,#DBEAFE,#EEF2FF,#F5F3FF)', border: '2px solid #BFDBFE', borderRadius: '1.5rem', padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden', height: '100%' }}>
                  <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', fontSize: '7rem', opacity: 0.04 }}>🧩</div>
                  <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', borderRadius: '50%', background: 'linear-gradient(135deg,#60A5FA,#6366F1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', boxShadow: '0 8px 25px rgba(96,165,250,0.35)' }}>🧩</div>
                  <div style={{ display: 'inline-block', background: '#2563EB', color: 'white', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '6px 18px', borderRadius: '9999px', marginBottom: '1rem' }}>Skill Building</div>
                  <p style={{ color: '#4B5563', lineHeight: 1.8 }}>While they're busy having fun, they're actually building social skills, creativity, and confidence.</p>
                </div>
              </div>

              {/* Happy Kids */}
              <div className="parent-card reveal" style={{ transitionDelay: '0.5s' }}>
                <div style={{ background: 'linear-gradient(135deg,#FEF3C7,#FFEDD5,#FEF9C3)', border: '2px solid #FDE047', borderRadius: '1.5rem', padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden', height: '100%' }}>
                  <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', fontSize: '7rem', opacity: 0.04 }}>😊</div>
                  <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', borderRadius: '50%', background: 'linear-gradient(135deg,#FB923C,#F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', boxShadow: '0 8px 25px rgba(251,146,60,0.35)' }}>😊</div>
                  <div style={{ display: 'inline-block', background: '#EA580C', color: 'white', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '6px 18px', borderRadius: '9999px', marginBottom: '1rem' }}>Happy Kids</div>
                  <p style={{ color: '#4B5563', lineHeight: 1.8 }}>No more homework battles right after school. We send them home happy, tired, and ready for family time.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BACK BUTTON */}
        <section className="py-16 px-6">
          <div className="text-center reveal">
            <button 
              onClick={() => navigate('/')} 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(to right,#FF6B9D,#C084FC,#60A5FA)', color: 'white', fontFamily: '"Baloo 2", cursive', fontSize: '1.25rem', fontWeight: 700, padding: '14px 40px', borderRadius: '9999px', boxShadow: '0 8px 25px rgba(192,132,252,0.35)', textDecoration: 'none', transition: 'all 0.3s ease' }} 
              onMouseOver={(e) => { e.currentTarget.style.transform='scale(1.06)'; e.currentTarget.style.boxShadow='0 12px 35px rgba(192,132,252,0.5)'; }} 
              onMouseOut={(e) => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.boxShadow='0 8px 25px rgba(192,132,252,0.35)'; }}
            >
              <Home size={22} />
              Back to Home
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: '2rem 1.5rem', borderTop: '2px dashed #E5E7EB', textAlign: 'center' }}>
          <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>Made with 💖 by <strong style={{ color: '#6B7280' }}>Maissa & Fatma</strong> — Pronounce It © 2026</p>
        </footer>

      </div>
    </div>
  );
}
