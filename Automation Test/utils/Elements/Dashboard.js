export class DashboardElements {
  static welcomeText = '//h2[contains(text(),"WelCome BacK")]';
  static AddToDoTitle = '//h3[text()="Add ToDo"]';
  static logoutButton = '//button[text()="Logout"]';
  static titleInput = '//label[text()="Title"]/../input';
  static descriptionInput = '//label[text()="Description"]/../textarea';
  static addButton = '//button[text()="ADD"]';
  static containText='//*[contains(text(),"$text")]';
  static todoList = '//h3[text()="To Do List"]/ancestor::*[1]//tbody/tr';
  static todoIncompleteItemRow = '//tr//td[text()="$title"]/following-sibling::td[text()="$description"]';
  static todoCompleteItemRow = '//tr//td//strike[text()="$title"]/../following-sibling::td//strike[text()="$description"]';
  
  static itemIncompleteUpdateButton = '//tr//td[text()="$title"]/following-sibling::td//button//*[contains(@class,"edit")]';
  static itemIncompleteDeleteButton = '//tr//td[text()="$title"]/following-sibling::td//button//*[contains(@class,"trash")]';
  static itemIncompleteCompleteButton = '//tr//td[text()="$title"]/following-sibling::td//button//*[contains(@class,"check")]';
  static itemIncompleteButton = '//tr//td[text()="$title"]/following-sibling::td//button//*[contains(@class,"times")]';
  
  static itemCompleteUpdateButton = '//tr//td//strike[text()="$title"]/../following-sibling::td//button//*[contains(@class,"edit")]';
  static itemCompleteDeleteButton = '//tr//td//strike[text()="$title"]/../following-sibling::td//button//*[contains(@class,"trash")]';
  static itemCompleteButton = '//tr//td//strike[text()="$title"]/../following-sibling::td//button//*[contains(@class,"check")]';
  static itemCompleteIncompleteButton = '//tr//td//strike[text()="$title"]/../following-sibling::td//button//*[contains(@class,"times")]';
}

export class UpdateModalElements {
  static updateTitleInput = '//label[text()="Title"]/../input[@value="$text"]';
  static updateDesInput = '//label[text()="Description"]/../textarea[text()="$text"]';
  static updateModal = '//*[contains( @class,"modal") and text()="Update To Do"]'
  static updateButton = '//button[text()="UPDATE"]';
}