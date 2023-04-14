export default class ProductsPage {

    getPageTitle() {
        return cy.get('.title')
    }

    getInventoryList() {
        return cy.get('.inventory_item')
    }


    getShoppingCartBadge() {
        return cy.get('.shopping_cart_badge')
    }

    selectHighestPriceItemAndAddtoCart() {
        let maxPrice = 0;
        // going through the inventory list and finding out the max price of the inventory
        this.getInventoryList().each((item, index) => {
            const priceText = item.find('.inventory_item_price').text();
            const price = parseFloat(priceText.replace('$', ''));
            if (price > maxPrice) {
                maxPrice = price;
            }
        }).then(() => {
            cy.contains(maxPrice).parent('.pricebar').children('.btn_primary').click();
        })
    }

}

