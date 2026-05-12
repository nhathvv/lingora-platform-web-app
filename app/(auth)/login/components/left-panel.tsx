'use client';

import { FeatureCarousel } from './feature-carousel';

const STATS = [
  { icon: '👥', number: '5k+', label: 'Học viên đang học', gold: false },
  { icon: '📚', number: '180+', label: 'Bài học có cấu trúc', gold: false },
  { icon: '⭐', number: '4.9', label: 'Đánh giá trung bình', gold: true },
];

function Orb({ className }: { className: string }) {
  return <div className={`pointer-events-none absolute rounded-full blur-[80px] ${className}`} />;
}

export function LeftPanel() {
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-black p-12 max-[900px]:min-h-[60vh] max-[900px]:gap-10 max-[900px]:p-6">
      <Orb className="-left-[100px] -top-[120px] h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(60,80,220,0.55)_0%,transparent_70%)]" />
      <Orb className="left-[120px] top-[180px] h-[420px] w-[420px] bg-[radial-gradient(circle,rgba(100,50,200,0.45)_0%,transparent_70%)]" />
      <Orb className="-bottom-20 left-[260px] h-[360px] w-[360px] bg-[radial-gradient(circle,rgba(40,60,200,0.4)_0%,transparent_70%)]" />
      <Orb className="right-[60px] top-[300px] h-[300px] w-[300px] bg-[radial-gradient(circle,rgba(80,40,180,0.35)_0%,transparent_70%)]" />

      <div className="relative z-10">
        <h1 className="mb-3 text-[30px] font-bold leading-9">
          Chinh phục tiếng Anh
          <br />
          <span className="text-[#5468ff]">VSTEP B1 trong 180 ngày</span>
        </h1>
        <p className="mb-6 max-w-[440px] text-sm leading-5 text-[#969faf]">
          Tham gia cùng hàng nghìn học viên đã cải thiện tiếng Anh với lộ trình có cấu trúc — mỗi ngày biết chính xác học gì.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-[#969faf4d] bg-white/[0.03] px-3.5 py-1 text-[13px] text-[#969faf]">Lộ trình 180 ngày</span>
          <span className="rounded-full border border-[#969faf4d] bg-white/[0.03] px-3.5 py-1 text-[13px] text-[#969faf]">Từ vựng SRS</span>
          <span className="rounded-full border border-[#969faf4d] bg-white/[0.03] px-3.5 py-1 text-[13px] text-[#969faf]">Luyện đề VSTEP</span>
        </div>
      </div>

      <FeatureCarousel />

      <div className="relative z-10 grid grid-cols-3 border-t border-[#969faf1f]">
        {STATS.map((stat) => (
          <div className="border-r border-[#969faf1f] py-5 text-center last:border-r-0" key={stat.label}>
            <div className={`mx-auto mb-2 flex h-9 w-9 items-center justify-center border text-base ${stat.gold ? 'border-[#ffa50040] bg-[#ffa5001a]' : 'border-[#5468ff33] bg-[#5468ff1f]'}`}>
              {stat.icon}
            </div>
            <div className={`text-xl font-bold leading-7 ${stat.gold ? 'text-[#ffa500]' : 'text-[#5468ff]'}`}>{stat.number}</div>
            <div className="mt-0.5 text-xs text-[#969faf]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
