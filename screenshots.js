const fs = require('fs')
const { exec } = require('child_process')
const { browserSync } = require('vibium')

const vibe = browserSync.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox']
})

vibe.go('https://www.google.com')
console.log('Loaded google.com')

const png = vibe.screenshot()
fs.writeFileSync('screenshot.png', png)
console.log('Saved screenshot.png')

exec('start screenshot.png')