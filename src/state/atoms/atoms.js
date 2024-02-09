import { atom, selector } from "recoil";
import { useWomensClothing } from "../../DataHooks";

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

export {
    womensDataAtom,
    mensDataAtom,
    productListSelector
}