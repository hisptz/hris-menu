import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hris-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() userInfo: any;
  @Input() loading: boolean;
  constructor() {}

  ngOnInit() {}
}
