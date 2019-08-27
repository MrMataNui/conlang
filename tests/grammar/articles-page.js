describe('The \'articles\' page', () => {
  it('should show definite articles', () => {
    browser
      .actions()
      .mouseMove($('.dropdown'))
      .perform();
    expect($('.dropbtn').isDisplayed()).toBeTruthy();
    $('a[href="/articles"]').click();

    const definiteArticleTable = $('#def-art').$('table');

    definiteArticleTable
      .$$('tr').then(rows => {
        expect(rows.length).toBe(5);
      });

    definiteArticleTable
      .$$('tr').get(0)
      .$$('th').then(columns => {
        expect(columns.length).toBe(3);
      });

    definiteArticleTable
      .$$('tr').get(1)
      .$$('td').then(columns => {
        expect(columns.length).toBe(5);
      });

    definiteArticleTable
      .$$('tr').get(1)
      .$$('td').get(2)
      .getText().then(cell => {
        expect(cell).toContain('ȼo');
        expect(cell).toContain('/ʤo/');
      });
  });
});
