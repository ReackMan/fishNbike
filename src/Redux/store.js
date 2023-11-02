import wheel from "../assets/images/wheel_10-5.jpg";
import tf520 from "../assets/images/tf520.jpg";
import toslon730 from "../assets/images/toslon730.jpg";
import niMhAA2850mah from "../assets/images/ni-mh-aa-2850mah.jpg";
import orderReducer from "./order-reducer";
import productsReducer from "./products-reducer";



let store = {
    _state: {
        products: {
            bikeKits: [
                {
                    headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
                    count: 28490,
                    imgSrc: wheel,
                    titleSize: '28px',
                    id: 'wheel1'
                },
                {
                    headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
                    count: 28490,
                    imgSrc: wheel,
                    titleSize: '28px',
                    id: 'wheel2'
                },
                {
                    headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
                    count: 28490,
                    imgSrc: wheel,
                    titleSize: '28px',
                    id: 'wheel1'
                },
                {
                    headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
                    count: 28490,
                    imgSrc: wheel,
                    titleSize: '28px',
                    id: 'wheel1'
                },
                {
                    headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
                    count: 28490,
                    imgSrc: wheel,
                    titleSize: '28px',
                    id: 'wheel1'
                },
                {
                    headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
                    count: 28490,
                    imgSrc: wheel,
                    titleSize: '28px',
                    id: 'wheel1'
                },
            ],
            sonars: [
                {
                    headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
                    count: 28490,
                    imgSrc: tf520,
                    titleSize: '28px',
                    id: 'sonar1'
                },
                {
                    headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
                    count: 28490,
                    imgSrc: tf520,
                    titleSize: '28px',
                    id: 'sonar1'
                },
                {
                    headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
                    count: 28490,
                    imgSrc: tf520,
                    titleSize: '28px',
                    id: 'sonar1'
                },
                {
                    headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
                    count: 28490,
                    imgSrc: tf520,
                    titleSize: '28px',
                    id: 'sonar1'
                },
                {
                    headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
                    count: 28490,
                    imgSrc: tf520,
                    titleSize: '28px',
                    id: 'sonar1'
                },
                {
                    headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
                    count: 28490,
                    imgSrc: tf520,
                    titleSize: '28px',
                    id: 'sonar1'
                },
            ],
            boats: [
                {
                    headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
                    count: 28490,
                    imgSrc: toslon730,
                    titleSize: '28px',
                    id: 'boat1'
                },
                {
                    headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
                    count: 28490,
                    imgSrc: toslon730,
                    titleSize: '28px',
                    id: 'boat1'
                },
                {
                    headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
                    count: 28490,
                    imgSrc: toslon730,
                    titleSize: '28px',
                    id: 'boat1'
                },
                {
                    headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
                    count: 28490,
                    imgSrc: toslon730,
                    titleSize: '28px',
                    id: 'boat1'
                },
                {
                    headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
                    count: 28490,
                    imgSrc: toslon730,
                    titleSize: '28px',
                    id: 'boat1'
                },
                {
                    headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
                    count: 28490,
                    imgSrc: toslon730,
                    titleSize: '28px',
                    id: 'boat1'
                },
            ],
            accessories: [
                {
                    headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
                    count: 28490,
                    imgSrc: niMhAA2850mah,
                    titleSize: '28px',
                    id: 'accessories1'
                },
                {
                    headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
                    count: 28490,
                    imgSrc: niMhAA2850mah,
                    titleSize: '28px',
                    id: 'accessories1'
                },
                {
                    headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
                    count: 28490,
                    imgSrc: niMhAA2850mah,
                    titleSize: '28px',
                    id: 'accessories1'
                },
                {
                    headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
                    count: 28490,
                    imgSrc: niMhAA2850mah,
                    titleSize: '28px',
                    id: 'accessories1'
                },
                {
                    headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
                    count: 28490,
                    imgSrc: niMhAA2850mah,
                    titleSize: '28px',
                    id: 'accessories1'
                },
                {
                    headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
                    count: 28490,
                    imgSrc: niMhAA2850mah,
                    titleSize: '28px',
                    id: 'accessories1'
                },
            ],
        },
        order: {
            orderItems: [
                {
                    headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
                    count: 28490,
                    imgSrc: wheel,
                    itemDescription:
                        'АКБ: 10,4 Ач\n' +
                        'Размер: 26\"\n' +
                        'PAS-датчик: Без датчика\n' +
                        'Курок газа с LCD-дисплеем: Без курка\n' +
                        'Ручки тормоза 2шт: Без ручек\n'
                    ,
                    id: 'wheel1',
                },
                {
                    headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
                    count: 28490,
                    imgSrc: wheel,
                    titleSize: '28px',
                    id: 'wheel1'
                },
                {
                    headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
                    count: 28490,
                    imgSrc: wheel,
                    titleSize: '28px',
                    id: 'wheel1'
                },
                {
                    headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
                    count: 28490,
                    imgSrc: wheel,
                    titleSize: '28px',
                    id: 'wheel1'
                },
            ],
            orderAmount: 0,
        },


    },
    _callSubscriber(){   },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.order = orderReducer(this._state.order, action);
        this._state.products = productsReducer(this._state.products, action);

        this._callSubscriber(this._state);
    }
}

// export default store;
// window.Storage = store;