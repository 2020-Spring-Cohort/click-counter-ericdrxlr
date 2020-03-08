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
    getCompanionCount()
    {
        return this.companionCount;
    }
    getCompanionValue()
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
    buttonElement.addEventListener('click', () =>
    {
    ClickCounter.clickButton()
    updateCounter(displayClicks, ClickCounter)
   // enableCompanionButton()
   // enableCompounderButton()

    })
}
const updateCompanionCounter = (companionCountElement, companionCounter) =>
{
    companionCountElement.innerText = companionCounter.getCompanionCount()
}
const companionButton = (companionButtonElement, companionCountElement, companionValueElement, displayClicksElement, companionCounter)  => 
{
    companionButtonElement.addEventListener('click', function()
    {
        companionCounter.purchaseClickCompanion()
        updateCompanionCounter(companionCountElement, companionCounter)
        updateCompanionValue(companionValueElement, companionCounter)
        updateCounter(displayClicksElement, companionCounter)
        enableCompanionButton()
        enableCompounderButton()
    })
}  
const updateCompounderCounter = (compounderCountElement, compounderCounter) =>
{
    compounderCountElement.innerText = compounderCounter.getCompounderCount()
}
const compounderButton = (compounderButtonElement, compounderCountElement, compounderValueElement, displayClicksElement, compounderCounter)  => 
{
    compounderButtonElement.addEventListener('click', function()
    {
        compounderCounter.purchaseCompounder()
        updateCompounderCounter(compounderCountElement, compounderCounter)
        updateCompounderValue(compounderValueElement, compounderCounter)
        updateCounter(displayClicksElement, compounderCounter)
        enableCompanionButton()
        enableCompounderButton()
    })
}    
const buttonElement = document.querySelector('#cookiebutton')
const displayClicks = document.querySelector('#displayclicks')
const cookieCounter = new ClickCounter()


// const autoClick = setIntervals(autoClick, 1000)

// function autoClick() 
// {
//     cookieCounter.addCompanionClicksToUsersClicks()
//     updateCounter(displayClicks, cookieCounter)
// }