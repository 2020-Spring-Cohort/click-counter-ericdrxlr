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
            expect(sut.getcompanionCount()).toBe(0)
        });
    })
    describe('click companion value', () =>
    {
        it('returns cost of 100', () =>
        {
            expect(sut.getcompanionValue()).toBe(100);
        });
    })
    describe('purchase clicking companion', () =>
    {
        it('decreases users clicks by companion value', () =>
        {
            sut.usersClicks = 101;
            sut.purchaseClickCompanion()
            expect(sut.usersClicks).toBe(1)
        });
    })
    describe('purchase clicking companions', () =>
    {
        it('increases click companion count to 1', () =>
        {
            sut.purchaseClickCompanion()
            expect(sut.companionCount).toBe(1)
        });
    })
    describe('purchasing further clicking companions', () =>
    {
        it('increases companion value by 10%', () =>
        {
            sut.purchaseClickCompanion()
            expect(sut.companionValue).toBe(110)
        });
    })
    describe('when purchasing click companion,', () =>
    {
        it('companion count only increases if it has userclicks greater or equal to comp. value', () =>
        {
            sut.usersClicks = 101; 
            sut.purchaseCompanionCondition()
            expect(sut.companionCount).toBe(1)
        });
    })
    describe('get compounder count', () =>
    {
        it('returns value of 0', () =>
        {
            expect(sut.getCompounderCount()).toBe(0)
        });
    })
    describe('purchase compounder', () =>
    {
        it('increases compounder count to 1', () =>
        {
            sut.purchaseCompounder()
            expect(sut.compounderCount).toBe(1)
        });
    })
    describe('purchase compounder', () =>
    {
        it('decreases users clicks count by compounder value', () =>
        {
            sut.usersClicks = 11;
            sut.purchaseCompounder()
            expect(sut.usersClicks).toBe(1)
        });
    })
    describe('purchasing compounder', () =>
    {
        it('increases compounder value by 10%', () =>
        {
            sut.purchaseCompounder()
            expect(sut.compounderValue).toBe(11)
        });
    })
    describe('purchasing compounder condition', () =>
    {
        it('compounder count only increases if clicks are >= comp. value', () =>
        {
            sut.usersClicks = 11;
            sut.purchaseCompounderCondition()
            expect(sut.compounderCount).toBe(1)
        });
    })
}) 
