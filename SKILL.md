---
name: ai-motion-studio
description: Generates, animates, and exports programmatic motion graphics videos (Shorts, Reels, Explainer, 3D Product, Data Growth) via AI Motion Studio.
---

# AI Motion Studio Skill

This skill allows AI Agents to automatically generate, preview, and export 60 FPS motion graphics videos.

## Capabilities
1. **Templates Available**:
   - `kinetic`: Fast word-by-word staggered text transitions for TikTok/Reels (9:16).
   - `product`: 3D floating Glassmorphic tech showcase cards for SaaS & product launches (16:9).
   - `stats`: Exponential growth counter with glowing shockwaves and metric boom.
   - `terminal`: Developer typewriter terminal with syntax highlights and compilation steps.

2. **Aspect Ratios**:
   - `9-16`: Vertical (1080x1920) for TikTok, Reels, Shorts.
   - `16-9`: Landscape (1920x1080) for YouTube and presentations.
   - `1-1`: Square (1080x1080) for LinkedIn / Instagram posts.

3. **How the Agent creates a video**:
   - Run: `node generate.js --title "<Title>" --subtitle "<Subtitle>" --template "<Template>" --aspect "<9-16|16-9>"`
   - Open the web studio (`node server.js`) to inspect frames or export WebM/MP4 instantly.
