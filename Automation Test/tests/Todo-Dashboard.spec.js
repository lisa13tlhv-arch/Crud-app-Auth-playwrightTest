import { test } from '@playwright/test';
import { DashboardElements } from '../utils/Elements/Dashboard.js';
import { DashboardVariables } from '../utils/Variables/Dashboard.js';
import { takeScreenshot, setupTest,verifyStatusItemUpdated } from '../utils/Actions/common.js';
import { verifyAllItemsTODOListMatchingWithDB, verifyItemInTODOList, clickUpdateButton
    , updateItem,clickDeleteButton,verifyItemRemovedFromList, clickCompleteButton, clickIncompleteButton} from '../utils/Actions/CRUD_action.js';

const updateText = 'Updated Todo';
let newTitle, newDescription, updatedTitle, updatedDescription;

test.beforeEach(async ({ page }) => {
    setupTest(page);
});

test.describe.serial('Create/Update/Delete TODOs function', () => {
    test('Create TODO sucessfully', async ({ page }, testInfo) => {
        newTitle = DashboardVariables.testTitle
        newDescription = DashboardVariables.testDescription;
        await page.fill(DashboardElements.titleInput, newTitle);
        await page.fill(DashboardElements.descriptionInput, newDescription);
        await page.click(DashboardElements.addButton);
        await verifyItemInTODOList(page, newTitle, newDescription);
        takeScreenshot(page, testInfo, testInfo.title);
    });

    test('Update TODO sucessfully', async ({ page }, testInfo) => {
        updatedDescription = newDescription + updateText
        updatedTitle = newTitle + updateText;
        await clickUpdateButton(page, newTitle);
        await updateItem(page, newTitle, newDescription, updatedTitle, updatedDescription);
        await verifyItemInTODOList(page, updatedTitle, updatedDescription);
        takeScreenshot(page, testInfo, testInfo.title);
    });

    test('Verify TODO List matches with DB', async ({ page }, testInfo) => {
        await verifyAllItemsTODOListMatchingWithDB(page);
        takeScreenshot(page, testInfo, testInfo.title);
    });

    test('Mark Complete TODO sucessfully', async ({ page }, testInfo) => {
        await clickCompleteButton(page, updatedTitle);
        await verifyStatusItemUpdated(page, updatedTitle, true)
        takeScreenshot(page, testInfo, testInfo.title);
    });

    test('Mark Incomplete TODO sucessfully', async ({ page }, testInfo) => {
        await clickIncompleteButton(page, updatedTitle);
        await verifyStatusItemUpdated(page, updatedTitle, false)
        takeScreenshot(page, testInfo, testInfo.title);
    });

    test('Delete TODO sucessfully', async ({ page }, testInfo) => {
        await clickDeleteButton(page, updatedTitle);
        await verifyItemRemovedFromList(page, updatedTitle);
        takeScreenshot(page, testInfo, testInfo.title);
    });
}
);
