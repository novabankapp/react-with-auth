import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { userSlice } from "./userReducer"

export interface MenuState {
    currentMenu : string | null
   }
 
 const initialState: MenuState = {
       currentMenu: null
  }
 
  export const menuSlice  = createSlice({
     name: 'menu',
     initialState,
     reducers: {
       setMenu: (state, action: PayloadAction<string>) => {
         state.currentMenu = action.payload
       },
       removeMenu: (state) => {
         state.currentMenu = null
       }
     
     },
   })
 
 export const { setMenu, removeMenu } = menuSlice.actions
 
 export default menuSlice.reducer