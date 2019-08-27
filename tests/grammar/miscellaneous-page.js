describe('The \'miscellaneous grammar\' page', () => {
  it('should show perfect and progressive aspects', () => {
    browser
      .actions()
      .mouseMove($('.dropdown'))
      .perform();
    expect($('.dropbtn').isDisplayed()).toBeTruthy();
    $('a[href="/grammar-misc"]').click();

    $('#lang-perf')
      .$$('h3').getText()
      .then(titles => {
        expect(titles[0]).toBe('Perfect aspect');
        expect(titles[1]).toBe('Progressive aspect');
      });

    $('#lang-perf')
      .$$('p').getText()
      .then(descriptions => {
        expect(descriptions[0]).toBe('‘have studied’ No perfect aspect.');
        expect(descriptions[1]).toBe('‘am studying’ Uses the word ‘now’ before main verb.');
      });
  });

  it('should derivational show imperative', () => {
    $('#lang-imp')
      .$$('p').getText()
      .then(descriptions => {
        expect(descriptions[0]).toBe('‘study!’ (as a command)');
        expect(descriptions[1]).toBe('Suffix: [ -e /-e/ ]');
      });
  });

  it('should derivational show negation', () => {
    $('#lang-neg')
      .$$('p').getText()
      .then(descriptions => {
        expect(descriptions[0]).toBe('Suffix on verb: [ -(u)ȝ /-(u)j/ ]');
        expect(descriptions[1]).toBe('Tense affixes come between the root verb and the negative affix.');
      });
  });
});
