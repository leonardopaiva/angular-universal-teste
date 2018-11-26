import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SideNavListComponent } from './sidenav-list/sidenav-list.component';
import { HeaderMobileComponent } from './header/header-mobile/header-mobile.component';
import { HeaderDesktopComponent } from './header/header-desktop/header-desktop.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideNavListComponent,
    HeaderMobileComponent,
    HeaderDesktopComponent,
    FooterComponent],
  imports: [SharedModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavListComponent
  ],
  providers: []
})

export class CoreModule {}
