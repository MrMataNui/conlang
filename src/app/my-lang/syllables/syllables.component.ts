import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-syllables',
  templateUrl: './syllables.component.html',
  styleUrls: ['./syllables.component.css']
})

export class SyllablesComponent implements OnInit {
  syll: object = {
    syll: '(C)V(C)',
    stress: 'Second — stress is on the second syllable',
    wordStart: 'b, d, ʤ, g, h, j, k, m, n, p, t, ʧ, ɲ, ʂ, ʈ',
    wordMid: 'b, bj, d, ʤ, g, gg, h, j, jj, k, m, n, nd, nh, nj, p, t, tk, ʧ, ɲ, ɽ, ʂ, ʈ, ʔ',
    wordFinal: 'b, d, ʤ, g, j, k, m, n, p, t, ʧ, ɭ, ɲ, ʂ, ʔ',
  };
  constructor() {}
  ngOnInit() {}
  getData() {
    const data: string[] = [
      'Guide to phonological rules: "e → i / _g" means ‘e’ turns into ‘i’ before a ‘g’.',
      'C = consonant',
      'V = vowel',
      'S = stop',
      'N = nasal consonant',
      'F = fricative',
      'K = velar',
      'L = lateral',
      'R = resonant/sonorant',
      'P = labial/bilabial',
      'E = front vowel',
      'B = back vowel',
      '# = word boundary',
      'Ø = null/nothing'
    ];
    const rules: string[] = [
      'e → i / _g'
    ];
    const newData: object[] = [];
    for (const i of data) {
      newData.push({
        data: data[i],
        rules: (rules[i]) ? rules[i] : '',
      });
    }
    return newData;
  }
}
