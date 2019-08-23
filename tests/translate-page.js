describe('The Johi translator', () => {
  it('should translate a scentence', () => {
    $('a[href="/translate"]').click();
    $('#translate-button').click();

    $('#wordOrder').$('i')
      .getText().then(wordOrder => {
        expect(wordOrder)
          .toEqual('Start typing to see translation of words');
      });
    $('#translation').$('b')
      .getText().then(wordOrder => {
        expect(wordOrder)
          .toEqual('Ʊỻ eñiȝ ʈo ȝö uɥoỻe ƙuʈü ɥüꝡ');
      });
    $('#ipa').$('p')
      .getText().then(IPA => {
        expect(IPA)
          .toEqual('/ɯx eɳij ʈo joː uʍoˈxe cuˈʈuː huːhʷi/');
      });
  });
  it('should translate a scentence', () => {
    $('#eng-phrase').clear()
      .sendKeys('I want a car');

    $('#translate-button').click();

    $('#wordOrder').$('i')
      .getText().then(wordOrder => {
        expect(wordOrder)
          .toEqual('I want car');
      });
    $('#translation').$('b')
      .getText().then(wordOrder => {
        expect(wordOrder)
          .toEqual('Ꝡʯï ƙub ɥodo');
      });
    $('#ipa').$('p')
      .getText().then(IPA => {
        expect(IPA)
          .toEqual('/hʷiʔiː cub hʷoˈɖo/');
      });
  });
});
