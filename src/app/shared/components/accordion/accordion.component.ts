import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { AccordionContent } from './accordion-content.interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements OnInit {
  @Input() isActive = false;
  @Input() accordionContent: AccordionContent;

  constructor() { }

  ngOnInit() {
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

}
