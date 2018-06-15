import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-vowels',
  templateUrl: './vowels.component.html',
  styleUrls: ['./vowels.component.css']
})
export class VowelsComponent implements OnInit {
  constructor() { }
  vowelList: string[] = ['a aː', 'i', 'u uː', 'æ', 'ɑ', 'ɔ', 'ə', 'ɛ', 'ʊ', 'ʌ'];
  vowelDefault: object = {
    a1: '',
    b1: '',
    c1: '',
    d1: '',
    e1: '',
    f1: '',
    g1: '',
    h1: '',
    i1: '',
    j1: '',
    k1: '',
    l1: '',
    m1: '',
    n1: '',
    o1: '',
    p1: '',
    q1: '',
    r1: '',
    s1: '',
    t1: '',
    u1: '',
    a2: '',
    b2: '',
    c2: '',
    d2: '',
    e2: '',
    f2: '',
    g2: '',
    h2: '',
    i2: '',
    j2: '',
    k2: '',
    l2: '',
    m2: '',
    n2: '',
    o2: '',
    p2: '',
    q2: '',
    r2: '',
    s2: '',
    t2: '',
    u2: ''
  };
  getVowelGraph: object[] = [];
  /**
   * Turns the vowel array into an object
   * @param {Array} langVowel
   *                list of vowels for the conlang
   * @returns {object}
   *                object for the vowels
   */
  vowInit(langVowel: any[]) {
    const vowel = this.vowelDefault;
    langVowel.map(vowelName => {
      switch (true) {
        case /i/.test(vowelName):
          vowel.a1 = vowelName;
          break;
        case /y/.test(vowelName):
          vowel.a2 = vowelName;
          break;
        case /ɨ/.test(vowelName):
          vowel.b1 = vowelName;
          break;
        case /ʉ/.test(vowelName):
          vowel.b2 = vowelName;
          break;
        case /ɯ/.test(vowelName):
          vowel.c1 = vowelName;
          break;
        case /u/.test(vowelName):
          vowel.c2 = vowelName;
          break;
        case /ɪ/.test(vowelName):
          vowel.d1 = vowelName;
          break;
        case /ʏ/.test(vowelName):
          vowel.d2 = vowelName;
          break;
        case /ɪ̈/.test(vowelName):
          vowel.e1 = vowelName;
          break;
        case /ʊ̈/.test(vowelName):
          vowel.e2 = vowelName;
          break;
        case /ɯ̽/.test(vowelName):
          vowel.f1 = vowelName;
          break;
        case /ʊ/.test(vowelName):
          vowel.f2 = vowelName;
          break;
        case /e/.test(vowelName):
          vowel.g1 = vowelName;
          break;
        case /ø/.test(vowelName):
          vowel.g2 = vowelName;
          break;
        case /ɘ/.test(vowelName):
          vowel.h1 = vowelName;
          break;
        case /ɵ/.test(vowelName):
          vowel.h2 = vowelName;
          break;
        case /ɤ/.test(vowelName):
          vowel.i1 = vowelName;
          break;
        case /o/.test(vowelName):
          vowel.i2 = vowelName;
          break;
        case /e̞/.test(vowelName):
          vowel.j1 = vowelName;
          break;
        case /ø̞/.test(vowelName):
          vowel.j2 = vowelName;
          break;
        case /ə/.test(vowelName):
          vowel.k1 = vowelName;
          break;
        case /ɵ̞/.test(vowelName):
          vowel.k2 = vowelName;
          break;
        case /ɤ̞/.test(vowelName):
          vowel.l1 = vowelName;
          break;
        case /o̞/.test(vowelName):
          vowel.l2 = vowelName;
          break;
        case /ɛ/.test(vowelName):
          vowel.m1 = vowelName;
          break;
        case /œ/.test(vowelName):
          vowel.m2 = vowelName;
          break;
        case /ɜ/.test(vowelName):
          vowel.n1 = vowelName;
          break;
        case /ɞ/.test(vowelName):
          vowel.n2 = vowelName;
          break;
        case /ʌ/.test(vowelName):
          vowel.o1 = vowelName;
          break;
        case /ɔ/.test(vowelName):
          vowel.o2 = vowelName;
          break;
        case /æ/.test(vowelName):
          vowel.p1 = vowelName;
          break;
        case /i/.test(vowelName):
          vowel.p2 = vowelName;
          break;
        case /ɐ/.test(vowelName):
          vowel.q1 = vowelName;
          break;
        case /ɞ̞/.test(vowelName):
          vowel.q2 = vowelName;
          break;
        case /a/.test(vowelName):
          vowel.s1 = vowelName;
          break;
        case /ɶ/.test(vowelName):
          vowel.s2 = vowelName;
          break;
        case /ä/.test(vowelName):
          vowel.t1 = vowelName;
          break;
        case /ɒ̈/.test(vowelName):
          vowel.t2 = vowelName;
          break;
        case /ɑ/.test(vowelName):
          vowel.u1 = vowelName;
          break;
        case /ɒ/.test(vowelName):
          vowel.u2 = vowelName;
          break;
      }
    });
    return vowel;
  }

  vowelGraph(langVowel: string[]) {
    const vowel = this.vowInit(langVowel);
    const highlight: Function = (vow1: string, vow2: string) => (vow1 || vow2) ? 'vowel1' : 'vowel2';
    return [
      {
        style: {
          'top': '8px',
          'left': '38px'
        },
        class: highlight(vowel.a1, vowel.a2),
        value1: vowel.a1,
        value2: vowel.a2
      },
      {
        style: {
          'top': '8px',
          'left': '163px'
        },
        class: highlight(vowel.b1, vowel.b2),
        value1: vowel.b1,
        value2: vowel.b2
      },
      {
        style: {
          'top': '8px',
          'left': '285px'
        },
        class: highlight(vowel.c1, vowel.c2),
        value1: vowel.c1,
        value2: vowel.c2
      },
      {
        style: {
          'top': '39px',
          'left': '120px'
        },
        class: highlight(vowel.d1, vowel.d2),
        value1: vowel.d1,
        value2: vowel.d2
      },
      {
        style: {
          'top': '39px',
          'left': '175px'
        },
        class: highlight(vowel.e1, vowel.e2),
        value1: vowel.e1,
        value2: vowel.e2
      },
      {
        style: {
          'top': '39px',
          'left': '230px'
        },
        class: highlight(vowel.f1, vowel.f2),
        value1: vowel.f1,
        value2: vowel.f2
      },
      {
        style: {
          'top': '72px',
          'left': '74px'
        },
        class: highlight(vowel.g1, vowel.g2),
        value1: vowel.g1,
        value2: vowel.g2
      },
      {
        style: {
          'top': '72px',
          'left': '181px'
        },
        class: highlight(vowel.h1, vowel.h2),
        value1: vowel.h1,
        value2: vowel.h2
      },
      {
        style: {
          'top': '72px',
          'left': '285px'
        },
        class: highlight(vowel.i1, vowel.i2),
        value1: vowel.i1,
        value2: vowel.i2
      },
      {
        style: {
          'top': '103px',
          'left': '95px'
        },
        class: highlight(vowel.j1, vowel.j2),
        value1: vowel.j1,
        value2: vowel.j2
      },
      {
        style: {
          'top': '103px',
          'left': '197px'
        },
        class: highlight(vowel.k1, vowel.k2),
        value1: vowel.k1,
        value2: vowel.k2
      },
      {
        style: {
          'top': '103px',
          'left': '285px'
        },
        class: highlight(vowel.l1, vowel.l2),
        value1: vowel.l1,
        value2: vowel.l2
      },
      {
        style: {
          'top': '136px',
          'left': '119px'
        },
        class: highlight(vowel.m1, vowel.m2),
        value1: vowel.m1,
        value2: vowel.m2
      },
      {
        style: {
          'top': '136px',
          'left': '202px'
        },
        class: highlight(vowel.o1, vowel.o2),
        value1: vowel.o1,
        value2: vowel.o2
      },
      {
        style: {
          'top': '136px',
          'left': '285px'
        },
        class: highlight(vowel.p1, vowel.p2),
        value1: vowel.p1,
        value2: vowel.p2
      },
      {
        style: {
          'top': '167px',
          'left': '133px'
        },
        class: highlight(vowel.q1, vowel.q2),
        value1: vowel.q1,
        value2: vowel.q2
      },
      {
        style: {
          'top': '167px',
          'left': '212px'
        },
        class: highlight(vowel.r1, vowel.r2),
        value1: vowel.r1,
        value2: vowel.r2
      },
      {
        style: {
          'top': '199px',
          'left': '160px'
        },
        class: highlight(vowel.s1, vowel.s2),
        value1: vowel.s1,
        value2: vowel.s2
      },
      {
        style: {
          'top': '199px',
          'left': '223px'
        },
        class: highlight(vowel.t1, vowel.t2),
        value1: vowel.t1,
        value2: vowel.t2
      },
      {
        style: {
          'top': '199px',
          'left': '286px'
        },
        class: highlight(vowel.u1, vowel.u2),
        value1: vowel.u1,
        value2: vowel.u2
      },
    ];
  }
  ngOnInit() {
    this.getVowelGraph = this.vowelGraph(this.vowelList);
  }
}
