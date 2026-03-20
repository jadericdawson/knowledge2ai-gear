# k2ai.shop — Site Design Template

> **"Love the landing page theme — keep it up!"** — Jaderic, 2026-03-20

## Brand Colors (tailwind.config.mjs)
```js
k2: {
  bg:      '#060a18',  // body background (very dark navy)
  card:    '#0d1124',  // card / panel background
  panel:   '#111827',  // slightly lighter surface
  border:  '#1e2d4d',  // border color
  primary: '#06b6d4',  // teal/cyan — actual K2AI brand (NOT violet)
  hover:   '#0891b2',  // primary hover state
  light:   '#22d3ee',  // links, light text, stars
  blue:    '#3b82f6',  // gradient complement
  bluelt:  '#60a5fa',
}
```

## Typography
- Font: Inter (Google Fonts)
- Hero h1: `text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight`
- Section h2: `text-3xl sm:text-4xl font-extrabold`
- Page h2: `text-2xl font-bold text-white`
- Body: `text-slate-400 leading-relaxed`
- Labels: `text-xs font-bold text-k2-primary uppercase tracking-widest`

## Gradient Text (hero accent)
```html
<span class="gradient-text">Guard Drones.</span>
<style>
.gradient-text {
  background: linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
```

## Animated Background (hero orbs)
```html
<div class="orb orb-1"></div>  <!-- top-right teal glow -->
<div class="orb orb-2"></div>  <!-- bottom-left blue glow -->
<div class="hero-grid"></div>  <!-- subtle dot/line grid at 4% opacity -->
<style>
.orb { position:absolute; border-radius:50%; filter:blur(80px);
       animation: orbFloat 8s ease-in-out infinite; pointer-events:none; }
.orb-1 { width:500px; height:500px;
         background: radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%);
         top:-100px; right:-100px; }
.orb-2 { width:350px; height:350px;
         background: radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%);
         bottom:50px; left:10%; animation-delay:-3s; }
@keyframes orbFloat {
  0%,100% { transform: translate(0,0) scale(1); }
  33%     { transform: translate(20px,-15px) scale(1.05); }
  66%     { transform: translate(-10px,10px) scale(0.97); }
}
.hero-grid {
  background-image:
    linear-gradient(rgba(6,182,212,1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.04;
}
</style>
```

## Entrance Animation
```html
<div class="fade-up" style="animation-delay:80ms">...</div>
<style>
.fade-up { animation: fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) both; }
@keyframes fadeInUp {
  from { opacity:0; transform:translateY(28px); }
  to   { opacity:1; transform:translateY(0); }
}
</style>
```
Stagger delays: 0 / 60 / 100 / 160 / 240 / 320ms

## Card Hover (lift + teal glow)
```
hover:-translate-y-1.5
hover:border-k2-primary/50
hover:shadow-[0_24px_64px_rgba(0,0,0,0.5),0_0_0_1px_rgba(6,182,212,0.15)]
transition-all duration-400
```

## CTA Button (primary)
```
bg-k2-primary hover:bg-k2-hover text-white font-bold px-6 py-3 rounded-xl
transition-all duration-300
hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:-translate-y-0.5
```

## Section Header Pattern
```html
<div class="text-xs font-bold text-k2-primary uppercase tracking-widest mb-2">Section Label</div>
<h2 class="text-3xl sm:text-4xl font-extrabold text-white">Main Heading</h2>
```

## Callout / Info Box
```html
<div class="rounded-xl border border-k2-primary/20 bg-k2-card overflow-hidden">
  <div class="h-1 bg-gradient-to-r from-k2-primary to-k2-blue"></div>
  <div class="p-6">...</div>
</div>
```

## Warning Box
```html
<div class="rounded-xl border border-amber-500/25 bg-amber-900/10 p-5 text-sm flex items-start gap-3">
  <span class="text-amber-400 text-lg flex-shrink-0">⚠</span>
  <div class="text-slate-400">...</div>
</div>
```

## Logo Files
- `/public/favicon.png` — K2AI hexagon (tab icon)
- `/public/k2-symbol.png` — K2AI hexagon only (inline use)
- `/public/k2-logo.png` — Full wordmark: hexagon + "KNOWLEDGE 2 AI"

## Design Principles (from user feedback)
1. **NOT tiled** — break the grid, use asymmetric/varied layouts
2. **Motion** — entrance animations on load, hover lift + glow on all cards
3. **Full screen** — hero sections use min-h-[92vh], max-w-5xl or max-w-6xl
4. **Build centric** — teach the build first, products are what you need to build it
5. **No approximate prices** — link to Amazon, user sees live price there
6. **Both FPV and shopping pages** — build guides teach; shopping pages can be product-heavy
7. **Remove off-brand content** — farm-tech and sbir-tools removed (don't fit K2AI brand)
