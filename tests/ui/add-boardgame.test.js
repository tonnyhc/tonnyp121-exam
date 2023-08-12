const { test, expect } = require('@playwright/test');

test('Check add boardgame page', async ({ page }) => {
    await page.goto('https://tonnyp121-exam.onrender.com/add-boardgame');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  