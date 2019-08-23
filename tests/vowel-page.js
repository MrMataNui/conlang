describe('The \'vowels\' page', () => {
  it('should load the inventory', () => {
    $('a[href="/vowels"]').click();

    $('#vow-inv').$('span')
      .getText().then(vowelInventory => {
        expect(vowelInventory).toEqual('/a aː e eː i iː o oː u uː ɯ/');
      });

    $('#dipthongs').$('span')
      .getText().then(vowelDipthongs => {
        expect(vowelDipthongs).toEqual('None');
      });
  });

  it('should load the vowel table', () => {
    $('#vowelGraph')
      .$$('span.IPA').then(allItems => {
        const newItem1 = [];
        const newItem2 = [];
        allItems.forEach(eachItem => {
          newItem2.push(
            eachItem.getText().then(divText => {
              if (/\w/.test(divText)) {
                newItem1.push(divText);
              }
              return newItem1;
            })
          );
        });
        Promise.all(newItem2).then(() => {
          expect(newItem1.length).toBe(5);
          expect(newItem1)
            .toEqual(['i iː', 'ɯ • u uː', 'e eː', 'o oː', 'a aː']);
        });
      });
  });

  it('should load the vowel symbols', () => {
    /** Gets the vowel symbols rows */
    $('#vowel-symbols')
      .$$('tr').then(allRows => {
        expect(allRows.length).toEqual(12);
      });

    /** Gets the vowel symbols columns */
    $('#vowel-symbols')
      .$$('tr').get(0)
      .$$('th').then(allColumns => {
        expect(allColumns.length).toEqual(2);
      });
  });
});
