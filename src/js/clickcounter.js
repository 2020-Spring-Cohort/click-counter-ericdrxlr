class ClickCounter
{
    constructor()
    {
        this.usersClicks = 0;
        this.clickCompanionCount = 0;
        this.clickCompanionValue = 100;
        
    }//methods below
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
    purchaseFurtherClickCompanions()
    {
        clickCompanionValue = clickCompanionValue*1.1;
    } 
    purchaseClickCompanion()
    {
        this.clickCompanionCount++;
        this.usersClicks =- 100;
        this.purchaseFurtherClickCompanions;   
    } 
   

}
