import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-dhis2-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() userInfo: any;
  constructor() {}

  ngOnInit() {}
}
