/**
 * AI Motion Studio - Automated Video Spec Generator
 * Usage:
 *   node generate.js --title "مرحبًا بكم" --subtitle "فيديو موشن بالذكاء الاصطناعي" --template "kinetic" --aspect "9-16"
 */

const fs = require('fs');
const path = require('path');

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    title: 'الذكاء الاصطناعي يصنع الفيديوهات!',
    subtitle: 'برمجة موشن جرافيك فائق السرعة بالكود وAI',
    badge: '🔥 إطلاق جديد 2026',
    metric: '+850%',
    template: 'kinetic', // kinetic, product, stats, terminal
    aspect: '16-9',     // 16-9, 9-16, 1-1
    duration: 5,
    colorPrimary: '#6366f1',
    colorSecondary: '#ec4899',
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

console.log(`✨ Generated Video Spec successfully!`);
console.log(`📁 File saved to: ${outputPath}`);
console.log(`📺 Parameters:`);
console.log(`   - Template: ${config.template}`);
console.log(`   - Aspect:   ${config.aspect}`);
console.log(`   - Title:    ${config.title}`);
console.log(`   - Duration: ${config.duration}s`);
