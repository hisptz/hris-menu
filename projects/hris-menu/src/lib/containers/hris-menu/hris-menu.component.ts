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
  loading$: Observable<boolean>;
  appLogo: string;
  constructor(private menuService: HrisMenuService) {}

  ngOnInit() {
    this.appLogo =
      'data:image/jpeg;base64,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';
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
