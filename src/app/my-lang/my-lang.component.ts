import {
  Component,
  OnInit
} from '@angular/core';
@Component({
  selector: 'app-my-lang',
  templateUrl: './my-lang.component.html',
  styleUrls: ['./my-lang.component.css']
})
export class MyLangComponent implements OnInit {
  langName = {
    sentence: 'tap ꝯe ꝯe pu hotkaꝯa hiɥeʀap buỻam tap noɥundeme ꝷu ꝯe pu pubi kem hugeỻam',
    pronunciation: '/tap ʤe ʤe puː hotˈkaʤa hiˈʧeɽap buˈɭam tap noˈʧundeme ʈuː ʤe puː puˈbiː kem huːˈgeɭam/',
    wordOrder: 'and he his hat holding stood and the wind to his wet face turned',
  };
  constructor() {}
  ngOnInit() {}
}
