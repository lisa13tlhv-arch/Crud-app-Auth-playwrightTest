const fs = require('fs');
const path = require('path');
const { LoginLogoutVariables } = require('Variables/Login');
const { LoginPage } = require('./Login');
const { getTODOListAPI, getItemRowXpath } = require('./CRUD_action');
const { DashboardElements } = require('Elements/Dashboard');
let login

async function setupTest(page) {
  // Setup code for the test environment
  console.log("Setting up test environment...");
  login = new LoginPage(page);
  await login.goto();
  await login.login(LoginLogoutVariables.username, LoginLogoutVariables.password);
  await login.assertLoginSuccess();
}

async function takeScreenshot(page, testInfo, title) {
  const screenshotBuffer = await page.screenshot();
  await testInfo.attach(title, {
    body: screenshotBuffer,
    contentType: 'image/png',
  });

  // Optional: Save to disk too
  const fileName = `${title.replace(/\s+/g, '_')}_${Date.now()}.png`;
  const filePath = path.join(testInfo.outputDir, fileName);
  fs.writeFileSync(filePath, screenshotBuffer);
}

async function verifyStatusItemUpdated(page, title, isComplete) {
   const data = await getTODOListAPI(page.request);
    const matchedItem = data.find(item => item.title === title);
  if(matchedItem.done === isComplete){
     isComplete ? await page.isVisible(DashboardElements.todoCompleteItemRow.replace('$title', title)) :
      await page.isVisible(DashboardElements.todoIncompleteItemRow.replace('$title', title));
  }else{
    throw new Error(`Item status not changes: expected ${isComplete}, but found ${matchedItem.done}`);
  }
}

// Export the function for use in tests
module.exports = {
  takeScreenshot,
  setupTest,
  verifyStatusItemUpdated
};