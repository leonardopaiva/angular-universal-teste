import { Component, OnInit } from '@angular/core';
import { AccordionContent } from 'src/app/shared/components/accordion/accordion-content.interface';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  accordionContent: AccordionContent[] = [{
    title: 'Curso 001',
    link: 'link01',
    smallDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Voluptates accusantium fugiat reprehenderit necessitatibus eum provident veniam
    `,
    description: `Conteúdo escondido... Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Voluptates accusantium fugiat reprehenderit necessitatibus eum provident veniam
      vitae laboriosam expedita ipsa nostrum temporibus possimus, consequuntur quis
      magnam! Numquam molestias illo a.
    `
  }, {
    title: 'Curso 002',
    link: 'link02',
    smallDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Voluptates accusantium fugiat reprehenderit necessitatibus eum provident veniam
      vitae laboriosam expedita ipsa nostrum temporibus possimus, consequuntur quis
      magnam! Numquam molestias illo a.
      quebra de linha asidjasi djasidj iasjdi ajsidjs aijdiajsij
    `,
    description: `Conteúdo escondido... Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Voluptates accusantium fugiat reprehenderit necessitatibus eum provident veniam
      vitae laboriosam expedita ipsa nostrum temporibus possimus, consequuntur quis
      magnam! Numquam molestias illo a.
    `
  }
];

  constructor() { }

  ngOnInit() {
  }

}
