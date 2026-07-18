import { useState } from 'react';
import { WEDDING_CONFIG } from '../../config/wedding.config';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';

export function MusicPlayer() {
  const { audioRef, isPlaying, toggle } = useAudioPlayer();
  const [showLabel, setShowLabel] = useState(false);

  return (
    <>
      {/* TODO: reemplazar con el MP3 definitivo en public/audio/wedding-song.mp3 */}
      <audio ref={audioRef} src={WEDDING_CONFIG.audioSrc} loop preload="none" />

      <div
        className={`fixed bottom-[34px] right-[82px] z-[1000] whitespace-nowrap rounded-sm border border-brass bg-parchment px-3 py-1.5 font-stamp text-[10.5px] text-navy transition-all duration-300 ${
          showLabel ? 'translate-x-0 opacity-100' : 'translate-x-1.5 opacity-0'
        }`}
      >
        {WEDDING_CONFIG.audioLabel}
      </div>

      <button
        type="button"
        onClick={toggle}
        onMouseEnter={() => setShowLabel(true)}
        onMouseLeave={() => setShowLabel(false)}
        aria-label={isPlaying ? 'Pausar música de fondo' : 'Reproducir música de fondo'}
        aria-pressed={isPlaying}
        className="fixed bottom-5 right-5 z-[1000] flex h-14 w-14 items-center justify-center rounded-full border-[1.5px] border-brass-light bg-navy-deep shadow-[0_8px_20px_-6px_rgba(0,0,0,.5)] transition-transform duration-300 hover:scale-[1.08]"
      >
        <div
          aria-hidden="true"
          className={`absolute inset-0 rounded-full border border-dashed border-brass-light/50 ${
            isPlaying ? 'animate-spinDisc' : ''
          }`}
        />
        {isPlaying ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-brass-light" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" />
            <rect x="14" y="5" width="4" height="14" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-brass-light" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </>
  );
}
