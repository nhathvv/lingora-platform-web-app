'use client';

import { useEffect, useState } from 'react';

const SLIDES = [
  {
    icon: '📅',
    title: 'Lộ trình học có cấu trúc',
    desc: 'Mỗi ngày được lên lịch sẵn — từ vựng, ngữ pháp, bài tập. Chỉ cần học 15–20 phút/ngày.',
  },
  {
    icon: '🧠',
    title: 'Từ vựng SRS thông minh',
    desc: 'Thuật toán SM-2 nhắc đúng lúc bạn sắp quên. 2,000+ từ vựng phân theo 10 chủ đề VSTEP.',
  },
  {
    icon: '🎧',
    title: 'Luyện nghe chuẩn VSTEP',
    desc: 'Audio chuẩn format thi thật. 3 dạng bài theo cấu trúc VSTEP B1. Quen đề trước khi thi.',
  },
  {
    icon: '📝',
    title: 'Thi thử toàn phần',
    desc: 'Đề thi 4 kỹ năng đầy đủ. Tự động chấm Nghe & Đọc. Phân tích điểm mạnh/yếu chi tiết.',
  },
];

export function FeatureCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((slide) => (slide + 1) % SLIDES.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [current]);

  const slide = SLIDES[current];

  return (
    <section className="relative z-10 mx-auto w-full max-w-[480px] border border-[#5468ff26] bg-[#0f111e99] px-8 pb-7 pt-10 text-center backdrop-blur-xl">
      <div className="mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center border border-[#5468ff4d] bg-[#5468ff26] text-[28px]">
        {slide.icon}
      </div>
      <h3 className="mb-2.5 text-xl font-bold leading-7">{slide.title}</h3>
      <p className="mx-auto max-w-[340px] text-sm leading-5 text-[#969faf]">{slide.desc}</p>
      <div className="mt-5 flex justify-center gap-1.5">
        {SLIDES.map((item, index) => (
          <button
            aria-label={`Chuyển đến slide ${index + 1}: ${item.title}`}
            className={`h-2 rounded transition-all ${current === index ? 'w-5 bg-[#5468ff]' : 'w-2 bg-[#444950]'}`}
            key={item.title}
            type="button"
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
