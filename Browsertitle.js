const { browserSync } = require('vibium')

const vibe = browserSync.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox']
})

vibe.go('https://qa.aerfinity.acumenaviation.in/')

const title = vibe.eval(() => document.title)
console.log('Page title is:', title)

vibe.quit()