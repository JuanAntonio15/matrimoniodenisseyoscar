import { useEffect, useRef, useState } from 'react';

interface UseAudioPlayerResult {
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  toggle: () => void;
}

/**
 * Encapsulates HTML5 <audio> play/pause state. Playback only ever starts
 * from `toggle()`, i.e. a user click — browsers block audible autoplay, so
 * we never attempt to `.play()` on mount.
 */
export function useAudioPlayer(): UseAudioPlayerResult {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);
    return () => {
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => {
        // Playback can still be rejected (e.g. missing/blocked source); keep UI in sync.
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  };

  return { audioRef, isPlaying, toggle };
}
