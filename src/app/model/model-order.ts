// TODO Mangler Paid og OrderHistory
export interface OrderModel {
    comment: string
    customer: Person
    deliveryDate: number
    id: number
    orderStatus: number
    price: number
    racket: Racket
    racketString: RacketString
    stringer: Person
    tensionHorizontal: number
    tensionVertical: number
}

export interface Person {
    firstName: string
    lastName: string
    email: string
    phone: string
}

export interface Racket {
    brand: string
    cross: number
    gripSize: number
    id: number
    main: number
    model: string
    weight: number
}

export interface RacketString {
    id: number
    brand: string
    model: string
    type: string
    thickness: string
    purpose: string
    color: string
}



