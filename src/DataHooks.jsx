import { useEffect } from "react"
import { useState } from "react"

const useMensClothing = () => {
    const [mensData, setMensData] = useState(null)
    const [mError, setError] = useState(null)
    const [mLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then((res) => {
                if (res.status >= 400) {
                    throw new Error("server error")
                }
                return res.json()
            })
            .then((res) => {
                setMensData(res)
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false))

    }, [])

    return { mensData, mError, mLoading}

}

const useWomensClothing = () => {
    const [womensData, setWomensData] = useState(null)
    const [wError, setError] = useState(null)
    const [wLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/women's clothing")
            .then((res) => {
                if (res.status >= 400) {
                    throw new Error("server error")
                }
                return res.json()
            })
            .then((res) => setWomensData(res))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))

    }, [])

    return { womensData, wError, wLoading}

}

export {
    useMensClothing,
    useWomensClothing
}