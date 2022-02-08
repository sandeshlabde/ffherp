export interface IUser{
    IUser: any;
    CoName:string;
    CustID:string;
    DbName:string;
    APIKey:string;
    EmailId:string;
    EndDate:Date|string;
    FunctioId:string;
    GPSTrack:string;
    Graceperiod:any;
    LoginYn:string;
    Password:string; 
    Periodicity:string;
    RoleId:string;
    StartDate:Date|string;
    Token:string;
    UserId:string;
    Username:string;
    WT:string;
    XmlPath:any;
    encryptPswd:string;
    Message:string;
    
}


export interface ILoginDetails{
    EmailId:string;
    password:string;
    SessionFlag:string
}
 
 