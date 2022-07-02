import { test, chromium, expect } from '@playwright/test';

test.skip('second', async({ page }) => {

    const browser = await chromium.launch({ slowMo: 100 });
    // const browser = await chromium.launch();
    await page.goto('https://kitner.cz/');
    await browser.close();



});