export let Routes = {
    PRODUCTS_LIST: {
        url: '/api/products'
    },
    PRODUCT_DETAIL: {
        url: '/api/products/:id',
        params: {
            id: ':id'
        }
    },
    TRACKING: {
        url: '/api/tracking'
    }
};
