import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnRow',
})
export class TablePipe implements PipeTransform {
  transform(value: any, entityName: string): any {
    console.log(value, entityName);
    if (entityName === 'Lead') {
      value = [
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
    } else if (entityName === 'Prospect') {
      value = [
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
    } else if (entityName === 'SalesOrderLIst') {
      value = [
        'InstalledNo',
        'ClientName',
        'ContactName',
        'OwnerName',
        'Anualisedamount',
        'DeliveryStatusName',
        'Billedstatus',
        'DeliveryDate',
      ];
    } else if (entityName === 'POList') {
      value = [
        'InstalledNo',
        'ClientName',
        'ContactName',
        'OwnerName',
        'Anualisedamount',
        'StatusName',
        'Billedstatus',
        'DeliveryDate',
      ];
    } else if (entityName === 'Payable') {
      value = [
        'InstalledNo',
        'ClientName',
        'ContactName',
        'OwnerName',
        'Anualisedamount',
        'StatusName',
        'DeliveryStatusName',
        'DeliveryDate',
      ];
    } else if (entityName === 'MoList') {
      value = [
        'InstalledNo',
        'ClientName',
        'ContactName',
        'OwnerName',
        'Anualisedamount',
        'StatusName',
        'EXPClosuredateDashboard',
      ];
    } else if (entityName === 'MIList') {
      value = [
        'InstalledNo',
        'ClientName',
        'ContactName',
        'OwnerName',
        'Anualisedamount',
        'Billedstatus',
        'SourceName',
        'DeliveryDate',
      ];
    } else if (entityName === 'Repair') {
      value = [
        'InstalledNo',
        'ClientName',
        'ContactName',
        'OwnerName',
        'Anualisedamount',
        'StatusName',
        'ServiceTypeName',
        'EXPClosuredateDashboard',
      ];
    } else if (entityName === 'Payment') {
      value = [
        'InstalledNo',
        'ClientName',
        'ContactName',
        'OwnerName',
        'Anualisedamount',
        'StatusName',
        'Billedstatus',
        'EXPClosuredateDashboard',
      ];
    } else if (entityName === 'Receivable') {
      value = [
        'InstalledNo',
        'ClientName',
        'ContactName',
        'OwnerName',
        'Anualisedamount',
        'SourceName',
        'EXPClosuredateDashboard',
      ];
    } else if (entityName === 'Work') {
      value = [
        'InstalledNo',
        'ClientName',
        'ContactName',
        'OwnerName',
        'Anualisedamount',
        'StatusName',
        'ServiceTypeName',
        'EXPClosuredateDashboard',
      ];
    } else if (entityName === 'AMC') {
      value = [
        'InstalledNo',
        'ClientName',
        'ContactName',
        'OwnerName',
        'Anualisedamount',
        'StatusName',
        'ServiceTypeName',
        'EXPClosuredateDashboard',
      ];
    } else if (entityName === 'Ticket') {
      value = [
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
    debugger
    return value;
  }
}
