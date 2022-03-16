import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  getDefaultDatacommonURL =
    'https://ffherp.co.in:446/api/Voucher/GetDefaultDatacommon';
  commanDataURL = 'https://ffherp.co.in:446/api/Voucher/GetCommonData';

  commanContactListURL =
    'https://ffherp.co.in:446/api/Voucher/GetCommonContactList';

  getUserDataURL = 'https://ffherp.co.in:446/api/Voucher/GetUserEmailMobile';

  saveActualCommonActionURL =
    'https://ffherp.co.in:446/api/Voucher/SaveActualCommonAction';

  saveSheduleCommonActionURL =
    'https://ffherp.co.in:446/api/Voucher/SaveSheduleCommonAction';
  createFormAutoCompleteURL =
    'https://apitest.ffherp.co.in/api/Voucher/getAutoCompleteCompanyList';

  constructor(private http: HttpClient) {}

  getDefaultData(param) {
    return this.http.post(this.getDefaultDatacommonURL, param);
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
  saveActualCommanAction(param: any) {
    return this.http.post(this.saveActualCommonActionURL, param);
  }
  saveSheduleCommonAction(param: any) {
    return this.http.post(this.saveSheduleCommonActionURL, param);
  }
  createFormAutoComplete(param: any) {
    return this.http.post(this.createFormAutoCompleteURL, param);
  }
}
