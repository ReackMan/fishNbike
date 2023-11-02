import wheel from "../assets/images/wheel_10-5.jpg";
import tf520 from "../assets/images/tf520.jpg";
import toslon730 from "../assets/images/toslon730.jpg";
import niMhAA2850mah from "../assets/images/ni-mh-aa-2850mah.jpg";


const INCREASE_COUNT = 'INCREASE-COUNT'
const DECREASE_COUNT = 'DECREASE-COUNT'

export type ProductsItemType = {
    headerText: string
    amount: number
    count: number
    imgSrc: string
    itemDescription: string
    id: string
}


let initialState = {
    bikeKits: [
        {
            headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
            amount: 28490,
            count: 0,
            imgSrc: wheel,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'wheel1'
        },
        {
            headerText: 'Электронабор Велоракета 350Вт (заднее колесо)',
            amount: 28490,
            count: 0,
            imgSrc: wheel,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'wheel2'
        },
        {
            headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
            amount: 28490,
            count: 0,
            imgSrc: wheel,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'wheel3'
        },
        {
            headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
            amount: 28490,
            count: 0,
            imgSrc: wheel,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'wheel4'
        },
        {
            headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
            amount: 28490,
            count: 0,
            imgSrc: wheel,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'wheel5'
        },
        {
            headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
            amount: 28490,
            count: 0,
            imgSrc: wheel,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'wheel6'
        },
    ],
    sonars: [
        {
            headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
            amount: 28490,
            count: 0,
            imgSrc: tf520,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'sonar1'
        },
        {
            headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
            amount: 28490,
            count: 0,
            imgSrc: tf520,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'sonar2'
        },
        {
            headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
            amount: 28490,
            count: 0,
            imgSrc: tf520,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'sonar3'
        },
        {
            headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
            amount: 28490,
            count: 0,
            imgSrc: tf520,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'sonar4'
        },
        {
            headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
            amount: 28490,
            count: 0,
            imgSrc: tf520,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'sonar5'
        },
        {
            headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
            amount: 28490,
            count: 0,
            imgSrc: tf520,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'sonar6'
        },
    ],
    boats: [
        {
            headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
            amount: 28490,
            count: 0,
            imgSrc: toslon730,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'boat1'
        },
        {
            headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
            amount: 28490,
            count: 0,
            imgSrc: toslon730,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'boat2'
        },
        {
            headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
            amount: 28490,
            count: 0,
            imgSrc: toslon730,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'boat3'
        },
        {
            headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
            amount: 28490,
            count: 0,
            imgSrc: toslon730,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'boat4'
        },
        {
            headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
            amount: 28490,
            count: 0,
            imgSrc: toslon730,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'boat5'
        },
        {
            headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
            amount: 28490,
            count: 0,
            imgSrc: toslon730,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'boat6'
        },
    ],
    accessories: [
        {
            headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
            amount: 28490,
            count: 0,
            imgSrc: niMhAA2850mah,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'accessories1'
        },
        {
            headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
            amount: 28490,
            count: 0,
            imgSrc: niMhAA2850mah,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'accessories2'
        },
        {
            headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
            amount: 28490,
            count: 0,
            imgSrc: niMhAA2850mah,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'accessories3'
        },
        {
            headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
            amount: 28490,
            count: 0,
            imgSrc: niMhAA2850mah,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'accessories4'
        },
        {
            headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
            amount: 28490,
            count: 0,
            imgSrc: niMhAA2850mah,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'accessories5'
        },
        {
            headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
            amount: 28490,
            count: 0,
            imgSrc: niMhAA2850mah,
            itemDescription:
                'АКБ: 10,4 Ач\n' +
                'Размер: 26\"\n' +
                'PAS-датчик: Без датчика\n' +
                'Курок газа с LCD-дисплеем: Без курка\n' +
                'Ручки тормоза 2шт: Без ручек\n'
            ,
            id: 'accessories6'
        },
    ],
}

interface ProductsActionTypes {
    type: 'INCREASE-COUNT' | 'DECREASE-COUNT'
    // type: any
    newOrder: ProductsItemType
    choice: string
}

const productsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREASE_COUNT: {
            //BikeKits
            if (action.choice === 'Велонаборы') {
                const index = state.bikeKits.indexOf(action.newOrder)
                state.bikeKits.splice(index,1)
                action.newOrder.count = action.newOrder.count + 1
                return {...state, bikeKits: [...state.bikeKits, action.newOrder]}
            //Sonars
            } else if (action.choice === 'Эхолоты') {
                const index = state.sonars.indexOf(action.newOrder)
                state.sonars.splice(index,1)
                action.newOrder.count = action.newOrder.count + 1
                return {...state, sonars: [...state.sonars, action.newOrder]}
            //Boats
            } else if (action.choice === 'Кораблики') {
                const index = state.boats.indexOf(action.newOrder)
                state.boats.splice(index,1)
                action.newOrder.count = action.newOrder.count + 1
                return {...state, boats: [...state.boats, action.newOrder]}
            //Accessories
            } else if (action.choice === 'Аксессуары') {
                const index = state.accessories.indexOf(action.newOrder)
                state.accessories.splice(index,1)
                action.newOrder.count = action.newOrder.count + 1
                return {...state, accessories: [...state.accessories, action.newOrder]}
            //AllProducts
            } else {
                return {...state, bikeKits: [...state.bikeKits, action.newOrder]}
            }

        }
        case DECREASE_COUNT: {
            //BikeKits
            if (action.choice === 'Велонаборы') {
                const index = state.bikeKits.indexOf(action.newOrder)
                state.bikeKits.splice(index,1)
                action.newOrder.count = action.newOrder.count - 1
                return {...state, bikeKits: [...state.bikeKits, action.newOrder]}
                //Sonars
            } else if (action.choice === 'Эхолоты') {
                const index = state.sonars.indexOf(action.newOrder)
                state.sonars.splice(index,1)
                action.newOrder.count = action.newOrder.count - 1
                return {...state, sonars: [...state.sonars, action.newOrder]}
                //Boats
            } else if (action.choice === 'Кораблики') {
                const index = state.boats.indexOf(action.newOrder)
                state.boats.splice(index,1)
                action.newOrder.count = action.newOrder.count - 1
                return {...state, boats: [...state.boats, action.newOrder]}
                //Accessories
            } else if (action.choice === 'Аксессуары') {
                const index = state.accessories.indexOf(action.newOrder)
                state.accessories.splice(index,1)
                action.newOrder.count = action.newOrder.count - 1
                return {...state, accessories: [...state.accessories, action.newOrder]}
                //AllProducts
            } else {
                return {...state, bikeKits: [...state.bikeKits, action.newOrder]}
            }
        }
        default:
            return state
    }
}

export const increaseCountCreator = (newOrder: ProductsItemType | undefined, choice: string) =>
    ({type: INCREASE_COUNT, newOrder})

export const decreaseCountCreator = (newOrder: ProductsItemType | undefined, choice: string) =>
    ({type: DECREASE_COUNT, newOrder})


export default productsReducer