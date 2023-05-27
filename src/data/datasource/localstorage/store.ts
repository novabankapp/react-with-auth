import { configureStore } from "@reduxjs/toolkit"
import userReducer, { reducer as recoverEmailReducer } from "./userReducer"
import menuReducer from "./menuReducer"
import notificationsReducer from "./notificationsReducer"

export const store = configureStore({
    reducer: {
      user: userReducer,
      recoverEmail : recoverEmailReducer,
      menu: menuReducer,
      notifications: notificationsReducer
    },
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch