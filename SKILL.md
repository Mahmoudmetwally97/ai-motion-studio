---
name: ai-motion-studio
description: Generates, animates, and exports viral motion graphics reels (Reelzatk & Motion Skills Edition) via AI Motion Studio.
---

# AI Motion Studio Pro (Reelzatk & 20 Motion Skills Edition)

This skill allows AI Agents to automatically generate, preview, and export 60 FPS viral reels and motion graphics videos with synchronized karaoke captions, sound effects, and multi-scene storytelling.

## Architecture: 3-Scene Viral Storytelling
Every viral reel is structured into 3 psychological phases:
1. **The Hook (0% - 28%)**: Eye-catching alert badge + high-contrast shocking statement + whoosh sound effect.
2. **The Value / Body (28% - 74%)**: High-energy word-by-word karaoke highlight with neon pop badges + floating 3D emoji bounces + pop sounds.
3. **The Call to Action (74% - 100%)**: Pulsing interactive button + chime sound + clear viewer instruction (save, comment, buy).

## Available Templates
- `reels-faceless`: The premier Reelzatk-style storytelling reel for content creators and brands.
- `reels-product`: 3D glassmorphic product showcase with discount badges and sequential feature bullets.
- `reels-wisdom`: Elegant Islamic/Arabic calligraphy (Amiri font) with subtle cinematic camera push and obsidian gold shimmer.
- `reels-karaoke`: Rapid-fire word highlighting with neon badges and audio waveforms.
- `stats`: Dramatic metric boom counter with shockwave celebrations.
- `terminal`: Developer/AI coding terminal with live typing and build success indicators.

## Environments & Caption Styles
- **Environments**: `aurora` (cyber purple/pink), `studio` (executive dark), `royal` (obsidian gold), `grid` (high-tech).
- **Caption Styles**: `neon-yellow` (viral badge), `emerald-green` (growth), `cyber-pink` (modern), `pure-white` (cinematic).

## CLI Generation Command
```bash
node generate.js --template "reels-faceless" --hook "⚠️ سر خطير في 2026!" --title "الذكاء الاصطناعي هيصنعلك كل فيديوهاتك" --cta "احفظ الفيديو وشاركنا رأيك" --env "aurora"
```
