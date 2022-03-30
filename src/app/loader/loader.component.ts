import { Component, OnInit } from '@angular/core';
import { ProspectService } from '../services/prospect.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  loader: boolean;
  constructor(private loaderService: ProspectService) {
    this.loaderService.loader.subscribe((res) => {
      this.loader = res;
    });
  }

  ngOnInit(): void {}
}
