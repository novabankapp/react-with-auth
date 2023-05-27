export const BASE_URL : string = process.env.REACT_APP_BASE_URL as string; 
export const HUB_URL : string = "api/notifications"
export const MERCHANTS_GRAPH_URL="api/albumql"
export const BANKS_GRAPH_URL="api/songql"
export const TRANSACTIONS_GRAPH_URL = "api/"
export const GOOGLE_URL ="https://www.googleapis.com/oauth2/v1/userinfo"




export const PAGE_SIZE = 20



//app routes
export const HOMEPAGE = "/home"
export const LOGIN_PAGE = "/login"
export const RECOVER_PASSWORD_PAGE = "/recover"
export const RESET_PASSWORD_PAGE = "/reset_password"
export const REGISTRATION_PAGE = "/registration"
export const VERIFY_CODE_PAGE = "/verify_code"

export const MERCHANTS_PAGE = "/merchants/view"
export const BANKS_PAGE = "/banks/view"
export const TRANSACTIONS_PAGE = "/transactions/view"
export const GENERATE_TRN_PAGE = "/transactions/generateRTN"
export const VALIDATE_REF = ""
export const GENERATE_TRN = ""