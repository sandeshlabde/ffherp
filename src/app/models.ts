export interface IUser {
  IUser: any;
  CoName: string;
  CustID: string;
  DbName: string;
  APIKey: string;
  EmailId: string;
  EndDate: Date | string;
  FunctioId: string;
  GPSTrack: string;
  Graceperiod: any;
  LoginYn: string;
  Password: string;
  Periodicity: string;
  RoleId: string;
  StartDate: Date | string;
  Token: string;
  UserId: string;
  Username: string;
  WT: string;
  XmlPath: any;
  encryptPswd: string;
  Message: string;
}

export interface ILoginDetails {
  EmailId: string;
  password: string;
  SessionFlag: string;
}

export interface Option {
  backgroundColor: string;
  buttonColor: string;
  headingColor: string;
  label: string;
  value: string;
}

// export interface ActionDefaultData {
//   ActorId: string;
//   ActorName: string;
//   BackDatedAction: string;
//   CommonActionId: string;
//   ContactId: string;
//   ContactName: string;
//   EntNAme: string;
//   EntityId: string;
//   EntityName: string;
//   Id: string;
//   Instructions: string;
//   MoveToStage: string;
//   NextOtherContactInfo: string;
//   OwnerId: string;
//   Ownername: string;
//   ScheduleActionDate: Date | string;
//   ScheduleActionId: string;
//   ScheduleActionTime: string;
//   ScheduleActionType: string;
//   ScheduleActivityType: string;
//   ScheduleUserId: string;
//   Schedule_ActionType: string;
//   SeqId: string;
//   SheduledActorName: string;
//   Status: string;
//   UpdatedBy: string;
//   UpdatedOn: string;
//   clientId: string;
// }
