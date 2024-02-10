import { atom, selector } from "recoil";

const womensDataAtom = atom({
    key: "womensDataAtom",
    default: []
})

const mensDataAtom = atom({
    key: "mensDataAtom",
    default: []
})

const productListSelector = selector({
    key: "productListSelector",
    get: ({get}) => {
        const data = get(mensDataAtom).concat(get(womensDataAtom))
        return data
    }
})

const currProductAtom = atom({
    key: "currProductAtom",
    default: {}
})

const cartItemsAtom = atom({
    key: "cartItemsAtom",
    default: []
})

export {
    womensDataAtom,
    mensDataAtom,
    productListSelector,
    currProductAtom,
    cartItemsAtom
}