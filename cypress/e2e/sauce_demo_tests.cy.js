import LoginPage from '../pageObject/LoginPage'
import ProductsPage from '../pageObject/ProductsPage'

describe('Sauce Demo Tests', () => {
    const loginPage = new LoginPage()
    const productsPage = new ProductsPage()
    let userData

    beforeEach(() => {
        // Navigate to the Saucedemo website
        cy.visit('/');
        //get the login details
        cy.fixture('loginDetails').then((userDetails) => {
            userData = userDetails;
        });

    })

    it('Should login successfully', () => {
        loginPage.assertLoginPage()
        loginPage.login(userData.username, userData.password)
        productsPage.getPageTitle().should('be.visible')
    })

    it('Should add highest priced item to the cart', () => {
        //login to the application
        loginPage.login(userData.username, userData.password)
        //assert product page is visible
        productsPage.getPageTitle().should('be.visible')
        //find the item with the higest price and add it to the cart
        productsPage.selectHighestPriceItemAndAddtoCart()
        // Assert that the cart badge now shows that there is 1 item in the cart
        productsPage.getShoppingCartBadge().should('have.text', '1')
    })


})
