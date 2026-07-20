import { useEffect, useRef, useState } from 'react';

interface UseAudioPlayerResult {
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  toggle: () => void;
}

const GESTURE_EVENTS = ['pointerdown', 'keydown', 'touchstart'] as const;

/**
 * Encapsulates HTML5 <audio> play/pause state. Tries to start playback as
 * soon as the element mounts; browsers that block unmuted autoplay reject
 * that call, so we fall back to starting on the visitor's very first
 * interaction with the page (click, key press or touch) instead of waiting
 * specifically for the music button.
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

    const removeGestureListeners = () => {
      for (const event of GESTURE_EVENTS) window.removeEventListener(event, startOnGesture);
    };
    const startOnGesture = () => {
      audio
        .play()
        .then(removeGestureListeners)
        .catch(() => {
          // Still blocked (or no valid source yet); listeners stay attached via { once: true }.
        });
    };

    audio.play().catch(() => {
      for (const event of GESTURE_EVENTS) {
        window.addEventListener(event, startOnGesture, { once: true });
      }
    });

    return () => {
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
      removeGestureListeners();
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
