function getDefaults() {
  let manner = {
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
  };
  return {
    consonant: {
      Den: manner,
      Bil: manner,
      LabDen: manner,
      Alveolar: manner,
      Pos: manner,
      Flex: manner,
      AlvPal: manner,
      Pal: manner,
      Vel: manner,
      LabVel: manner,
      Uvu: manner,
      Pha: manner,
      Glo: manner
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
}

function constInit(langConst): Object {
  const regEx: String = (newRegEx: String, constName: String) => new RegExp(newRegEx).test(constName) ? constName : '';
  let consonant = getDefaults().consonant;
  let regExTest = getDefaults().regExTest;
  langConst.map(constName => {
    for (let place in consonant) {
      for (let manner in consonant[place]) {
        let regExVar: Array = regExTest[place][manner];
        let getRegEx: String = (regExVar[1]) ? `(${regExVar.join('|')})` : regExVar[0];
        consonant[place][manner] = regEx(`[${getRegEx}]`, constName);
      }
    }
  });
  return consonant;
}

function constGraph(langConst: Array): Object[] {
  const consonant: Object = this.constInit(langConst);
  const highlight: Function = (vow1: string, vow2: string) => (vow1 || vow2) ? 'vowel1' : 'vowel2';
  const manner: string[] = ['Stop', 'Nasal', 'Affricate', 'Fricative', 'Approximant', 'Tap', 'Trill', 'Lateral fricative', 'Lateral approximant', 'Lateral tap', 'Implosive', 'Click'];
  const place: string[] = ['Postalveolar', 'Retroflex', 'Alveolo-palatal', 'Palatal', 'Velar', 'Labio-velar', 'Uvular', 'Pharyngeal', 'Glottal'];
  let tableManner: Object = {
    Stop: [],
    Nasal: [],
    Affricate: [],
    Fricative: [],
    Approximant: [],
    Tap: [],
    Trill: [],
    LatFric: [],
    LatApprox: [],
    LatTap: [],
    Implosive: [],
    Click: []
  };
  let tablePlace: Object = getDefaults().consonant;
  for (let i in manner) {
    for (let constPlace in consonant) {
      for (let constManner in consonant[constPlace]) {
        if (constManner == manner[i]) {
          tableManner[constManner].push(consonant[constPlace][constManner]);
        }
      }
    }
  }

  return [{}];
}
/*
  consonant.Bil.Stop = regEx('[pb ]{1, 3}', constName);
  consonant.Alveolar.Stop = regEx('[td ]{1, 3}', constName);
  consonant.Flex.Stop = regEx('[ʈɖ ]{1, 3}', constName);
  consonant.Pal.Stop = regEx('[cɟ ]{1, 3}', constName);
  consonant.Vel.Stop = regEx('[kɡ ]{1, 3}', constName);
  consonant.Uvu.Stop = regEx('[qɢ ]{1, 3}', constName);
  consonant.Pha.Stop = regEx('ʡ', constName);
  consonant.Glo.Stop = regEx('ʔ', constName);
  consonant.Bil.Nasal = regEx('[m̥m ]', constName);
  consonant.LabDen.Nasal = regEx('[ɱ ]', constName);
  consonant.Alveolar.Nasal = regEx('[n̥n ]', constName);
  consonant.Flex.Nasal = regEx('[ɳ ]', constName);
  consonant.Pal.Nasal = regEx('[ɲ̊ɲ ]', constName);
  consonant.Vel.Nasal = regEx('[ŋ̊ŋ ]', constName);
  consonant.Uvu.Nasal = regEx('ɴ', constName);
  consonant.Bil.Affricate = regEx('(pɸ|bβ)', constName);
  consonant.Alveolar.Affricate = regEx('(ts|dz)', constName);
  consonant.Pos.Affricate = regEx('(tʃ|dʒ)', constName);
  consonant.AlvPal.Affricate = regEx('(tɕ|dʑ)', constName);
  consonant.Vel.Affricate = regEx('(kx|ɡɣ)', constName);
  consonant.Uvu.Affricate = regEx('(qχ|ɢʁ)', constName);
  consonant.Pha.Affricate = regEx('ʡʢ', constName);
  consonant.Glo.Affricate = regEx('ʔh', constName);
  consonant.Den.Fricative = regEx('[θ ð]', constName);
  consonant.Bil.Fricative = regEx('[ɸ β]', constName);
  consonant.LabDen.Fricative = regEx('[f v]', constName);
  consonant.Alveolar.Fricative = regEx('[s z]', constName);
  consonant.Pos.Fricative = regEx('[ʃ ʒ]', constName);
  consonant.Flex.Fricative = regEx('[ʂ ʐ]', constName);
  consonant.AlvPal.Fricative = regEx('[ɕ ʑ]', constName);
  consonant.Pal.Fricative = regEx('[ç ʝ]', constName);
  consonant.Vel.Fricative = regEx('[x ɣ]', constName);
  consonant.Uvu.Fricative = regEx('[χ ʁ]', constName);
  consonant.Pha.Fricative = regEx('[ħ]', constName);
  consonant.Glo.Fricative = regEx('[h ɦ]', constName);
  consonant.LabDen.Approximant = regEx('[ʋ]', constName);
  consonant.Alveolar = regEx('[ʋ]', constName);
  consonant.Pos = regEx('[ʋ]', constName);
  consonant.Pal = regEx('[ʋ]', constName);
  consonant.Vel = regEx('[ʋ]', constName);
  consonant.LabVel = regEx('[ʋ]', constName);
  consonant.Pha = regEx('[ʋ]', constName);
  consonant.Den = regEx('[ʋ]', constName);
  consonant.Bil = regEx('[ʋ]', constName);
  consonant.Alveolar = regEx('[ʋ]', constName);
  consonant.Pos = regEx('[ʋ]', constName);
  consonant.Pal = regEx('[ʋ]', constName);
  consonant.Vel = regEx('[ʋ]', constName);
  consonant.LabVel = regEx('[ʋ]', constName);
  consonant.Pha = regEx('[ʋ]', constName);
  consonant.Den = regEx('[ʋ]', constName);
  consonant.Bil = regEx('[ʋ]', constName);
  consonant.Alveolar = regEx('[ʋ]', constName);
  consonant.Pos = regEx('[ʋ]', constName);
  consonant.Pal = regEx('[ʋ]', constName);
  consonant.Vel = regEx('[ʋ]', constName);
  consonant.LabVel = regEx('[ʋ]', constName);
  consonant.Pha = regEx('[ʋ]', constName);
*/
