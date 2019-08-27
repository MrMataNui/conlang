describe('The \'morphology\' page', () => {
  it('should show noun morphology', () => {
    browser
      .actions()
      .mouseMove($('.dropdown'))
      .perform();
    expect($('.dropbtn').isDisplayed()).toBeTruthy();
    $('a[href="/morphology"]').click();

    const nounMorphologyTable = $('#noun-morph').$('table');

    nounMorphologyTable
      .$$('tr').then(rows => {
        expect(rows.length).toBe(5);
      });

    nounMorphologyTable
      .$$('tr').get(0)
      .$$('th').then(columns => {
        expect(columns.length).toBe(3);
      });

    nounMorphologyTable
      .$$('tr').get(1)
      .$$('td').then(columns => {
        expect(columns.length).toBe(5);
      });

    nounMorphologyTable
      .$$('tr').get(1)
      .$$('td').get(2)
      .getText().then(cell => {
        expect(cell).toContain('pü');
        expect(cell).toContain('/puː/');
      });
  });

  it('should derivational morphology', () => {
    const derivationalMorphologyTable = $('#lang-der-morph').$('table');

    derivationalMorphologyTable
      .$$('tr').then(rows => {
        expect(rows.length).toBe(11);
      });

    derivationalMorphologyTable
      .$$('tr').get(0)
      .$$('th').then(columns => {
        expect(columns.length).toBe(1);
      });

    derivationalMorphologyTable
      .$$('tr').get(1)
      .$$('td').then(columns => {
        expect(columns.length).toBe(2);
      });

    derivationalMorphologyTable
      .$$('tr').get(1)
      .$$('td').get(1)
      .getText().then(cell => {
        expect(cell).toContain('-(i)ȼü');
        expect(cell).toContain('/iʤuː/');
      });
  });
});
