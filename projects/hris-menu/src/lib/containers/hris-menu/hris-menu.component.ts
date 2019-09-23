import { Component, OnInit } from '@angular/core';
import { HrisMenuService } from '../../services/hris-menu.service';
import { DropDownTypes } from '../../constants/dropdown.constant';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-dhis2-hris-menu',
  templateUrl: 'hris-menu.component.html',
  styleUrls: ['./hris-menu.component.scss']
})
export class HrisMenuComponent implements OnInit {
  currentDropDownType: any;
  dropDownTypes: any;
  appList$: Observable<any>;
  userInfo$: Observable<any>;
  constructor(private menuService: HrisMenuService) {}

  ngOnInit() {
    this.dropDownTypes = DropDownTypes;

    this.appList$ = this.menuService.getApps();
    this.userInfo$ = this.menuService.getCurrentUser();
  }

  onSetDropDownType(e, dropDownType: string) {
    e.stopPropagation();
    this.currentDropDownType = dropDownType;
  }

  onResetDropDownType() {
    this.currentDropDownType = undefined;
  }
}
