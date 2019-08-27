describe('The \'grammar\' page', () => {
  it('should show the word order', () => {
    browser
      .actions()
      .mouseMove($('.dropdown'))
      .perform();
    expect($('.dropbtn').isDisplayed()).toBeTruthy();
    $('a[href="/grammar"]').click();

    $('#main-word-order').$('span')
      .getText().then(mainWordOrder => {
        expect(mainWordOrder)
          .toEqual('[ Subject-Oblique-Object-Verb ]');
      });

    $('#word-order-example')
      .$$('span').then(examples => {
        expect(examples[0].getText())
          .toContain('(Mary) Sub (opened) Verb');
        expect(examples[1].getText())
          .toContain('(Mary) Sub (with a key) Obl');
      });

    $('#adjective-order')
      .$('span').getText()
      .then(text => {
        expect(text)
          .toEqual('[ Adjectives are positioned before the noun ]');
      });

    $('#adposition')
      .$('span').getText()
      .then(text => {
        expect(text).toEqual('[ Postpositions ]');
      });
  });

  it('should show personal pronouns', () => {
    const personalPronounTable = $('#pers-pronouns').$('table');

    personalPronounTable
      .$$('tr').then(rows => {
        expect(rows.length).toBe(7);
      });

    personalPronounTable
      .$$('tr').get(0)
      .$$('th').then(columns => {
        expect(columns.length).toBe(5);
      });

    personalPronounTable
      .$$('tr').$$('th').then(headers => {
        expect(headers.length).toBe(13);
      });

    personalPronounTable
      .$$('tr')
      .$$('td').get(0)
      .getText().then(cell => {
        expect(cell).toContain('I');
        expect(cell).toContain('i /i/');
      });
  });

  it('should show Verbs', () => {
    const verbTable = $('#lang-verbs').$('table');

    verbTable
      .$$('tr').then(rows => {
        expect(rows.length).toBe(9);
      });

    verbTable
      .$$('tr').get(1)
      .$$('td').then(columns => {
        expect(columns.length).toBe(4);
      });

    verbTable
      .$$('tr').get(2)
      .$$('td').then(columns => {
        expect(columns.length).toBe(5);
      });

    verbTable
      .$$('tr').get(3)
      .$$('td').get(1)
      .getText().then(cell => {
        expect(cell).toContain('-(i)b');
        expect(cell).toContain('ȼiꞇib');
      });
  });
});
