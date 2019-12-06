export class API {

    /**
     * Authentication
     */
    static post_auth = '/api/v1/Authentication';

    /**
     * Customer
     */
    static get_customer = '/api/v1/Customer';
    static get_customer_by_id(customerId): string { return `/api/v1/Customer/${customerId}` };
    static post_customer = '/api/v1/Customer';

    /**
     * Order
     */
    static get_order = '/api/v1/Order';
    static get_order_by_orderId(orderId): string { return `/api/v1/Order/${orderId}` };
    static post_order = '/api/v1/Order';
    static put_order = '/api/v1/Order';
    static get_order_by_shopId(shopId): string { return `/api/v1/order/shop/${shopId}` };
    static get_order_by_shopId_orderStatus(shopId, orderStatus): string { return `/api/v1/Order/shop/${shopId}/${orderStatus}` };

    /**
     * Racket
     */
    static post_racket = '/api​/v1​/Racket';

    /**
     * RacketString
     */
    static get_racketString_by_racketStringId(racketStringId): string { return `/api/v1/RacketString/${racketStringId}` };
    static get_racketString_by_shopId(shopId): string { return `/api/v1/RacketString/shop/${shopId}` };
    static put_racketString = '/api/v1/RacketString';

    /**
     * Shop
     */
    static get_stop_by_shopId(shopId): string { return `/api/v1/Shop/${shopId}` };
    static post_shop = '/api/v1/Shop';
    static post_shop_teamWithMember = '/api/v1/Shop/postTeamWithMember';

    /**
     * Stringer
     */
    static get_stringer = '​/api​/v1​/Stringer';
    static post_stringer = '/api/v1/Stringer';
    static get_stringer_by_stringerId(stringerId): string { return `​/api​/v1​/Stringer​/${stringerId}` };
    static get_stringer_by_shopId(shopId): string { return `/api/v1/Stringer/shop/${shopId}` };

}

export class NonSlashRoutes {
    static mainPage = 'mainPage';
    static economy = 'economy';
    static login = 'login';
    static addstringers = 'addstringers';
    static storageManagement = 'storageManagement';
    static orderOverview = 'orderOverview';
}

export class CustomRoutes {
    static mainPage = '/' + NonSlashRoutes.mainPage;
    static economy = '/' + NonSlashRoutes.economy;
    static login = '/' + NonSlashRoutes.login;
    static addstringers = '/' + NonSlashRoutes.addstringers;
    static storageManagement = '/' + NonSlashRoutes.storageManagement;
    static orderOverview = '/' + NonSlashRoutes.orderOverview;
}