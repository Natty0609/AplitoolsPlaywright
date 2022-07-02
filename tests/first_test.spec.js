import { test, expect } from '@playwright/test';

test.skip('test', async({ page }) => {

    // Go to https://kitner.cz/
    await page.goto('https://kitner.cz/');

    // Click [aria-label="Hlavní menu"] >> text=Akce >> nth=0
    await page.locator('[aria-label="Hlavní menu"] >> text=Akce').first().click();
    await expect(page).toHaveURL('https://kitner.cz/akce-a-setkani/');

    // Click #blog-10-post-4579 >> text=Chci vědět víc
    await page.locator('#blog-10-post-4579 >> text=Chci vědět víc').click();
    await expect(page).toHaveURL('https://kitner.cz/kurz/jak-automatizovat-testy/');

    // Click text=ZDE (6 volných z 10) >> a
    await page.locator('text=ZDE (6 volných z 10) >> a').click();
    await expect(page).toHaveURL('https://docs.google.com/forms/d/e/1FAIpQLSfCf1jOjl4GkT6uUvIkFQtY428m9R-PIGQ-YW4efe13t7h01g/viewform?entry.378567626=Online+kurz+(p%C5%99es+Google+Meet)+%E2%80%93+31.8.+2022+...+8.900,-+K%C4%8D+%2B+DPH');

    // Click div[role="option"]:has-text("Vyberte")
    await page.locator('div[role="option"]:has-text("Vyberte")').click();

    // Click text=Online kurz (přes Google Meet) – 31.8. 2022 17:30–19:00 ... 8.900,- Kč + DPH >> nth=1
    await page.locator('text=Online kurz (přes Google Meet) – 31.8. 2022 17:30–19:00 ... 8.900,- Kč + DPH').nth(1).click();

});