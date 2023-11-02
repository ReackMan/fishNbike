import wheel from "../assets/images/wheel_10-5.jpg";
import {ProductsItemType} from "./products-reducer";

const INCREASE_AMOUNT = 'INCREASE-AMOUNT'
const DECREASE_AMOUNT = 'DECREASE-AMOUNT'
const INCREASE_COUNT = 'INCREASE-COUNT'
const DECREASE_COUNT = 'DECREASE-COUNT'
const SET_AMOUNT = 'SET-AMOUNT'
const ADD_ORDER = 'ADD-ORDER'
const DELETE_ORDER = 'DELETE-ORDER'

// export type OrderItemType = {
//     headerText: string
//     amount: number
//     imgSrc: string
//     count: number
//     itemDescription: string
//     id: string
// }

interface StateType{
    orderAmount: number | never
    orderItems: ProductsItemType[]
}

let initialState: StateType = {
    orderAmount: 0,
    orderItems: [
        // {
        //     headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
        //     amount: 28490,
        //     imgSrc: wheel,
        //     count: 1
        //     itemDescription:
        //         'АКБ: 10,4 Ач\n' +
        //         'Размер: 26\"\n' +
        //         'PAS-датчик: Без датчика\n' +
        //         'Курок газа с LCD-дисплеем: Без курка\n' +
        //         'Ручки тормоза 2шт: Без ручек\n'
        //     ,
        //     id: 'wheel1',
        // },
        // {
        //     headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
        //     count: 28490,
        //     imgSrc: wheel,
        //     itemDescription:
        //         'АКБ: 10,4 Ач\n' +
        //         'Размер: 26\"\n' +
        //         'PAS-датчик: Без датчика\n' +
        //         'Курок газа с LCD-дисплеем: Без курка\n' +
        //         'Ручки тормоза 2шт: Без ручек\n'
        //     ,
        //     id: 'wheel1'
        // },
        // {
        //     headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
        //     count: 28490,
        //     imgSrc: wheel,
        //     itemDescription:
        //         'АКБ: 10,4 Ач\n' +
        //         'Размер: 26\"\n' +
        //         'PAS-датчик: Без датчика\n' +
        //         'Курок газа с LCD-дисплеем: Без курка\n' +
        //         'Ручки тормоза 2шт: Без ручек\n'
        //     ,
        //     id: 'wheel1'
        // },
        // {
        //     headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
        //     count: 28490,
        //     imgSrc: wheel,
        //     itemDescription:
        //         'АКБ: 10,4 Ач\n' +
        //         'Размер: 26\"\n' +
        //         'PAS-датчик: Без датчика\n' +
        //         'Курок газа с LCD-дисплеем: Без курка\n' +
        //         'Ручки тормоза 2шт: Без ручек\n'
        //     ,
        //     id: 'wheel1'
        // },
    ],
}



interface OrderActionTypes {
    type: 'INCREASE-AMOUNT' | 'DECREASE-AMOUNT' | 'SET-AMOUNT' | 'ADD-ORDER' | 'DELETE-ORDER' | 'ADD-ORDER-COUNT' |
        'INCREASE-COUNT' | 'DECREASE-COUNT'
    // type: any
    increaseAmount: number | undefined
    decreaseAmount: number
    initialAmount: number
    orderCount: number
    orderId: string
    newOrder: ProductsItemType
}

const orderReducer = (state = initialState, action: OrderActionTypes) => {
    switch (action.type) {
        case INCREASE_AMOUNT: {
            return {...state, orderAmount: action.increaseAmount}
        }
        case DECREASE_AMOUNT: {
            return {...state, orderAmount: action.decreaseAmount}
        }
        case INCREASE_COUNT: {
            const index = state.orderItems.indexOf(action.newOrder)
            state.orderItems.splice(index,1)
            // console.log(state.orderItems)
            action.newOrder.count = action.newOrder.count + 1
            return {...state, orderItems: [...state.orderItems, action.newOrder]}
        }
        case DECREASE_COUNT: {
            const index = state.orderItems.indexOf(action.newOrder)
            state.orderItems.splice(index,1)
            // console.log(state.orderItems)
            action.newOrder.count = action.newOrder.count - 1
            return {...state, orderItems: [...state.orderItems, action.newOrder]}
        }
        case SET_AMOUNT: {
            return {...state, orderAmount: action.initialAmount}
        }
        case ADD_ORDER: {
            if (state.orderItems.find(item => item.id === action.newOrder.id)) {
                const index = state.orderItems.indexOf(action.newOrder)
                state.orderItems.splice(index,1)
                // console.log(state.orderItems)
                action.newOrder.count = action.newOrder.count + 1
                // console.log(action.newOrder);

                return {...state, orderItems: [...state.orderItems, action.newOrder]}
            } else {
                return {...state, orderItems: [...state.orderItems, action.newOrder]}
            }
        }
        case DELETE_ORDER: {
            return {...state, orderItems: state.orderItems.filter(item => item.id != action.orderId)}
        }
        default:
            return state
    }
}

export const increaseAmountCreator = (increaseAmount: number | undefined) =>
    ({type: INCREASE_AMOUNT, increaseAmount})

export const decreaseAmountCreator = (decreaseAmount: number) =>
    ({type: DECREASE_AMOUNT, decreaseAmount})

export const increaseCountCreator = (newOrder: ProductsItemType | undefined) =>
    ({type: INCREASE_COUNT, newOrder})

export const decreaseCountCreator = (newOrder: ProductsItemType | undefined) =>
    ({type: DECREASE_COUNT, newOrder})

export const setOrderAmountCreator = (initialAmount: number) =>
    ({type: SET_AMOUNT, initialAmount})

export const addOrderCreator = (newOrder: ProductsItemType | undefined) =>
    ({type: ADD_ORDER, newOrder})

export const deleteOrderCreator = (orderId: string) =>
    ({type: DELETE_ORDER, orderId})

export default orderReducer