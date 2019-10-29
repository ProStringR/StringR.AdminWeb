export interface OrderModel {
    comment: string
    customerId: string
    deliveryDate: number
    orderHistory: OrderHistory[]
    orderId: string
    orderStatus: string
    paid: boolean
    price: number
    racketId: string
    racketType: string
    shopId: string
    stringId: string
    stringerId: string
    tensionHorizontal: number
    tensionVertical: number
    timePlaced: number
}

export interface OrderHistory {
    date: number
    orderStatus: string
    paid: boolean
}


