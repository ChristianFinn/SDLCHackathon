const { getByTestId, getByRole } = require('@testing-library/react');
const { Builder, By, Key, until } = require('selenium-webdriver');

// https://gemini.google.com/
// generate selenium tests using react javascript for the following bdd step 
// "Given a user accesses the application, 
// When they navigate to the login page, 
// Then they should see input fields for username/email and password, along with a 'Login' button."

async function loginTest() {
    // Replace with the URL of your React application
    const url = 'http://localhost:3000';

    // Launch a new browser session (replace with your desired browser)
    const driver = await new Builder().forBrowser('chrome').build();

    // Open the application URL
    await driver.get(url);

    // Wait for the login page to load (replace with a more specific locator if needed)
    await driver.wait(until.elementLocated(By.id('login-page')), 10000);

    // Find the username/email input field
    const usernameInput = await driver.findElement(By.id('username'));
    expect(usernameInput).toBeTruthy(); // Check if the element exists

    // Find the password input field
    const passwordInput = await driver.findElement(By.id('password'));
    expect(passwordInput).toBeTruthy();

    // Find the login button
    const loginButton = await driver.findElement(By.id('login-button'));
    expect(loginButton).toBeTruthy();

    // Verify button text (optional)
    const buttonText = await loginButton.getText();
    expect(buttonText).toBe('Login');

    // Close the browser session
    await driver.quit();
}

(async () => {
    await loginTest();
})();
