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
    describe('ClickIncrementor', function()
    {
        it('increases value of usersClicks by 1', function()
        {
            sut.clickIncrementor()   //Act
            expect(sut.usersClicks).toBe(1)
        });
    })
    describe('get click companion count', function()
    {
        it('returns value of 0', function()
        {
            expect(sut.getClickCompanionCount()).toBe(0)
        });
    })
    describe('click companion value', function()
    {
        it('returns cost of 100', function()
        {
            expect(sut.getClickCompanionValue()).toBe(100);
        });
    })
    describe('purchase clicking companion', function()
    {
        it('increases click companion count to 1', function()
        {
            sut.purchaseClickCompanion()
            expect(sut.clickCompanionCount).toBe(1)
        });
    })
    describe('purchase clicking companion', function()
    {
        it('decreases users clicks by 100', function()
        {
            sut.purchaseClickCompanion()
            expect(sut.clickCompanionCount).toBe(1)
        });
    })
    describe('purchasing clicking companions', function()
    {
        it('increases companion value by 10%', function()
        {
            sut.purchaseClickCompanion()
            expect(sut.clickCompanionValue).toBe(110)
        });
    })
   
}) 
