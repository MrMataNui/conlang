describe('The \'Consonants\' page', () => {
  it('should load the inventory', () => {
    $('a[href="/consonants"]').click();

    const consonantInventory = $('#cons-inv').$('span');
    expect(consonantInventory.getText())
      .toEqual('/m ɳ ɲ b ʈ ɖ g ʔ ʃ c ʂ x hʷ j ʍ ɽ/');
  });

  it('should load the consonant table', () => {
    /** Gets the consonant table rows */
    $('#constTable')
      .$$('tr').then(allRows => {
        expect(allRows.length).toEqual(13);
      });

    /** Gets the consonant table columns */
    $('#constTable')
      .$$('tr').get(0)
      .$$('th').then(allColumns => {
        expect(allColumns.length).toEqual(14);
      });
  });

  it('should load the consonant symbols', () => {
    /** Gets the consonant symbols rows */
    $('#const-symbols')
      .$$('tr').then(allRows => {
        expect(allRows.length).toEqual(20);
      });

    /** Gets the consonant symbols columns */
    $('#const-symbols')
      .$$('tr').get(0)
      .$$('th').then(allColumns => {
        expect(allColumns.length).toEqual(2);
      });
  });
});
