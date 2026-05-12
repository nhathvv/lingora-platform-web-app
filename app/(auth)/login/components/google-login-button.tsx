'use client';

import { useState } from 'react';
import { googleOAuthUrl } from '@/lib/api';

function GoogleIcon() {
  return (
    <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908C16.658 14.148 17.64 11.84 17.64 9.2Z" />
      <path fill="rgba(255,255,255,0.85)" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" />
      <path fill="rgba(255,255,255,0.7)" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" />
      <path fill="rgba(255,255,255,0.6)" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" />
    </svg>
  );
}

export function GoogleLoginButton() {
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    setLoading(true);
    window.setTimeout(() => {
      window.location.href = googleOAuthUrl;
    }, 600);
  }

  return (
    <button
      className="mb-5 flex h-11 w-full items-center justify-center gap-2.5 bg-[#5468ff] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#4a5fe5] active:bg-[#3e51cc] disabled:pointer-events-none disabled:bg-[#444950] disabled:opacity-60"
      type="button"
      onClick={handleLogin}
      disabled={loading}
    >
      {loading ? <span className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-white/30 border-t-white" /> : <GoogleIcon />}
      <span>Tiếp tục với Google</span>
    </button>
  );
}
