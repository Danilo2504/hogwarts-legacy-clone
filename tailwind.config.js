/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "bottom-image": "url('/assets/bg-bottom.webp')",
        "video-frame": "url('/assets/video-frame.webp')",
        "trailer-image": "url('/assets/launch-trailer.jpg')",
        "game-panel-1": "url('/assets/game-info-panel-01.jpg')",
        "game-panel-2": "url('/assets/game-info-panel-02.jpg')",
        "game-panel-3": "url('/assets/game-info-panel-03.jpg')",
      },
    },
  },
  plugins: [],
};
