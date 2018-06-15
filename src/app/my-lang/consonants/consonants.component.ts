import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-consonants',
  templateUrl: './consonants.component.html',
  styleUrls: ['./consonants.component.css']
})
export class ConsonantsComponent implements OnInit {
  constList = ['p b', 't d', 'ʈ', 'k g', 'ʔ', 'm', 'n', 'ɳ', 'ɲ', 'ʧ ʤ', 'ʂ', 'h', 'j', 'ɽ', 'ɭ'];
  consonantDefaults = {
    consonant: {
      Den: {
        Stop: '',
        Nasal: '',
        Affricate: '',
        Fricative: '',
        Approximant: '',
        Tap: '',
        Trill: '',
        LatFric: '',
        LatApprox: '',
        LatTap: '',
        Implosive: '',
        Click: ''
      },
      Bil: {
        Stop: '',
        Nasal: '',
        Affricate: '',
        Fricative: '',
        Approximant: '',
        Tap: '',
        Trill: '',
        LatFric: '',
        LatApprox: '',
        LatTap: '',
        Implosive: '',
        Click: ''
      },
      LabDen: {
        Stop: '',
        Nasal: '',
        Affricate: '',
        Fricative: '',
        Approximant: '',
        Tap: '',
        Trill: '',
        LatFric: '',
        LatApprox: '',
        LatTap: '',
        Implosive: '',
        Click: ''
      },
      Alveolar: {
        Stop: '',
        Nasal: '',
        Affricate: '',
        Fricative: '',
        Approximant: '',
        Tap: '',
        Trill: '',
        LatFric: '',
        LatApprox: '',
        LatTap: '',
        Implosive: '',
        Click: ''
      },
      Pos: {
        Stop: '',
        Nasal: '',
        Affricate: '',
        Fricative: '',
        Approximant: '',
        Tap: '',
        Trill: '',
        LatFric: '',
        LatApprox: '',
        LatTap: '',
        Implosive: '',
        Click: ''
      },
      Flex: {
        Stop: '',
        Nasal: '',
        Affricate: '',
        Fricative: '',
        Approximant: '',
        Tap: '',
        Trill: '',
        LatFric: '',
        LatApprox: '',
        LatTap: '',
        Implosive: '',
        Click: ''
      },
      AlvPal: {
        Stop: '',
        Nasal: '',
        Affricate: '',
        Fricative: '',
        Approximant: '',
        Tap: '',
        Trill: '',
        LatFric: '',
        LatApprox: '',
        LatTap: '',
        Implosive: '',
        Click: ''
      },
      Pal: {
        Stop: '',
        Nasal: '',
        Affricate: '',
        Fricative: '',
        Approximant: '',
        Tap: '',
        Trill: '',
        LatFric: '',
        LatApprox: '',
        LatTap: '',
        Implosive: '',
        Click: ''
      },
      Vel: {
        Stop: '',
        Nasal: '',
        Affricate: '',
        Fricative: '',
        Approximant: '',
        Tap: '',
        Trill: '',
        LatFric: '',
        LatApprox: '',
        LatTap: '',
        Implosive: '',
        Click: ''
      },
      LabVel: {
        Stop: '',
        Nasal: '',
        Affricate: '',
        Fricative: '',
        Approximant: '',
        Tap: '',
        Trill: '',
        LatFric: '',
        LatApprox: '',
        LatTap: '',
        Implosive: '',
        Click: ''
      },
      Uvu: {
        Stop: '',
        Nasal: '',
        Affricate: '',
        Fricative: '',
        Approximant: '',
        Tap: '',
        Trill: '',
        LatFric: '',
        LatApprox: '',
        LatTap: '',
        Implosive: '',
        Click: ''
      },
      Pha: {
        Stop: '',
        Nasal: '',
        Affricate: '',
        Fricative: '',
        Approximant: '',
        Tap: '',
        Trill: '',
        LatFric: '',
        LatApprox: '',
        LatTap: '',
        Implosive: '',
        Click: ''
      },
      Glo: {
        Stop: '',
        Nasal: '',
        Affricate: '',
        Fricative: '',
        Approximant: '',
        Tap: '',
        Trill: '',
        LatFric: '',
        LatApprox: '',
        LatTap: '',
        Implosive: '',
        Click: ''
      }
    },
    regExTest: {
      Den: {
        Stop: [],
        Nasal: [],
        Affricate: [],
        Fricative: ['θ', 'ð'],
        Approximant: [],
        Tap: [],
        Trill: [],
        LatFric: [],
        LatApprox: [],
        LatTap: [],
        Implosive: [],
        Click: ['ǀ']
      },
      Bil: {
        Stop: ['p', 'b'],
        Nasal: ['m'],
        Affricate: ['pɸ', 'bβ'],
        Fricative: ['ɸ', 'β'],
        Approximant: [],
        Tap: [],
        Trill: ['ʙ'],
        LatFric: [],
        LatApprox: [],
        LatTap: [],
        Implosive: ['ɓ'],
        Click: ['ʘ']
      },
      LabDen: {
        Stop: [],
        Nasal: ['ɱ'],
        Affricate: [],
        Fricative: ['f', 'v'],
        Approximant: ['ʋ'],
        Tap: ['ⱱ'],
        Trill: [],
        LatFric: [],
        LatApprox: [],
        LatTap: [],
        Implosive: [],
        Click: []
      },
      Alveolar: {
        Stop: ['t', 'd'],
        Nasal: ['n'],
        Affricate: ['ts', 'dz'],
        Fricative: ['s', 'z'],
        Approximant: ['ɹ'],
        Tap: ['ɾ'],
        Trill: ['r'],
        LatFric: ['ɬ', 'ɮ'],
        LatApprox: ['ɫ', 'l'],
        LatTap: ['ɺ'],
        Implosive: ['ɗ'],
        Click: ['ǁ']
      },
      Pos: {
        Stop: [],
        Nasal: [],
        Affricate: ['tʃ', 'dʒ'],
        Fricative: ['ʃ', 'ʒ'],
        Approximant: [],
        Tap: [],
        Trill: [],
        LatFric: [],
        LatApprox: [],
        LatTap: [],
        Implosive: [],
        Click: ['ǃ']
      },
      Flex: {
        Stop: ['ʈ', 'ɖ'],
        Nasal: ['ɳ'],
        Affricate: [],
        Fricative: ['ʂ', 'ʐ'],
        Approximant: ['ɻ'],
        Tap: ['ɽ'],
        Trill: [],
        LatFric: [],
        LatApprox: ['ɭ'],
        LatTap: [],
        Implosive: [],
        Click: []
      },
      AlvPal: {
        Stop: [],
        Nasal: [],
        Affricate: ['tɕ', 'dʑ'],
        Fricative: ['ɕ', 'ʑ'],
        Approximant: [],
        Tap: [],
        Trill: [],
        LatFric: [],
        LatApprox: [],
        LatTap: [],
        Implosive: [],
        Click: []
      },
      Pal: {
        Stop: ['c', 'ɟ'],
        Nasal: ['ɲ'],
        Affricate: [],
        Fricative: ['ɲ'],
        Approximant: ['j'],
        Tap: [],
        Trill: [],
        LatFric: [],
        LatApprox: ['ʎ'],
        LatTap: [],
        Implosive: ['ʄ'],
        Click: ['ǂ']
      },
      Vel: {
        Stop: ['k', 'g'],
        Nasal: ['ŋ'],
        Affricate: ['kx', 'gɣ'],
        Fricative: ['x', 'ɣ'],
        Approximant: ['ɰ'],
        Tap: [],
        Trill: [],
        LatFric: [],
        LatApprox: ['ʟ'],
        LatTap: [],
        Implosive: ['ɠ'],
        Click: []
      },
      LabVel: {
        Stop: [],
        Nasal: [],
        Affricate: [],
        Fricative: [],
        Approximant: ['ʍ', 'w'],
        Tap: [],
        Trill: [],
        LatFric: [],
        LatApprox: [],
        LatTap: [],
        Implosive: [],
        Click: []
      },
      Uvu: {
        Stop: ['q', 'ɢ'],
        Nasal: ['ɴ'],
        Affricate: ['qχ', 'ɢʁ'],
        Fricative: ['χ', 'ʁ'],
        Approximant: [],
        Tap: [],
        Trill: ['ʀ'],
        LatFric: [],
        LatApprox: [],
        LatTap: [],
        Implosive: ['ʛ'],
        Click: []
      },
      Pha: {
        Stop: ['ʡ'],
        Nasal: [],
        Affricate: ['ʡʢ'],
        Fricative: ['ħ'],
        Approximant: ['ʕ'],
        Tap: [],
        Trill: ['ʜ', 'ʢ'],
        LatFric: [],
        LatApprox: [],
        LatTap: [],
        Implosive: [],
        Click: []
      },
      Glo: {
        Stop: ['ʔ'],
        Nasal: [],
        Affricate: ['ʔh'],
        Fricative: ['h', 'ɦ'],
        Approximant: [],
        Tap: [],
        Trill: [],
        LatFric: [],
        LatApprox: [],
        LatTap: [],
        Implosive: [],
        Click: []
      }
    }
  };
  constInit(langConst: string[]) {
    const regEx: Function = (newRegEx: string, constName: string) => new RegExp(newRegEx).test(constName) ? constName : '';
    const { consonant, regExTest } = this.consonantDefaults;
    langConst.map(constName => {
      Object.keys(consonant).forEach(place => {
        Object.keys(place).forEach(manner => {
          const regExVar: any[] = regExTest[place][manner];
          const getRegEx: String = (regExVar[1]) ? `(${regExVar.join('|')})` : regExVar[0];
          consonant[place][manner] = regEx(`[${getRegEx}]`, constName);
        });
      });
    });
    return consonant;
  }
  constructor() {}

  ngOnInit() {
    constInit(this.constInit);
  }

}
