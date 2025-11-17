'use client';
import { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(e => console.log('Autoplay prevented:', e));
      video.muted = true;
      video.loop = true;
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&q=80" // Fallback из Unsplash (неон)
        src="https://videos.pexels.com/video-files/855564/855564-1920-1080-30fps.mp4" // Бесплатное видео из Pexels
      />
      <div className="absolute inset-0 bg-dark/50" /> {/* Overlay для читаемости */}
    </div>
  );
}
