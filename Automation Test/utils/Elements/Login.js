export class LoginLogoutElements {
  static LoginTitle='//h2[text()="Login"]';
  static emailInput = '//label[text()="Email"]/../input[@type="email"]';
  static passwordInput = '//label[text()="Password"]/../input[@type="password"]';
  static LoginButton = '//button[text()="Login"]';
  static alertInvalidCredentials = '//*[@role="alert" and contains(text(),"Invalid Email or Password!")]';
}