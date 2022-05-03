import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CommanService } from 'src/app/services/comman.service';
import { Global } from '../Global';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent implements OnInit {
  autoCompleteData: any;

  @Output() company: EventEmitter<any> = new EventEmitter();
  constructor(private commanservice: CommanService, private global: Global) {}
  Autocomplete(e: any) {
    if (e.length >= 3) {
      let param = {
        DBName: this.global.LOGGED_IN_USER.DbName,
        prefixText: e,
      };
      this.commanservice
        .createFormAutoComplete(param)
        .subscribe((data: any) => {
          this.autoCompleteData = JSON.parse(data);
        });
    }
  }
  SelectedCompany(C: any) {
    this.company.emit(C);
  }
  ngOnInit(): void {}
}
