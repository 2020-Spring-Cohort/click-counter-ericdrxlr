describe ('Click Counter', function()
{
    let sut;

    beforeEach(function()
    {
        sut = new ClickCounter();
    })
    describe('usersClicks', function()
    {
        it('has initial value of 0', function()
        {
            expect(sut.usersClicks).toBe(0)
        });
    })
    describe('get users clicks', function()
    {
        it('returns value of usersClicks', function()
        {
            expect(sut.getUsersClicks()).toBe(0)
        });
    })
    describe('clickincrementor', function()
    {
        it('increases value of usersClicks by 1', function()
        {
            sut.clickIncrementor()
            expect(sut.usersClicks).toBe(1)
        });
    })
}) 
