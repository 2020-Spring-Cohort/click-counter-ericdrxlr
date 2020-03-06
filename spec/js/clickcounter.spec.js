describe ('Click Counter', () =>
{
    let sut;

    beforeEach(() =>
    {
        sut = new ClickCounter();
    })
    describe('usersClicks', () =>
    {
        it('has initial value of 0', () =>
        {
            expect(sut.usersClicks).toBe(0)
        });
    })
    describe('get users clicks', () =>
    {
        it('returns value of usersClicks', () =>
        {
            expect(sut.getUsersClicks()).toBe(0)
        });
    })
    describe('ClickIncrementor', () =>
    {
        it('increases value of usersClicks by 1', () =>
        {
            sut.clickIncrementor()   //Act
            expect(sut.usersClicks).toBe(1)
        });
    })
    describe('get click companion count', () =>
    {
        it('returns value of 0', () =>
        {
            expect(sut.getClickCompanionCount()).toBe(0)
        });
    })
    describe('click companion value', () =>
    {
        it('returns cost of 100', () =>
        {
            expect(sut.getClickCompanionValue()).toBe(100);
        });
    })
    describe('purchase clicking companion', () =>
    {
        it('decreases users clicks by companion value', () =>
        {
            sut.purchaseClickCompanion()
            expect(sut.clickCompanionCount).toBe(1)
        });
    })
    describe('purchase clicking companions', () =>
    {
        it('increases click companion count to 1', () =>
        {
            sut.purchaseClickCompanion()
            expect(sut.clickCompanionCount).toBe(1)
        });
    })
    describe('purchasing further clicking companions', () =>
    {
        it('increases companion value by 10%', () =>
        {
            sut.purchaseClickCompanion()
            expect(sut.clickCompanionValue).toBe(110)
        });
    })
    describe('when purchasing click companion', () =>
    {
        it('companion count only increases if it has count greater or equal to comp. value', () =>
        {
            sut.purchaseCompanionCondition()
            expect(sut.clickCompanionCount).toBe(0)
        });
    })
    describe('get compounder count', () =>
    {
        it('returns value of 0', () =>
        {
            expect(sut.getCompounderCount()).toBe(0)
        });
    })
    describe('compounder count', () =>
    {
        it('increments', () =>
        {
            sut.compounderIncrementor()
            expect(sut.compounderCount).toBe(1)
        });
    })
}) 
