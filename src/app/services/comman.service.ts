import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommanService {
  listCommanDataURL =
    'https://apitest.ffherp.co.in/api/FFHAMC/GetSearchDDLValue';
  createFormAutoCompleteURL =
    'https://apitest.ffherp.co.in/api/Voucher/getAutoCompleteCompanyList';
  companyContactListURL =
    'https://apitest.ffherp.co.in/api/Voucher/GetCommonContactList';
  ApprovalCountUrl = 'https://ffherp.co.in:446/api/Voucher/GetApprovalCount';
  constructor(private http: HttpClient) {}
  createFormAutoComplete(param: any) {
    return this.http.post(this.createFormAutoCompleteURL, param);
  }
  getCompanyContactList(param) {
    return this.http.post(this.companyContactListURL, param);
  }
  listCommanData(param) {
    return this.http.post(this.listCommanDataURL, param);
  }
  ApprovalCount(param) {
    return this.http.post(this.ApprovalCountUrl, param);
  }
}
