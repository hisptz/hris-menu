import { NgModule } from '@angular/core';
import { HrisMenuComponent } from './containers/hris-menu/hris-menu.component';
import { HrisMenuService } from './services/hris-menu.service';

@NgModule({
  declarations: [HrisMenuComponent],
  imports: [],
  exports: [HrisMenuComponent],
  providers: [HrisMenuService]
})
export class HrisMenuModule {}
