describe('The Johi lexicon', () => {
  it('should display the lexicon table', () => {
    $('a[href="/lexicon"]').click();

    /** Checks the row count */
    $('#lexicon-table')
      .$$('tr').then(allRows => {
        expect(allRows.length)
          .toEqual(3818);
      });

    /** Checks the column count */
    $('#lexicon-table')
      .$$('tr').get(0)
      .$$('th').then(allColumns => {
        expect(allColumns.length)
          .toEqual(6);
      });
  });

  it('should sort lexicon by Johi words', () => {
    /** Clicks the  */
    'Sort By Johian Words'
    button
    $('#JohianSort').click();

    /** Checks the first Johian word */
    $('#lexicon-table')
      .$$('tr').get(1)
      .$$('td').then(firstWord => {
        expect(firstWord[0].getText())
          .toBe('A');
      });
  });

  it('should sort lexicon by English words', () => {
    /** Clicks the  */
    'Sort By English Words'
    button
    $('#EnglishSort').click();

    /** Checks the first English word */
    $('#lexicon-table')
      .$$('tr').get(1)
      .$$('td').then(firstWord => {
        expect(firstWord[3].getText())
          .toBe('Abandon');
      });
  });

  it('should sort lexicon by a single Johi letter', () => {
    /** Clicks the  */
    'Sort By Johian Words'
    button
    $('#JohianSort').click();

    /** Has the doctionary sort by  */
    'B'
    $('#johi-letter')
      .$$('tr').get(1)
      .$$('td').get(1)
      .click();

    /** Checks the first Johian word */
    $('#lexicon-table')
      .$$('tr').get(1)
      .$$('td').then(firstWord => {
        expect(firstWord[0].getText())
          .toBe('Ba');
      });

    /** Has the doctionary sort by all letters */
    $('#johi-letter')
      .$$('tr').get(0)
      .$$('th').get(0)
      .click();

    /** Checks the first Johian word */
    $('#lexicon-table')
      .$$('tr').get(1)
      .$$('td').then(firstWord => {
        expect(firstWord[0].getText())
          .toBe('A');
      });
  });
});
