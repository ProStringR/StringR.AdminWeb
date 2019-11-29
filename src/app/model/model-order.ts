export interface OrderModel {
    comment: string
    customer: Person
    deliveryDate: number
    id: number
    orderStatus: number
    price: number
    racket: RacketOrString
    racketString: RacketOrString
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

export interface RacketOrString {
    brand: string
    cross: number
    gripSize: number
    id: number
    main: number
    model: string
    weight: number
}



