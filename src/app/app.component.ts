import { Component, OnInit, Input, Renderer2 } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MobileDetection } from './model/mobile-detection.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mobileQuery: MediaQueryList;
  @Input() mobileDetection = new MobileDetection(false);

  sideNavMode = 'over';
  sideNavOpen = false;

  isLoadingRoute = false;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private renderer2: Renderer2
  ) { }

  ngOnInit(): void {
    this.checkIsMobileListener();
    this.initRegisterIcons();
  }

  private checkIsMobileListener(): void {
    console.log('XXXXXXXXXXXX');
    console.log(typeof(window));
    console.log('XXXXXXXXXXXX');
    if (typeof(window) !== 'undefined') {

      if (window.innerWidth <= 768) {
        this.mobileDetection = new MobileDetection(true);
      }

      this.renderer2.listen(window, 'resize', () => {
        let isMobile = false;

        if (window.innerWidth <= 768) { isMobile = true; }

        if (isMobile !== this.mobileDetection.isMobile) {
          this.mobileDetection = new MobileDetection(isMobile);
        }
      });

    } else {
      console.log('Window is not defined...');
    }

  }

  private initRegisterIcons(): void {
    this.registerIcon('logo', 'logo.svg');
    this.registerIcon('logoIcon', 'logo-icon.svg');
    this.registerIcon('hashtag', 'icons/hashtag-solid.svg');
    this.registerIcon('facebook', 'icons/facebook.svg');
    this.registerIcon('instagram', 'icons/instagram.svg');
    this.registerIcon('arrowLeft', 'icons/arrow-left.svg');
    this.registerIcon('arrowRight', 'icons/arrow-right.svg');
    this.registerIcon('iconLess', 'icons/icon-less.svg');
    this.registerIcon('iconMore', 'icons/icon-more.svg');
  }

  private registerIcon(label: string, path: string): void {
    this.matIconRegistry.addSvgIcon(
      label,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${window.location.origin}/assets/img/${path}`)
    );
  }

  OnDestroy(): void {
  }

}
