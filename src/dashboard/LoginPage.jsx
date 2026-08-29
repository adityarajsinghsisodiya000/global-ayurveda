import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Eye, EyeOff, Leaf } from 'lucide-react';

const DEFAULT_USER = 'globalayurvedateamindia';
const DEFAULT_PASS = 'globalayurveda@6675';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const savedUser = localStorage.getItem('globalAyurveda_user') || DEFAULT_USER;
    const savedPass = localStorage.getItem('globalAyurveda_pass') || DEFAULT_PASS;

    setTimeout(() => {
      if (username === savedUser && password === savedPass) {
        localStorage.setItem('globalAyurveda_auth', 'true');
        navigate('/dashboard');
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#071c10] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#d4af37]/8 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-emerald-600/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e482f_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0b2b19] border-2 border-[#d4af37] mb-4">
            <Leaf size={28} className="text-[#d4af37]" />
          </div>
          <h1 className="font-serif-title text-2xl font-bold text-white tracking-wider">GLOBAL AYURVEDA</h1>
          <p className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mt-1">TEAM INDIA — Admin Panel</p>
        </div>

        {/* Login Card */}
        <div className="bg-[#0b2b19] border border-[#1d462d] rounded-2xl shadow-2xl p-8">
          <h2 className="font-serif-title text-lg font-bold text-[#faf5ea] tracking-wider text-center mb-6">
            SIGN IN TO DASHBOARD
          </h2>

          {error && (
            <div className="bg-red-500/10 border border-red-500/40 text-red-400 text-xs text-center py-2.5 px-4 rounded-lg mb-5">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-[#a3c2af] uppercase tracking-wider mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#071c10] border border-[#1d462d] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#a3c2af] uppercase tracking-wider mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#071c10] border border-[#1d462d] rounded-lg px-4 py-3 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#d4af37] hover:bg-[#e6c24d] disabled:opacity-60 text-[#071c10] font-bold text-sm py-3.5 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in...
                </span>
              ) : (
                <>
                  <LogIn size={16} />
                  <span>SIGN IN</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Back to Website */}
        <div className="text-center mt-6">
          <a href="/" className="text-xs text-[#7d9b87] hover:text-[#d4af37] transition-colors">
            ← Back to Website
          </a>
        </div>
      </div>
    </div>
  );
}
