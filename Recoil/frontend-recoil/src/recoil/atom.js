
import {atom} from 'recoil'
// import {recoilPersist} from 'recoil-persist'

// const { persistAtom } = recoilPersist()
import { DefaultValue } from 'recoil'

// define this function somewhere
const localStorageEffect = key => ({setSelf, onSet}) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }
    onSet(newValue => {
        if (newValue instanceof DefaultValue) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, JSON.stringify(newValue));
        }
      });
    };

export const userIdState = atom({
  key: 'userIdState',
  default: [],
  effects_UNSTABLE: [
    localStorageEffect('userId_state')
],
})

export const orderState = atom({
  key: 'orderState',
  default: [],
  effects_UNSTABLE: [
    localStorageEffect('product_liststate')
],
})

export const productListState = atom({
    key: 'productListState',
    default: 1,
    effects_UNSTABLE: [
      localStorageEffect('product_liststate')
  ],
})

export const cartState = atom({
    key: 'cartState',
    default: [],
    effects_UNSTABLE: [
        localStorageEffect('cart_state')
    ],
})


export const productById = atom({
    key: 'productById',
    default: [],
    effects_UNSTABLE: [
        localStorageEffect('product_byid')
    ],
})

export const stateProduct = atom({
    key: 'stateProduct',
    default: []
})

    