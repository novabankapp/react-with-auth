import signalR, { HttpTransportType, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { BASE_URL, HUB_URL } from "../datasource/api/constant";

console.log("signal=>",signalR)
const connection = new HubConnectionBuilder()
                        .withUrl(`${BASE_URL}${HUB_URL}`,{
                            skipNegotiation: true,
                            transport: HttpTransportType.WebSockets
                          })
                        .configureLogging(LogLevel.Information)
                        .withAutomaticReconnect([0,2,10,30,60,360,3600])
                        .build()

export default connection