import { test, chromium, expect } from '@playwright/test';

test.skip('type', async({ page }) => {

    const browser = await chromium.launch({ slowMo: 1000 });
    //     const browser = await chromium.launch();
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLScnf5N_bWaMoCYEJHlD_Rs70Vnl9Y9kMp1O5UwVYVB5-Vyq-g/viewform');
    const email = await page.locator(' #mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(3) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input');
    await email.type('ntahova@gmail.com', { delay: 100 });
    await browser.close();



});