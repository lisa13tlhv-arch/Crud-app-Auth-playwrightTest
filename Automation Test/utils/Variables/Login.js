export class LoginLogoutVariables {
    static LoginURL= '/login'; 
    static username = 'admin@example.com'
    static password = 'yourpassword'; 
    static randomText = Math.random().toString(36).substring(2, 10);
    static randomEmail = this.randomText + '@example.com';
}