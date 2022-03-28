import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  getDefaultDatacommonURL =
    'https://ffherp.co.in:446/api/Voucher/GetDefaultDatacommon';
  GetCommonDataNewlyUrl =
    'https://ffherp.co.in:446/api/Voucher/GetCommonDataNewly';
  commanDataURL = 'https://ffherp.co.in:446/api/Voucher/GetCommonData';

  commanContactListURL =
    'https://ffherp.co.in:446/api/Voucher/GetCommonContactList';

  getUserDataURL = 'https://ffherp.co.in:446/api/Voucher/GetUserEmailMobile';

  saveActualCommonActionURL =
    'https://ffherp.co.in:446/api/Voucher/SaveActualCommonAction';

  saveSheduleCommonActionURL =
    'https://ffherp.co.in:446/api/Voucher/SaveSheduleCommonAction';

  getUserEmailMobileUrl =
    'https://ffherp.co.in:446/api/Voucher/GetUserEmailMobile';

  GetActualDataRandomUrl =
    'https://ffherp.co.in:446/api/Voucher/GetActualDataRandom';

  GetSheduledDataUrl = 'https://ffherp.co.in:446/api/Voucher/GetSheduledData';

  GetRevisedPDFDataUrl = 'https://ffherp.co.in:446/api/Voucher/GetRevisedPDF';
  constructor(private http: HttpClient) {}

  getDefaultData(param) {
    return this.http.post(this.getDefaultDatacommonURL, param);
  }
  getCommonDataNewlyData(param) {
    return this.http.post(this.GetCommonDataNewlyUrl, param);
  }
  connanData(param: any) {
    return this.http.post(this.commanDataURL, param);
  }
  getContactList(param: any) {
    return this.http.post(this.commanContactListURL, param);
  }
  getUserlist(param: any) {
    return this.http.post(this.getUserDataURL, param);
  }
  getUserEmailMobile(param: any) {
    return this.http.post(this.getUserEmailMobileUrl, param);
  }
  saveActualCommanAction(param: any) {
    return this.http.post(this.saveActualCommonActionURL, param);
  }
  saveSheduleCommonAction(param: any) {
    return this.http.post(this.saveSheduleCommonActionURL, param);
  }
  GetActualDataRandom(param: any) {
    return this.http.post(this.GetActualDataRandomUrl, param);
  }
  GetSheduledData(param: any) {
    return this.http.post(this.GetSheduledDataUrl, param);
  }
  GetRevisedPDFData(param: any) {
    return this.http.post(this.GetRevisedPDFDataUrl, param);
  }
}
