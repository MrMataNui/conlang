import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.css']
})
export class GrammarComponent implements OnInit {
  word = {
    order: 'Subject-Oblique-Object-Verb. "Mary opened the door with a key" turns into',
    orderIt: 'Mary with a key the door opened',
    adOrder: 'Adjectives are positioned before the noun.',
    adposition: 'postpositions'
  };
  constructor() {}

  ngOnInit() {}

}
