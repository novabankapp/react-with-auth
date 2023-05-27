import { ReactNode, createContext, useContext, useState } from 'react';
import { useLocalStorage } from './localStorage';
import Bank from "../../../assets/svgs/Bank.svg"
import ServiceBell from "../../../assets/svgs/ServiceBell.svg"
import Home from "../../../assets/svgs/Home.svg"
import History from "../../../assets/svgs/History.svg"
import { BANKS_PAGE, HOMEPAGE, MERCHANTS_PAGE, TRANSACTIONS_PAGE } from '../api/constant';
import { useDispatch, useSelector } from 'react-redux';
import {setMenu} from "../localstorage/menuReducer"
import { RootState } from './store';



export type MenuStateContextType = {
     menus: Menu[],
     selectedMenu : string,
     setSelectedMenu : (m : string) => void
};
type Menu = {
    title: string;
    key : string;
    imgSrc:string;
    isSelected?: boolean;
    route: string;
}
const menus : Menu[] = [
    {
        title: "Home",
        key : "HOME",
        imgSrc: Home,
        isSelected: true,
        route: HOMEPAGE
    },
    {
        title: "Merchants",
        key : "MERCH",
        imgSrc: ServiceBell,
        isSelected: false,
        route: MERCHANTS_PAGE
    },
    {
        title: "Banks",
        key : "BANK",
        imgSrc: Bank,
        isSelected: false,
        route: BANKS_PAGE
    },
    {
        title: "Transactions",
        key : "TRANS",
        imgSrc: History,
        isSelected: false,
        route: TRANSACTIONS_PAGE
    }
]

export const StorageKey : string = "menuState"

export const MenuStateProviderContext = createContext<MenuStateContextType>({} as MenuStateContextType);


const MenuStateProvider : React.FC<{ children: React.ReactNode }> = ({children}) => {
      const menuState = useSelector((state: RootState) => state.menu);
      console.log(menuState)
      const dispatch = useDispatch();     
       const [selectedMenu, selectMenu] = useState(menuState.currentMenu|| menus[0].key);

      /*const {item, setItem} = useLocalStorage<string>(StorageKey)
      console.log(item)
       const [selectedMenu, setMenu] = useState(item || menus[0].key);
       console.log(selectedMenu)
       const setSelectedMenu = (key : string) => {
            setMenu(key)
            setItem(key)
       } */
       
       const setSelectedMenu = (key : string) => {
            selectMenu(key)
            dispatch(setMenu(key))
       }         
        return (
                    // this is the provider providing state
            <MenuStateProviderContext.Provider value={{selectedMenu, setSelectedMenu,menus}}>
                {children}
            </MenuStateProviderContext.Provider>
        );
};

export default MenuStateProvider;

export const useMenuState = () => {
    return useContext(MenuStateProviderContext)
}