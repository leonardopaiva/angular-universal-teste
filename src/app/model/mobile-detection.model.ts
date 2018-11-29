export class MobileDetection {
  private _isMobile = false;
  constructor(isMobile: boolean) {
    this._isMobile = isMobile;
  }

  get isMobile() {
    return this._isMobile;
  }
}

