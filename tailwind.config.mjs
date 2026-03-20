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
          primary: '#7c3aed',  // violet brand — theme-color of K2AI
          hover:   '#6d28d9',  // primary hover
          light:   '#a78bfa',  // primary light / text links
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
