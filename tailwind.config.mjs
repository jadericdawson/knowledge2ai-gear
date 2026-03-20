/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        k2: {
          bg:      '#060a18',  // main background — matches knowledge2-ai.com
          card:    '#0d1124',  // card/panel background
          panel:   '#111827',  // lighter panel
          border:  '#1e2d4d',  // border color
          primary: '#06b6d4',  // teal/cyan — actual K2AI brand color
          hover:   '#0891b2',  // primary hover (cyan-600)
          light:   '#22d3ee',  // primary light / text links (cyan-400)
          blue:    '#3b82f6',  // secondary blue
          bluelt:  '#60a5fa',  // secondary blue light
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
