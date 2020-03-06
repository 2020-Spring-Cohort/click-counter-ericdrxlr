class ClickCounter
{
    constructor()
    {
        this.usersClicks = 0;
        this.clickCompanionCount = 0;
        this.clickCompanionValue = 100;        
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
    getClickCompanionCount()
    {
        return this.clickCompanionCount;
    }
    getClickCompanionValue()
    {
        return this.clickCompanionValue;
    }
    purchaseCompanionCondition()
    {
        if (this.usersClicks >= this.clickCompanionValue)
        {
           this.purchaseClickCompanion;
        }
    }
    
    purchaseClickCompanion()
    {
       this.clickCompanionCount++;
       this.usersClicks =- this.clickCompanionValue;
       this.purchaseFurtherClickCompanions();
    } 

    // METHODS JUST HOLDING THE EXTRA CODE
    purchaseFurtherClickCompanions()
    {
        this.clickCompanionValue = this.clickCompanionValue + (this.clickCompanionValue * .1);
    }
}
