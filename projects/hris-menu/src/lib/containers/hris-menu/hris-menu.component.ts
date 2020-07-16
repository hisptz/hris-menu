import { Component, OnInit } from '@angular/core';
import { HrisMenuService } from '../../services/hris-menu.service';
import { DropDownTypes } from '../../constants/dropdown.constant';
import { Observable } from 'rxjs';
import { AppIcon } from '../../resources/app.icon';

@Component({
  selector: 'hris-menu',
  templateUrl: 'hris-menu.component.html',
  styleUrls: ['./hris-menu.component.scss'],
})
export class HrisMenuComponent implements OnInit {
  currentDropDownType: any;
  dropDownTypes: any;
  appList$: Observable<any>;
  userInfo$: Observable<any>;
  loading$: Observable<boolean>;
  searchKeyword: string;
  appLogo: string;
  constructor(private menuService: HrisMenuService) {}

  ngOnInit() {
    // TODO This should be retrieved from backend after system info api is completed
    this.appLogo = AppIcon;
    this.dropDownTypes = DropDownTypes;
    this.menuService.init();

    this.appList$ = this.menuService.appList();
    this.userInfo$ = this.menuService.userInfo();
    this.loading$ = this.menuService.loading();
  }

  onSetDropDownType(e, dropDownType: string) {
    e.stopPropagation();
    this.currentDropDownType = dropDownType;
  }

  onResetDropDownType() {
    this.currentDropDownType = undefined;
  }
}
