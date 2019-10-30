export interface RacketStringModel {
    brand: string
    color: string
    length: number
    modelName: string
    pricePerRacket: number
    purchaseHistory: PurchaseHistory[]
    stringId: string
    stringPurpose: string
    stringType: string
    thickness: number
}

export interface PurchaseHistory {
    date: number
    length: number
    price: number
}