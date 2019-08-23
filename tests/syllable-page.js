describe('The \'syllables\' page', () => {
  it('should load the syllable structure', () => {
    $('a[href="/syllables"]').click();

    $('#syll-pattern').$('td')
      .getText().then(syllablePattern => {
        expect(syllablePattern).toEqual('(C)V(C)');
      });

    $('#syll-stress').$('td')
      .getText().then(syllableStress => {
        expect(syllableStress).toContain('Second');
      });

    $('#syll-wordStart').$('td')
      .getText().then(WordInitialConsonants => {
        expect(WordInitialConsonants)
          .toBe('b, d, c, g, hʷ, j, k, m, p, t, ʃ, ɖ, ɣ, ɲ, ɳ, ʂ, ʈ, ʍ');
      });

    $('#syll-wordMid').$('td')
      .getText().then(MidWordConsonants => {
        expect(MidWordConsonants)
          .toBe('b, d, dj, c, g, j, jk, k, kp, m, mj, mp, ʃ, ɖ, ɣ, ɲ, ɳ, ɽ, ʂ, ʈ, ʔ');
      });

    $('#syll-wordFinal').$('td')
      .getText().then(WordFinalConsonants => {
        expect(WordFinalConsonants)
          .toBe('b, d, c, g, j, m, p, t, ɖ, ɣ, ɳ, ʂ');
      });
  });

  it('should load the \'phonological rules\' table', () => {
    $('#phonRules')
      .$$('tr').get(0)
      .$$('th').then(row => {
        expect(row.length).toBe(3);
      });

    $('#phonRules')
      .$$('tr').get(1)
      .$$('td').then(phonRuleText => {
        expect(phonRuleText[0].getText())
          .toBe('Guide to phonological rules: "e → i / _g" means ‘e’ turns into ‘i’ before a ‘g’.');
        expect(phonRuleText[2].getText())
          .toBe('a → aː / _C#');
      });
  });
});
