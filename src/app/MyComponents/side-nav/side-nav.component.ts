import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
<<<<<<< HEAD


=======
  toggle = true;
>>>>>>> e52c4aa3c46edd8c315eb4a1a63ec783e61b1614

  constructor(private titleService: Title) {}
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit(): void {}

<<<<<<< HEAD
=======
  changeTheme() {
    this.toggle = !this.toggle;
  }
>>>>>>> e52c4aa3c46edd8c315eb4a1a63ec783e61b1614
}
