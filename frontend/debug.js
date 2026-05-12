const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Capture console logs
    page.on('console', msg => console.log('PAGE LOG:', msg.type(), msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
    page.on('response', response => {
        if (!response.ok()) {
            console.log('PAGE RES FAILED:', response.url(), response.status());
        }
    });

    console.log('Navigating to http://localhost:5173/');
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
    
    await page.screenshot({ path: 'debug_screenshot.png' });
    console.log('Saved debug_screenshot.png');
    
    // Print the raw HTML
    const html = await page.evaluate(() => document.body.innerHTML);
    console.log('HTML Dump Length:', html.length);
    console.log(html.substring(0, 500));
    
    await browser.close();
})();
