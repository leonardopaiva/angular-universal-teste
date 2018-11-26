import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-universal-site';

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  isMobile: boolean;

  sideNavMode = 'over';
  sideNavOpen = false;

  isLoadingRoute = false;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.checkIsMobileListener();
    this.initRegisterIcons();
  }

  private checkIsMobileListener(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 768px)');

    this.isMobile = this.mobileQuery.matches;

    this._mobileQueryListener = () => {
      this.isMobile = this.mobileQuery.matches;
    };
    this.mobileQuery.addListener(this._mobileQueryListener);
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
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
