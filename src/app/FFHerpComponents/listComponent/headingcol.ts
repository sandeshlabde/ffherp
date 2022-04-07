import { Injectable } from '@angular/core'; 

@Injectable({
  providedIn: 'root',
})
export class DispClmModule {
  EntityName: any;
  Lead: any = [
    'InstalledNo',
    'ClientName',
    'ContactName',
    'OwnerName',
    'Anualisedamount',
    'StatusName',
    'SourceName',
    'Stage',
    'EXPClosuredateDashboard',
  ];
  Prospect: any = [
    'InstalledNo',
    'ClientName',
    'ContactName',
    'OwnerName',
    'Anualisedamount',
    'StatusName',
    'SourceName',
    'Stage',
    'EXPClosuredateDashboard',
  ];
  SalesOrderLIst: any = [
    'InstalledNo',
    'ClientName',
    'ContactName',
    'OwnerName',
    'Anualisedamount',
    'DeliveryStatusName',
    'Billedstatus',
    'DeliveryDate',
  ];
  POList: any = [
    'InstalledNo',
    'ClientName',
    'ContactName',
    'OwnerName',
    'Anualisedamount',
    'StatusName',
    'Billedstatus',
    'DeliveryDate',
  ];
  Payable: any = [
    'InstalledNo',
    'ClientName',
    'ContactName',
    'OwnerName',
    'Anualisedamount',
    'StatusName',
    'DeliveryStatusName',
    'DeliveryDate',
  ];
  MoList: any = [
    'InstalledNo',
    'ClientName',
    'ContactName',
    'OwnerName',
    'Anualisedamount',
    'StatusName',
    'EXPClosuredateDashboard',
  ];
  MIList: any = [
    'InstalledNo',
    'ClientName',
    'ContactName',
    'OwnerName',
    'Anualisedamount',
    'Billedstatus',
    'SourceName',
    'DeliveryDate',
  ];
  Repair: any = [
    'InstalledNo',
    'ClientName',
    'ContactName',
    'OwnerName',
    'Anualisedamount',
    'StatusName',
    'ServiceTypeName',
    'EXPClosuredateDashboard',
  ];
  Payment: any = [
    'InstalledNo',
    'ClientName',
    'ContactName',
    'OwnerName',
    'Anualisedamount',
    'StatusName',
    'DeliveryStatusName',
    'DeliveryDate',
  ];
  Receivable: any = [
    'InstalledNo',
    'ClientName',
    'ContactName',
    'OwnerName',
    'Anualisedamount',
    'StatusName',
    'Billedstatus',
    'EXPClosuredateDashboard',
  ];
  Work: any = [
    'InstalledNo',
    'ClientName',
    'ContactName',
    'OwnerName',
    'Anualisedamount',
    'StatusName',
    'ServiceTypeName',
    'EXPClosuredateDashboard',
  ];
  AMC: any = [
    'InstalledNo',
    'ClientName',
    'ContactName',
    'OwnerName',
    'Anualisedamount',
    'StatusName',
    'ServiceTypeName',
    'EXPClosuredateDashboard',
  ];
  Ticket: any = [
    'InstalledNo',
    'ClientName',
    'ContactName',
    'OwnerName',
    'Anualisedamount',
    'StatusName',
    'SourceName',
    'Stage',
    'EXPClosuredateDashboard',
  ];
}
