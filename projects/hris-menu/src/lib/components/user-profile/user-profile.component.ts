import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HrisMenuService } from '../../services/hris-menu.service';

@Component({
  selector: 'hris-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  @Input() userInfo: any;
  @Input() loading: boolean;
  private rootUrl: string
  private route: Router
  constructor(private service: HrisMenuService) {
    this.rootUrl = '/';
  }

  ngOnInit() {
    //console.log(this.userInfo)
  }
  onlogOut() {
    localStorage.clear();
    this.service.logout().subscribe((s) => {
      window.location.href = `${this.rootUrl}`
    });
  }
}
