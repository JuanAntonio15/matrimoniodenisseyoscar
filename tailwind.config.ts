import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1C2B45',
        'navy-deep': '#0F1A2C',
        parchment: '#EAD9AE',
        'parchment-soft': '#F1E4C0',
        ivory: '#F8F1DE',
        brass: '#A9863E',
        'brass-light': '#D3B36B',
        cognac: '#BE7A3D',
        oxblood: '#7A3B34',
        espresso: '#3A2A1D',
        ink: '#2B2115',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        'cinzel-decorative': ['"Cinzel Decorative"', 'serif'],
        amatic: ['"Amatic SC"', 'cursive'],
        stamp: ['"Special Elite"', 'cursive'],
        garamond: ['"EB Garamond"', 'serif'],
      },
      keyframes: {
        grainShift: {
          '0%': { transform: 'translate(0,0)' },
          '25%': { transform: 'translate(-1%,1%)' },
          '50%': { transform: 'translate(1%,-1%)' },
          '75%': { transform: 'translate(-1%,-1%)' },
          '100%': { transform: 'translate(0,0)' },
        },
        bgdrift: {
          '0%': { backgroundPosition: '20% 10%, 80% 90%, center' },
          '100%': { backgroundPosition: '35% 25%, 65% 75%, center' },
        },
        spin: { to: { transform: 'rotate(360deg)' } },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scrollcue: {
          '0%': { opacity: '0', transform: 'translate(-50%,-8px)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translate(-50%,10px)' },
        },
        flyacross: {
          '0%': { left: '-4px', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { left: 'calc(100% - 16px)', opacity: '0' },
        },
      },
      animation: {
        grainShift: 'grainShift 1.3s steps(4) infinite',
        bgdrift: 'bgdrift 26s ease-in-out infinite alternate',
        spinSlow: 'spin 90s linear infinite',
        spinGhost: 'spin 140s linear infinite',
        spinDisc: 'spin 6s linear infinite',
        fadeUp: 'fadeUp 1s ease forwards',
        scrollcue: 'scrollcue 1.8s ease-in-out infinite',
        flyacross: 'flyacross 4.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
