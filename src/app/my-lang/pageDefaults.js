const vowelDefault = () => ({
  a: '',
  b: '',
  c: '',
  d: '',
  e: '',
  f: '',
  g: '',
  h: '',
  i: '',
  j: '',
  k: '',
  l: '',
  m: '',
  n: '',
  o: '',
  p: '',
  q: '',
  r: '',
  s: '',
  t: '',
  u: '',
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
  u1: ''
});

/**
 * Turns the vowel array into an object
 * @param {Array} langVowel
 *                list of vowels for the conlang
 * @returns {object}
 *                object for the vowels
 */
function vowInit(langVowel) {
  let vowel = vowelDefault();
  langVowel.map(vowelName => {
    switch (true) {
      case /i/.test(vowelName):
        vowel.a = vowelName;
        break;
      case /y/.test(vowelName):
        vowel.a1 = vowelName;
        break;
      case /ɨ/.test(vowelName):
        vowel.b = vowelName;
        break;
      case /ʉ/.test(vowelName):
        vowel.b1 = vowelName;
        break;
      case /ɯ/.test(vowelName):
        vowel.c = vowelName;
        break;
      case /u/.test(vowelName):
        vowel.c1 = vowelName;
        break;
      case /ɪ/.test(vowelName):
        vowel.d = vowelName;
        break;
      case /ʏ/.test(vowelName):
        vowel.d1 = vowelName;
        break;
      case /ɪ̈/.test(vowelName):
        vowel.e = vowelName;
        break;
      case /ʊ̈/.test(vowelName):
        vowel.e1 = vowelName;
        break;
      case /ɯ̽/.test(vowelName):
        vowel.f = vowelName;
        break;
      case /ʊ/.test(vowelName):
        vowel.f1 = vowelName;
        break;
      case /e/.test(vowelName):
        vowel.g = vowelName;
        break;
      case /ø/.test(vowelName):
        vowel.g1 = vowelName;
        break;
      case /ɘ/.test(vowelName):
        vowel.h = vowelName;
        break;
      case /ɵ/.test(vowelName):
        vowel.h1 = vowelName;
        break;
      case /ɤ/.test(vowelName):
        vowel.i = vowelName;
        break;
      case /o/.test(vowelName):
        vowel.i1 = vowelName;
        break;
      case /e̞/.test(vowelName):
        vowel.j = vowelName;
        break;
      case /ø̞/.test(vowelName):
        vowel.j1 = vowelName;
        break;
      case /ə/.test(vowelName):
        vowel.k = vowelName;
        break;
      case /ɵ̞/.test(vowelName):
        vowel.k1 = vowelName;
        break;
      case /ɤ̞/.test(vowelName):
        vowel.l = vowelName;
        break;
      case /o̞/.test(vowelName):
        vowel.l1 = vowelName;
        break;
      case /ɛ/.test(vowelName):
        vowel.m = vowelName;
        break;
      case /œ/.test(vowelName):
        vowel.m1 = vowelName;
        break;
      case /ɜ/.test(vowelName):
        vowel.n = vowelName;
        break;
      case /ɞ/.test(vowelName):
        vowel.n1 = vowelName;
        break;
      case /ʌ/.test(vowelName):
        vowel.o = vowelName;
        break;
      case /ɔ/.test(vowelName):
        vowel.o1 = vowelName;
        break;
      case /æ/.test(vowelName):
        vowel.p = vowelName;
        break;
      case /i/.test(vowelName):
        vowel.p1 = vowelName;
        break;
      case /ɐ/.test(vowelName):
        vowel.q = vowelName;
        break;
      case /ɞ̞/.test(vowelName):
        vowel.q1 = vowelName;
        break;
      case /a/.test(vowelName):
        vowel.s = vowelName;
        break;
      case /ɶ/.test(vowelName):
        vowel.s1 = vowelName;
        break;
      case /ä/.test(vowelName):
        vowel.t = vowelName;
        break;
      case /ɒ̈/.test(vowelName):
        vowel.t1 = vowelName;
        break;
      case /ɑ/.test(vowelName):
        vowel.u = vowelName;
        break;
      case /ɒ/.test(vowelName):
        vowel.u1 = vowelName;
        break;
    }
  });
  return vowel;
};
