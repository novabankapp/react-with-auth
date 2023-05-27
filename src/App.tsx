
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { BANKS_PAGE, BASE_URL, GENERATE_TRN_PAGE, HOMEPAGE, HUB_URL, LOGIN_PAGE, MERCHANTS_PAGE, RECOVER_PASSWORD_PAGE, REGISTRATION_PAGE, RESET_PASSWORD_PAGE, TRANSACTIONS_PAGE, VERIFY_CODE_PAGE } from './data/datasource/api/constant';
import { RootState } from './data/datasource/localstorage/store';
import { DashboardHomePage } from './features/Home/components/pages/DashboardHomePage';
import { EnterCodePage } from './features/Login/components/pages/EnterCodePage';
import { LoginPage } from './features/Login/components/pages/LoginPage';
import { RecoverPasswordPage } from './features/Login/components/pages/RecoverPasswordPage';
import { RegistrationPage } from './features/Login/components/pages/RegistrationPage';
import { ResetPasswordPage } from './features/Login/components/pages/ResetPasswordPage';
import MenuStateProvider from './data/datasource/localstorage/menuStateProvider';
import connection from './data/signalR/connect';
import { HubConnectionState } from '@microsoft/signalr';
import { addNotification } from './data/datasource/localstorage/notificationsReducer';
import { setUser } from './data/datasource/localstorage/userReducer';
import userImage from "./assets/images/header.png"
import { get } from 'https';



const MenuContextLayout = () => {
  
  return (
    <MenuStateProvider>
      <Outlet />
    </MenuStateProvider>
  );
};

type RouteData = {
  page : React.ReactNode,
  route : string
}
const authenticatedRoutes : RouteData[] =[
  {
    page : <DashboardHomePage />,
    route: HOMEPAGE
  },
  
] 
const authRoutes : RouteData[] = [
  {
    page : <LoginPage />,
    route: LOGIN_PAGE
  },
  {
    page : <RegistrationPage />,
    route: REGISTRATION_PAGE
  },
  {
    page: <RecoverPasswordPage />,
    route: RECOVER_PASSWORD_PAGE
  },
  {
    page: <ResetPasswordPage />,
    route: RESET_PASSWORD_PAGE
  },
  {
    page: <EnterCodePage />,
    route: VERIFY_CODE_PAGE

  }
]

function App() {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
        dispatch(setUser(
          {
            name: "Lewis Msasa",
            profilePicPath: userImage,
            email:"lmsasajnr@gmail.com",
            username:"lmsasajnr",
            id: "1234"
          }
        ))
  }, [])

  useEffect( () => {
      console.log(connection.state)
      if(connection){
          try{
              if(connection.state == HubConnectionState.Disconnected){
                   connection.start()
              }
          }
          catch(error: any){
              console.log(error)
          }
      }
      connection.on("BroadcastToUser", (Message: any) => {
          dispatch(addNotification({
            message: `${Message.message}`,
            seen: false,
            id: `${Message.id}`
        }))
      });
      connection.onreconnected((connectionId) => {
         
      })
      connection.on("SendMessageToAllClients", (Message: any) => {
        dispatch(addNotification({
           message: `${Message.message}`,
           seen: false,
           id: "1234"
        }))
        console.log(Message)
       });

    }, [connection]);
 
  useEffect(() => {
    console.log(user)
    if (user == null) {
       const currentInAuth = authRoutes.find(r => r.route == location.pathname);
       if(currentInAuth === undefined)
          navigate(HOMEPAGE)
    } else {
      const currentInAuthenticated = authenticatedRoutes.find(r => r.route == location.pathname);
      if(currentInAuthenticated === undefined)
        navigate(HOMEPAGE)
    }
  }, [user]);
  return (
    <Routes>
          <Route element={<MenuContextLayout />}>
            {
              authenticatedRoutes.map((r,i) => (<Route key={i} path={r.route} element= {r.page}/>))
            }
          </Route>
       <Route >
            {
              authRoutes.map((r,i) => (<Route key={i}  path={r.route} element= {r.page}/>))
            }
          </Route>
    </Routes>
  );
}

export default App;
