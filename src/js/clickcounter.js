class ClickCounter
{
    constructor()
    {
        this.usersClicks = 0;
        this.companionCount = 0;
        this.companionValue = 100;
        this.compounderCount = 0;
        this.compounderValue = 10;    
        this.clickWeight = 1.2;     
    }
    
    // METHODS BELOW
    showClicks()
    {
        return this.usersClicks.toFixed(2);
    }
    clickButton()
    {
        this.usersClicks += Math.pow(this.clickWeight, this.compounderCount);
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
        this.usersClicks += this.companionCount;
    }
    getCompounderCount() 
    {
        return this.compounderCount;
    }
    getCompounderValue()
    {
        return this.compounderValue;
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
}
function enableCompounderButton() 
{
    if (cookieCounter.usersClicks >= cookieCounter.compounderValue) {
        compounderButtonElement.removeAttribute('disabled')
    } 
    else 
    {
        compounderButtonElement.disabled = true
    }
}

function enableCompanionButton() {
    if (cookieCounter.usersClicks >= cookieCounter.companionValue) 
    {
        companionButtonElement.removeAttribute('disabled')
    } 
    else 
    {
        companionButtonElement.disabled = true
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
   enableCompanionButton()
   enableCompounderButton()

    })
}
// COMPANIONSS
const updateCompanionCounter = (companionCountElement, CompanionCounter) =>
{
    companionCountElement.innerText = CompanionCounter.getCompanionCount()
}
const companionButton = (companionButtonElement, companionCountElement, companionValueElement, displayClicksElement, CompanionCounter)  => 
{
    companionButtonElement.addEventListener('click', function()
    {
        CompanionCounter.purchaseClickCompanion()
        updateCompanionCounter(companionCountElement, CompanionCounter)
        updateCompanionValue(companionValueElement, CompanionCounter)
        updateCounter(displayClicksElement, CompanionCounter)
        enableCompanionButton()
        enableCompounderButton()
    })
} 
const updateCompanionValue = (companionValueElement, companionCounter) => {
    companionValueElement.innerText = companionCounter.getCompanionValue()
} 

//COMPOUNDERSSSS
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
const updateCompounderValue = (compounderValueElement, compounderCounter) => {
    compounderValueElement.innerText = compounderCounter.getCompounderValue()
}
const makeResetButton = (resetButtonElement) => {
    resetButtonElement.addEventListener('click', function(){
        location.reload()
    })
}

const buttonElement = document.querySelector('#cookiebutton')
const displayClicks = document.querySelector('#displayclicks')

const companionButtonElement = document.querySelector('#companionbutton')
const companionCountElement = document.querySelector('#companioncount')
const companionValueElement = document.querySelector('#companionvalue')
const displayClicksElement = document.querySelector('#displayclicks')

const compounderButtonElement = document.querySelector('#compounderbutton')
const compounderCountElement = document.querySelector('#compoundercount')
const compounderValueElement = document.querySelector('#compoundervalue')
const resetButtonElement = document.querySelector('#reset')

const cookieCounter = new ClickCounter()


cookieButton(buttonElement, displayClicks, cookieCounter)
updateCounter(displayClicks, cookieCounter)

updateCompanionCounter(companionCountElement, cookieCounter)
updateCompanionValue(companionValueElement, cookieCounter)
updateCounter(displayClicksElement, cookieCounter)
companionButton(companionButtonElement, companionCountElement, companionValueElement, displayClicksElement, cookieCounter)

updateCompounderCounter(compounderCountElement, cookieCounter)
updateCompounderValue(compounderValueElement, cookieCounter)
updateCounter(displayClicksElement, cookieCounter)
compounderButton(compounderButtonElement, compounderCountElement, compounderValueElement, displayClicksElement, cookieCounter)
makeResetButton(resetButtonElement, cookieCounter)

const autoClickElement = setInterval(autoClick, 1000)

function autoClick() 
{
    cookieCounter.addCompanionClicksToUsersClicks()
    updateCounter(displayClicks, cookieCounter)
    enableCompanionButton()
    enableCompounderButton()
}


