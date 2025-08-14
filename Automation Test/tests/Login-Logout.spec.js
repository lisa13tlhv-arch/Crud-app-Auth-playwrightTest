import { test, expect } from '@playwright/test';
import { LoginLogoutVariables } from '../utils/Variables/Login.js';
import { LoginLogoutElements } from '../utils/Elements/Login.js';
import { DashboardElements } from '../utils/Elements/Dashboard.js';
import { LoginPage } from '../utils/Actions/Login.js';
import { takeScreenshot } from '../utils/Actions/common.js';

let login;

test.beforeEach(async ({ page }) => {
  login=new LoginPage(page);
  await login.goto();
});

test.describe('Login function', () => {
  test('Login sucessfully and Dashboard page is shown', async ({page},testInfo) => { 
  await login.login(LoginLogoutVariables.username, LoginLogoutVariables.password);
  await login.assertLoginSuccess();
  takeScreenshot(page, testInfo, testInfo.title);
  });

  test('Logout sucessfully', async ({page},testInfo) => {
    await login.login(LoginLogoutVariables.username, LoginLogoutVariables.password);
     await expect(page.locator(DashboardElements.logoutButton)).toBeVisible();
     await page.click(DashboardElements.logoutButton);
     await page.waitForSelector(LoginLogoutElements.LoginTitle);
     await expect(page).toHaveURL(LoginLogoutVariables.LoginURL);
     takeScreenshot(page, testInfo, testInfo.title);
  });

  test('Login unsucessfully and error is shown', async ({page},testInfo) => {
    await login.login(LoginLogoutVariables.randomEmail, LoginLogoutVariables.randomText);
    await expect(page.locator(DashboardElements.welcomeText)).not.toBeVisible();
    await expect(page.locator(LoginLogoutElements.alertInvalidCredentials)).toBeVisible();
  takeScreenshot(page, testInfo, testInfo.title);
  });
}
);