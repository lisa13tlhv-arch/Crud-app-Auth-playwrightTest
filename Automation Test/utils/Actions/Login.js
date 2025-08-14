import { expect } from '@playwright/test';
import { LoginLogoutVariables } from '../Variables/Login.js';
import { LoginLogoutElements } from '../Elements/Login.js';
import { DashboardElements } from '../Elements/Dashboard.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(LoginLogoutVariables.LoginURL);
  }

  async login(email, password) {
    await this.page.waitForSelector(LoginLogoutElements.LoginTitle);
    await this.page.fill(LoginLogoutElements.emailInput, email);
    await this.page.fill(LoginLogoutElements.passwordInput, password)
    await this.page.click(LoginLogoutElements.LoginButton);
  }

  async assertLoginSuccess() {    
    await expect(this.page.locator(DashboardElements.welcomeText)).toBeVisible();
  }

  async assertLogoutSuccess() {
    await expect(this.page.locator(DashboardElements.logoutButton)).toBeVisible();
    await this.page.click(DashboardElements.logoutButton);
    await this.page.waitForSelector(LoginLogoutElements.LoginTitle);
    await expect(this.page).toHaveURL(LoginLogoutVariables.LoginURL);    
  }

  async assertLoginFailure() {
    await expect(this.page.locator(LoginLogoutElements.alertInvalidCredentials)).toBeVisible();
    await expect(this.page.locator(DashboardElements.welcomeText)).not.toBeVisible();
  }
}
