class ClickCounter
{
    constructor()
    {
        this.usersClicks = 0;
        this.companionCount = 0;
        this.companionValue = 100;
        this.compounderCount = 0;
        this.compounderValue = 10;         
    }
    
    // METHODS BELOW
    getUsersClicks()
    {
        return this.usersClicks;
    }
    clickIncrementor()
    {
        this.usersClicks++;
    }
    getcompanionCount()
    {
        return this.companionCount;
    }
    getcompanionValue()
    {
        return this.companionValue;
    }
    purchaseCompanionCondition()
    {
        if (this.usersClicks >= this.companionValue)
        {
           this.purchaseClickCompanion();
        }
    }
    purchaseClickCompanion()
    {
       this.companionCount++;
       this.usersClicks -= this.companionValue;
       this.purchasingCompanions();
    }
    getCompounderCount() 
    {
        return this.compounderCount;
    }
    purchaseCompounderCondition()
    {
        if (this.usersClicks >= this.compounderValue)
        {
            this.purchaseCompounder()
        }
    }
    purchaseCompounder()
    {
        this.compounderCount++;
        this.usersClicks -= this.compounderValue;
        this.purchasingCompounders()
        this.usersClickIncreases()
    }
    // METHODS JUST HOLDING THE EXTRA CODE
    purchasingCompanions()
    {
        this.companionValue = this.companionValue + (this.companionValue * .1);
    }
    purchasingCompounders()
    {
        this.compounderValue = this.compounderValue + (this.compounderValue * .1);
    }
    usersClickIncreases()
    {
        this.usersClicks *= 1.2;
    }
}
