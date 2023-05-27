import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { menuSlice } from "./menuReducer"

export interface NotificationState {
    currentNotifications : notification[]
   }
export type notification = {
    id: string
    message : string,
    seen: boolean
}
 
 const initialState: NotificationState = {
       currentNotifications: []
  }
 
  export const notificationSlice  = createSlice({
     name: 'notifications',
     initialState,
     reducers: {
       addNotification: (state, action: PayloadAction<notification>) => {
         state.currentNotifications = [action.payload, ...state.currentNotifications]
       },
       markAsSeen: (state, action: PayloadAction<string>) => {
         var toMark = state.currentNotifications.find(n => n.id == action.payload)
         if(toMark != null){
            toMark = {
                ...toMark,
                seen: true
            }
            state.currentNotifications = [...state.currentNotifications.filter(n => n.id != action.payload), toMark]
         }
        
       }
     
     },
   })
 
 export const { addNotification, markAsSeen } = notificationSlice.actions
 
 export default notificationSlice.reducer