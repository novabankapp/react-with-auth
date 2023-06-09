import {useState} from 'react'


export const useLocalStorage = <T>(key: string) => {
    const getItem = <T>() =>{
        const itemString : string | null | undefined = sessionStorage.getItem(key)
       
        const item : T  | null = itemString == "undefined" ? null : JSON.parse(itemString!)
        return item
    } 

    const [item, setItem] = useState<T | null>(getItem())
    const saveItem = (item : T )  => {
        sessionStorage.setItem(key, JSON.stringify(item))
        setItem(item)
      }
    const deleteItem = () => {
        sessionStorage.removeItem(key)
    }
      return {
        setItem: saveItem,
        deleteItem : deleteItem,
        item
      }
    }






