const { expect } = require("@playwright/test");
const { DashboardElements, UpdateModalElements } = require("Elements/Dashboard");
const { DashboardVariables } = require("Variables/Dashboard");



async function getItemRowXpath(page, title) {
    const data = await getTODOListAPI(page.request);
    const matchedItem = data.find(item => item.title === title);
    if (matchedItem.done) {
        return DashboardElements.todoCompleteItemRow
    } else {
        return DashboardElements.todoIncompleteItemRow
    };
}

async function getItemButtonXpath(page, title, buttonType) {
    const data = await getTODOListAPI(page.request);
    let buttonIncompleteXpath, buttonCompleteXpath;
    console.log("TITLE", title);
    const matchedItem = data.find(item => item.title === title);
    switch (buttonType) {
        case 'update':
            buttonIncompleteXpath = DashboardElements.itemIncompleteUpdateButton.replace('$title', title);
            buttonCompleteXpath = DashboardElements.itemCompleteUpdateButton.replace('$title', title);
            break;
        case 'delete':
            buttonIncompleteXpath = DashboardElements.itemIncompleteDeleteButton.replace('$title', title);
            buttonCompleteXpath = DashboardElements.itemCompleteDeleteButton.replace('$title', title);
            break
        case 'complete':
            buttonIncompleteXpath = DashboardElements.itemIncompleteCompleteButton.replace('$title', title);
            buttonCompleteXpath = DashboardElements.itemCompleteButton.replace('$title', title);
            break
        case 'incomplete':
            buttonIncompleteXpath = DashboardElements.itemIncompleteButton.replace('$title', title);
            buttonCompleteXpath = DashboardElements.itemCompleteIncompleteButton.replace('$title', title);
            break
    }
    if (matchedItem.done) {
        return buttonCompleteXpath;
    } else {
        return buttonIncompleteXpath;
    }
}

async function verifyAllItemsTODOListMatchingWithDB(page) {
    await page.waitForSelector(DashboardElements.todoList);

    const todoList = await page.$$(DashboardElements.todoList);
    let itemFound = false;
    let data = await getTODOListAPI(page.request);
    for (let item of data) {
        console.log("Checking item:", item);
        let itemCompleteRow = DashboardElements.todoCompleteItemRow.replace('$title', item.title).replace('$description', item.description);
        let itemIncompleteRow = DashboardElements.todoIncompleteItemRow.replace('$title', item.title).replace('$description', item.description);
        // Check if the item row is visible    
        if (item.done) {
            await page.isVisible(itemCompleteRow)
            itemFound = true;
        } else {
            await page.isVisible(itemIncompleteRow)
            itemFound = true;
        }
        if (!itemFound) {
            throw new Error(`TODO item not found in the list.`);
            break; // Exit the loop if item is found
        }
    }
}

async function verifyItemInTODOList(page, title, description, isDone = false) {
    let itemRow = await getItemRowXpath(page, title)
    itemRow = itemRow.replace('$title', title).replace('$description', description);
    await page.locator(itemRow).scrollIntoViewIfNeeded();
    await expect(page.locator(itemRow)).toBeVisible();
}

async function clickUpdateButton(page, title) {
    const updateButton = await getItemButtonXpath(page, title, 'update');
    await page.waitForSelector(updateButton);
    await page.locator(updateButton).scrollIntoViewIfNeeded();
    await page.click(updateButton)
};

async function clickDeleteButton(page, title) {
    const deleteButton = await getItemButtonXpath(page, title, 'delete');
    await page.waitForSelector(deleteButton);
    await page.locator(deleteButton).scrollIntoViewIfNeeded();
    await page.click(deleteButton)
};

async function clickCompleteButton(page, title) {
    const completeButton = await getItemButtonXpath(page, title, 'complete');
    await page.waitForSelector(completeButton);
    await page.locator(completeButton).scrollIntoViewIfNeeded();
    await page.click(completeButton)
};

async function clickIncompleteButton(page, title) {
    const incompleteButton = await getItemButtonXpath(page, title, 'incomplete');
    await page.waitForSelector(incompleteButton);
    await page.locator(incompleteButton).scrollIntoViewIfNeeded();
    await page.click(incompleteButton)
};

async function verifyItemRemovedFromList(page, title) {
     const data = await getTODOListAPI(page.request);
    const matchedItem = data.find(item => item.title === title);
    let itemRow;
    if (!matchedItem) {
        itemRow=DashboardElements.containText.replace('$text',title); 
        // Item is removed        
        await expect(page.locator(itemRow)).not.toBeVisible(); 
    }else{
        throw new Error(`TODO item "${title}" still exists in the list.`);
    }
};

async function updateItem(page, oldTitle, oldDes, newTitle, newDescription) {
    await page.waitForSelector(UpdateModalElements.updateModal);
    await page.locator(UpdateModalElements.updateTitleInput.replace('$text', oldTitle));
    await page.fill(UpdateModalElements.updateTitleInput.replace('$text', oldTitle), newTitle);
    await page.fill(UpdateModalElements.updateDesInput.replace('$text', oldDes), newDescription);
    await page.click(UpdateModalElements.updateButton);
}

async function getTODOListAPI(request, endpoint = '/api/todos') {
    const apiURL = DashboardVariables.baseAPIURL + endpoint
    const response = await request.get(apiURL);
    // Validate status code
    expect(response.status()).toBe(200);

    // Parse and validate JSON
    let data = await response.json();
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);

    // Optional field checks
    expect(data[0]).toHaveProperty('_id');
    expect(data[0]).toHaveProperty('done');
    expect(data[0]).toHaveProperty('title');
    expect(data[0]).toHaveProperty('description');
    expect(data[0]).toHaveProperty('createdAt');
    expect(data[0]).toHaveProperty('updatedAt');
    return data; // Return data 
}

// Export the function for use in tests
module.exports = {
    verifyItemInTODOList,
    getTODOListAPI,
    verifyAllItemsTODOListMatchingWithDB,
    clickUpdateButton,
    updateItem,
    clickDeleteButton,
    clickIncompleteButton,
    clickCompleteButton,
    verifyItemRemovedFromList,
    getItemRowXpath,
    getItemButtonXpath
};