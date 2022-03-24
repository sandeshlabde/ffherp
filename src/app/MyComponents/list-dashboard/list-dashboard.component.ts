import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list-dashboard',
  templateUrl: './list-dashboard.component.html',
  styleUrls: ['./list-dashboard.component.css'],
})
export class ListDashboardComponent implements OnInit {
  safeUrl: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://ffherp.co.in/Pages/Modules/Lead/SupDashboard.aspx'
    );
  }
}
