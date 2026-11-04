/**
 * AI Motion Studio Pro - Video Spec Generator (Reelzatk & Motion Skills Edition)
 * Usage:
 *   node generate.js --template "reels-faceless" --hook "⚠️ سر خطير!" --title "الذكاء الاصطناعي يصنع الفيديوهات" --cta "احفظ الفيديو وشاركه" --env "aurora"
 */

const fs = require('fs');
const path = require('path');

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    template: 'reels-faceless', // reels-faceless, reels-product, reels-wisdom, reels-karaoke, stats, terminal
    aspect: '9-16',            // 9-16 (Reels/Shorts), 16-9, 1-1
    hook: '⚠️ سر خطير في 2026!',
    title: 'الذكاء الاصطناعي هيصنعلك كل فيديوهاتك في ثواني معدودة',
    cta: 'احفظ الفيديو وشاركنا رأيك بالتعليقات 💾',
    price: 'خصم 40% لفترة محدودة ⚡',
    duration: 6,
    env: 'aurora',             // aurora, studio, royal, grid
    captionStyle: 'neon-yellow', // neon-yellow, emerald-green, cyber-pink, pure-white
    colorPrimary: '#6366f1',
    colorSecondary: '#ec4899',
    colorAccent: '#facc15',
    output: 'video-spec.json'
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const val = args[i + 1];
      if (val && !val.startsWith('--')) {
        options[key] = val;
        i++;
      }
    }
  }

  return options;
}

const config = parseArgs();
const outputPath = path.resolve(__dirname, config.output);

fs.writeFileSync(outputPath, JSON.stringify(config, null, 2), 'utf-8');

console.log(`✨ Generated Reelzatk-Style Video Spec successfully!`);
console.log(`📁 File saved to: ${outputPath}`);
console.log(`📺 Parameters:`);
console.log(`   - Template:     ${config.template}`);
console.log(`   - Aspect:       ${config.aspect}`);
console.log(`   - Environment:  ${config.env}`);
console.log(`   - CaptionStyle: ${config.captionStyle}`);
console.log(`   - Hook:         ${config.hook}`);
console.log(`   - Duration:     ${config.duration}s`);
