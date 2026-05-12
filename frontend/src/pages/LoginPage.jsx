import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import PageLayout from '../components/PageLayout';

// we pull in the design mock so the login/signup page can look exactly like
// the screenshot you provided.  you can swap this out if you have another
// version of the art later.

export default function LoginPage() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({
    username: '',
    password: '',
    fullName: '',
    // grade is no longer part of the signup form; it will be chosen later
    // on the grade‑selection page.  we keep `role` so the user can indicate
    // teacher vs student.
    role: 'student',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
    setError('');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      const url = mode === 'login' ? '/api/auth/login' : '/api/auth/signup';
      const payload = {
        username: form.username,
        password: form.password,
      };

      if (mode === 'signup') {
        payload.fullName = form.fullName;
        // do not send a grade unless we actually have one (we won't).
        if (form.role === 'student' && form.grade != null) {
          payload.grade = Number(form.grade);
        }
        payload.role = form.role || 'student';
      }

      const response = await api.post(url, payload);
      const token = response.data.token;
      const student = response.data.student;
      signIn(token, student);
      navigate('/practice-mode');
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
      setLoading(false);
    }
  };

  return (
    <div className="pd-container flex items-center justify-center">
      <img src="/assets/login-bg.png" alt="Background" className="pd-bg" />
      
      <div className="relative mx-auto w-full max-w-3xl z-10 px-4 transform translate-y-12">
        <div className="glass-card p-0 overflow-hidden shadow-none border-0 flex flex-col md:flex-row min-h-[380px]">
          
          {/* Left Side: Branding & Toggles */}
          <div className="md:w-5/12 p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 bg-white/5">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🚀</div>
                <div className="text-xl font-black uppercase tracking-tighter text-white">Pronounce It</div>
              </div>
              <div className="text-2xl font-black text-white leading-tight mb-2">
                {mode === 'login' ? 'Welcome Back!' : 'Join the Fun!'}
              </div>
              <p className="text-sm text-white/70 font-medium max-w-[200px]">
                Ready to level up your English pronunciation? {mode === 'login' ? 'Jump right back in!' : 'Create your account today!'}
              </p>
            </div>

            <div className="mt-10">
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-3 ml-1">Select Mode</div>
              <div className="flex gap-2 bg-white/5 p-1 rounded-2xl">
                <button
                  className={`flex-1 glass-toggle-btn text-xs ${mode === 'login' ? 'active' : ''}`}
                  type="button"
                  onClick={() => setMode('login')}
                >
                  Log in
                </button>
                <button
                  className={`flex-1 glass-toggle-btn text-xs ${mode === 'signup' ? 'active' : ''}`}
                  type="button"
                  onClick={() => setMode('signup')}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex-1 p-10 flex flex-col justify-center">
            <form onSubmit={onSubmit} className="space-y-6">
              {mode === 'signup' && (
                <div>
                  <label className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-2 ml-1">Full name</label>
                  <input
                    className="w-full glass-input"
                    value={form.fullName}
                    onChange={onChange('fullName')}
                    placeholder="Ex: Alex"
                    required
                  />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-2 ml-1">Username</label>
                  <input
                    className="w-full glass-input"
                    value={form.username}
                    onChange={onChange('username')}
                    placeholder="Ex: alex123"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-2 ml-1">Password</label>
                  <input
                    className="w-full glass-input"
                    type="password"
                    value={form.password}
                    onChange={onChange('password')}
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>


              {error && <div className="text-sm text-red-300 bg-red-500/10 p-3 rounded-xl border border-red-500/20">{error}</div>}

              <div className="pt-2">
                <button disabled={loading} className="button-primary w-full shadow-lg border border-white/20 py-4 h-auto text-lg hover:scale-[1.02] active:scale-[0.98]">
                  {loading ? 'Please wait...' : mode === 'login' ? 'Start Learning' : 'Create My Account'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
