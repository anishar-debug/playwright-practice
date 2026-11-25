const { test, expect } = require('@playwright/test');
test('Complete student registration', async ({ page }) => {

    // Arrange
    await page.goto('file:///C:/Users/anisha.r_inapp/playwright-practice/index.html');

    // Act
    await page.getByLabel('Student Name').fill('Anisha');
    await page.getByLabel('Email').fill('anisha@gmail.com');
    await page.getByRole('radio', { name: 'Female' }).check();
    await page.getByLabel('Course').selectOption('Python');
    await page.getByLabel('I agree to the terms').check();
    await page.getByRole('button', { name: 'Register Student' }).click();

    // Assert
    await expect(page.getByLabel('Student Name')).toHaveValue('Anisha');
    await expect(page.getByLabel('Email')).toHaveValue('anisha@gmail.com');
    await expect(page.getByRole('radio', { name: 'Female' })).toBeChecked();
    await expect(page.getByLabel('Course')).toHaveValue('Python');
    await expect(page.getByLabel('I agree to the terms')).toBeChecked();

});