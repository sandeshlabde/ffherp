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
  pivortReportcommanDataUrl =
    'https://ffherp.co.in:446/api/Voucher/GetCommonData';

  GetReportMappingUrl = 'https://ffherp.co.in:446/api/Voucher/GetReportMapping';

  GetVReportUrl = 'https://ffherp.co.in:446/api/Voucher/GetVReport';
  GetTicketDDLvaluesUrl =
    'https://ffherp.co.in:446/api/Voucher/GetTicketDDLvalues';
  GetProductByPartyUrl =
    'https://ffherp.co.in:446/api/Voucher/GetProductByParty';
  GetdataForbindTicketValuesUrl =
    'https://ffherp.co.in:446/api/Voucher/GetdataForbindTicketValues';
  GetCIPdetailUrl = 'https://ffherp.co.in:446/api/Voucher/GetCIPdetail';
  createTicketUrl = 'https://ffherp.co.in:446/api/Voucher/createTicket';
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
  GetCommanDataPivortReport(param) {
    return this.http.post(this.pivortReportcommanDataUrl, param);
  }
  GetReportMapping(param) {
    return this.http.post(this.GetReportMappingUrl, param);
  }

  GetVReport(param) {
    return this.http.post(this.GetVReportUrl, param);
  }
  GetTicketDDLvalues(param) {
    return this.http.post(this.GetTicketDDLvaluesUrl, param);
  }
  GetProductByParty(param) {
    return this.http.post(this.GetProductByPartyUrl, param);
  }
  GetdataForbindTicketValues(param) {
    return this.http.post(this.GetdataForbindTicketValuesUrl, param);
  }
  GetCIPdetail(param) {
    return this.http.post(this.GetCIPdetailUrl, param);
  }
  createTicket(param) {
    return this.http.post(this.createTicketUrl, param);
  }
}
