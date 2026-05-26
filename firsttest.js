const { browserSync } = require('vibium');

(async () => {
  const vibe = await browserSync.launch({
    browser: 'chrome',
    chromePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });

  await vibe.go('https://www.google.com');

  console.log('Loaded www.google.com');
})();