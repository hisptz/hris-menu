import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrisMenuService } from '../../services/hris-menu.service';

@Component({
  selector: 'hris-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  @Input() userInfo: any;
  @Input() loading: boolean;
  constructor(private service: HrisMenuService) {}

  ngOnInit() {
  }
  onlogOut() {
    localStorage.clear();
    this.service.logout().subscribe((s) => {
      window.location.href = '/';
    });
  }
}
