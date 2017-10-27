const fs = require('fs')

;[
  'pspdfkit.wasm.js',
  'pspdfkit.wasm',
  'pspdfkit.asm.js',
  'pspdfkit.asm.js.mem',
  'pspdfkit.css'
].forEach(file => {
  fs.writeFileSync(`./public/${file}`, fs.readFileSync(`./node_modules/pspdfkit/dist/${file}`))
})
