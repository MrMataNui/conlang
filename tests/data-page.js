describe('The \'data\' page', () => {
  it('should load the \'data\' table', () => {
    $('a[href="/data"]').click();

    $('#letter-occourances')
      .$$('tr').then(row => {
        expect(row.length).toBe(32);
      });

    $('#letter-occourances')
      .$$('tr').get(0)
      .$$('th').then(column => {
        expect(column.length).toBe(2);
      });
  });
});
