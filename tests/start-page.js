describe('The Johi dictionary', () => {
  browser.get('http://localhost:4200/');
  it('should start the app', () => {
    $('.head-langname').getText()
      .then(langname => {
        expect(langname).toEqual('The Language of Johi');
      });

    $('.center')
      .$$('p').getText()
      .then(para => {
        expect(para[0]).toEqual('Natively known as: Ȼoʯi');
        expect(para[1]).toEqual('/ʤoˈʔi/');
      });

    $('#lang-sentence')
      .$$('p').getText()
      .then(para => {
        expect(para[0]).toContain('and he stood');
        expect(para[1]).toContain('ƙä ɥep ɥaƙ');
      });

    $('#lang-sentence')
      .$('.IPA').getText()
      .then(IPA => {
        expect(IPA).toContain('caː hʷep hʷac');
      });

    $('#lang-sentence')
      .$('.word-order').getText()
      .then(wordOrder => {
        expect(wordOrder).toContain('and he his');
      });
  });
});
