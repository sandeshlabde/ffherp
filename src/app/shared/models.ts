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

export class CurrencyConversion {
  public static Convert(num) {
    if (!isNaN(num)) {
      num = parseInt(num);

      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + ' G';
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + ' M';
      }
      if (num >= 100000) {
        return (num / 100000).toFixed(1).replace(/\.0$/, '') + ' L';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + ' K';
      }
      if (num == 0) return '0.00';
      return num.toFixed(2);
    }
  }
}
