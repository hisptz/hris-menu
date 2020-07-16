import { NgModule } from '@angular/core';
import { HrisMenuComponent } from './containers/hris-menu/hris-menu.component';
import { HrisMenuService } from './services/hris-menu.service';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { AppListComponent } from './components/app-list/app-list.component';
import { FormsModule } from '@angular/forms';
import { SearchByNamePipe } from './pipes/search-by-name.pipe';
@NgModule({
  declarations: [
    HrisMenuComponent,
    UserProfileComponent,
    ClickOutsideDirective,
    AppListComponent,
    SearchByNamePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatRippleModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatFormFieldModule
  ],
  exports: [HrisMenuComponent],
  providers: [HrisMenuService]
})
export class HrisMenuModule {}
