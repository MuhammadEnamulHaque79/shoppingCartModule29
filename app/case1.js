//update case number function;

function updateCaseNumber(isIncrease){
  const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    
    let newCaseNumber;
    if(isIncrease === true){
    newCaseNumber = previousCaseNumber + 1;

    }else{
        newCaseNumber = previousCaseNumber - 1;
    }
    
    return caseNumberField.value = newCaseNumber; 

};

//update case total price;

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
};


document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
});
// document.getElementById('btn-case-plus').addEventListener('click',function(){
//     const newCaseNumber = updateCaseNumber(true);
//     const caseTotalPrice = newCaseNumber * 59;
//     const caseTotalElement = document.getElementById('case-total');
//     caseTotalElement.innerText = caseTotalPrice;
// });

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);

});


// document.getElementById('btn-case-plus').addEventListener('click',function(){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString);
//     const newCaseNumber = previousCaseNumber + 1;
//     caseNumberField.value = newCaseNumber;

// });

// document.getElementById('btn-case-minus').addEventListener('click',function(){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString);
//     const newCaseNumber = previousCaseNumber - 1;
//     caseNumberField.value = newCaseNumber;
// });


