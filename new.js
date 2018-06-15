angular
  .module("myApp", [])
  .controller("myCtrl", $scope => {
    $scope.getId = selector => document.getElementById(selector);
    $scope.manner = {
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
    $scope.tableManner = {
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
    $scope.getDefaults2 = langConst => {
      let tableManner = $scope.tableManner;
      const consonant = $scope.constInit(langConst);
      const manner = ['Stop', 'Nasal', 'Affricate', 'Fricative', 'Approximant', 'Tap', 'Trill', 'Lateral fricative', 'Lateral approximant', 'Lateral tap', 'Implosive', 'Click'];
      for (let i in manner) {
        for (let constPlace in consonant) {
          for (let constManner in consonant[constPlace]) {
            if (constManner == manner[i]) {
              tableManner[constManner].push(consonant[constPlace][constManner]);
            }
          }
        }
      }
      return tableManner;
    }
    $scope.getDefaults = manner => {
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
    $scope.constInit = langConst => {
      const regEx = (newRegEx, constName) => {
        let testRegEx = (newRegEx) ? new RegExp(newRegEx) : '';
        testRegEx = (testRegEx) ? testRegEx.test(constName) : '';
        if (testRegEx) {
          console.log(newRegEx, testRegEx, constName);
        }
        return testRegEx ? constName : '';
      }
      let defaults = $scope.getDefaults($scope.manner);
      langConst.map(constName => {
        for (let place in defaults.consonant) {
          for (let manner in defaults.consonant[place]) {
            let regExVar = defaults.regExTest[place][manner];
            let getRegEx = (regExVar[1]) ? `(${regExVar.join('|')})` : (regExVar[0]) ? regExVar[0] : '';
            defaults.consonant[place][manner] = regEx(getRegEx, constName);
          }
        }
      });
      console.log('defaults.consonant');
      console.log(defaults.consonant);
      return defaults.consonant;
    }
  });
