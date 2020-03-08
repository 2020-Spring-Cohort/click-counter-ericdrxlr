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
    showClicks()
    {
        return this.usersClicks;
    }
    clickButton()
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
    addCompanionClicksToUsersClicks()
    {
        this.usersClicks += this.compounderCount;
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
        this.usersClicks *= Math.pow(1.2, this.compounderCount);
    }
}
const updateCounter = (displayClicks, ClickCounter) =>
{
    displayClicks.innerText = ClickCounter.showClicks()
}
const cookieButton = (buttonElement, displayClicks, ClickCounter) =>
{
    cookieButton.addEventListener('click', () =>
    {
    ClickCounter.clickButton()
    updateCounter(displayClicks, ClickCounter)
    })
}
const buttonElement = document.querySelector('#cookiebutton')
const displayClicks = document.querySelector('#displayclicks')
const cookieCounter = new ClickCounter()

cookieButton = (buttonElement, displayClicks, ClickCounter)
updateCounter = (displayClicks, ClickCounter)

setInterval(cookieCounter.addCompanionClicksToUsersClicks(), 1000)