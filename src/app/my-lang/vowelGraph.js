/**
 * Graph of the conlang's vowels
 * @param {Array} langVowel
 *                list of vowels for the conlang
 * @returns {string}
 *                HTML string for the vowel graph
 * ǳ ǲ ǳ
 * ỻ ỻ
 * ꭡ
 * ꝤꝦ
 * ƍ
 */
function vowelGraph(langVowel) {
  let vowel = vowInit(langVowel);
  const highlight = (vow1, vow2) => (vow1 || vow2) ? 'vowel1' : 'vowel2';
  return `<tr><td>
    <div style='top:8px; left:38px;'> <span class='${highlight(vowel.a, vowel.a1)}'>${vowel.a}&#160;&#160;${vowel.a1}</span> </div>
    <div style='top:8px; left:163px;'> <span class='${highlight(vowel.b, vowel.b1)}'>${vowel.b}&#160;&#160;${vowel.b1}</span> </div>
    <div style='top:8px; left:285px;'> <span class='${highlight(vowel.c, vowel.c1)}'>${vowel.c}&#160;&#160;${vowel.c1}</span> </div>
    <div style='top:39px; left:120px;'> <span class='${highlight(vowel.d, vowel.d1)}'>${vowel.d}&#160;&#160;${vowel.d1}</span> </div>
    <div style='top:39px; left:175px;'> <span class='${highlight(vowel.e, vowel.e1)}'>${vowel.e}&#160;&#160;${vowel.e1}</span> </div>
    <div style='top:39px; left:230px;'> <span class='${highlight(vowel.f, vowel.f1)}'>${vowel.f}&#160;&#160;${vowel.f1}</span> </div>
    <div style='top:72px; left:74px;'> <span class='${highlight(vowel.g, vowel.g1)}'>${vowel.g}&#160;&#160;${vowel.g1}</span> </div>
    <div style='top:72px; left:181px;'> <span class='${highlight(vowel.h, vowel.h1)}'>${vowel.h}&#160;&#160;${vowel.h1}</span> </div>
    <div style='top:72px; left:285px;'> <span class='${highlight(vowel.i, vowel.i1)}'>${vowel.i}&#160;&#160;${vowel.i1}</span> </div>
    <div style='top:103px; left:95px;'> <span class='${highlight(vowel.j, vowel.j1)}'>${vowel.j}&#160;&#160;${vowel.j1}</span> </div>
    <div style='top:103px; left:197px;'> <span class='${highlight(vowel.k, vowel.k1)}'>${vowel.k}&#160;&#160;${vowel.k1}</span> </div>
    <div style='top:103px; left:285px;'> <span class='${highlight(vowel.l, vowel.l1)}'>${vowel.l}&#160;&#160;${vowel.l1}</span> </div>
    <div style='top:136px; left:119px;'> <span class='${highlight(vowel.m, vowel.m1)}'>${vowel.m}&#160;&#160;${vowel.m1}</span> </div>
    <div style='top:136px; left:202px;'> <span class='${highlight(vowel.o, vowel.o1)}'>${vowel.o}&#160;&#160;${vowel.o1}</span> </div>
    <div style='top:136px; left:285px;'> <span class='${highlight(vowel.p, vowel.p1)}'>${vowel.p}&#160;&#160;${vowel.p1}</span> </div>
    <div style='top:167px; left:133px;'> <span class='${highlight(vowel.q, vowel.q1)}'>${vowel.q}&#160;&#160;${vowel.q1}</span> </div>
    <div style='top:167px; left:212px;'> <span class='${highlight(vowel.r, vowel.r1)}'>${vowel.r}&#160;&#160;${vowel.r1}</span> </div>
    <div style='top:199px; left:160px;'> <span class='${highlight(vowel.s, vowel.s1)}'>${vowel.s}&#160;&#160;${vowel.s1}</span> </div>
    <div style='top:199px; left:223px;'> <span class='${highlight(vowel.t, vowel.t1)}'>${vowel.t}&#160;&#160;${vowel.t1}</span> </div>
    <div style='top:199px; left:286px;'> <span class='${highlight(vowel.u, vowel.u1)}'>${vowel.u}&#160;&#160;${vowel.u1}</span> </div>
  </td></tr>`;
}
