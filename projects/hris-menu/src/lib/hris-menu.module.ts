import { NgModule } from '@angular/core';
import { HrisMenuComponent } from './containers/hris-menu/hris-menu.component';
import { HrisMenuService } from './services/hris-menu.service';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
@NgModule({
  declarations: [HrisMenuComponent],
  imports: [MatIconModule, MatRippleModule],
  exports: [HrisMenuComponent],
  providers: [HrisMenuService]
})
export class HrisMenuModule {}
