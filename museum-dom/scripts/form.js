
let amount = document.getElementById('amount'),
  amountW = document.getElementById('amount-window'),
  amount2 = document.getElementById('amount2'),
  amount2W = document.getElementById('amount2-window'),
  countOverAmount = document.querySelector('.count-over-amount'),
  countOverAmount2 = document.querySelector('.count-over-amount2'),
  total = document.getElementById('total'),
  ticketTypes = document.querySelectorAll('input[name="rb"]'),
  ticketTypeW = document.getElementById('tick-type'),
  ticketDate = document.getElementById('tick-date'),
  ticketTime = document.getElementById('tick-time'),
  ticketDateOver = document.querySelector('.tick-date-over'),
  ticketTimeOver = document.querySelector('.tick-time-over'),
  ticketCheckOver = document.querySelector('.tick-date-check'),
  tickTypeSpan = document.querySelectorAll('.tick-type-form'),
  halfTickTypeSpan = document.querySelectorAll('.half-tick-type-form')
  amountBtn = document.querySelectorAll('.amount-form-btn'),
  amountWindowBtn = document.querySelectorAll('.amount-window-btn'),
  preAmount = document.querySelector('.pre-amount'),
  preAmount2 = document.querySelector('.pre-amount2'),
  totalAmount = document.querySelector('.total-amount-window'),
  buyNow = document.querySelector('.buy-now'),
  timeList = document.getElementById('time-list');
  const daysWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  months = ['Janyary','February','March','April','May','June','Jule','August','September','October','November'],
  optionHtml = {
    20: 'Permanent exhibition',
    25: 'Temporary exhibition',
    40: 'Combined Admission'
  }

function firstСalculation() {
  let typeRate = document.querySelector('input[name="rb"]:checked');
  let rate = Number(typeRate.value);
  let seniorPrice = (Number(amount2.value) * rate) / 2;
  let regularPrice = Number(amount.value) * rate;
  total.value = seniorPrice + regularPrice;
  localStorage.setItem('total', total.value);
  localStorage.setItem('amount', amount.value);
  localStorage.setItem('amount2', amount2.value);
  localStorage.setItem('type', rate);
}

function firstWindowForm(){
  ticketTypeW.value = String(localStorage.getItem('type'));
  amountW.value = localStorage.getItem('amount');
  amount2W.value = localStorage.getItem('amount2');
  countOverAmount.innerHTML = `${amountW.value}`;
  countOverAmount2.innerHTML = `${amount2W.value}`;
  const date = new Date();
  let minMonth = date.getMonth()+1;
  if(minMonth<10){
    minMonth=`0${minMonth}`
  };
  let minDay = date.getDate();
  if(minDay<10){
    minDay=`0${minDay}`
  }
  ticketDate.setAttribute('min', `${date.getFullYear()}-${minMonth}-${minDay}`);
  createTimeList ();
  drawSpan();

}

function drawSpan() {
  tickTypeSpan.forEach(item=>{
    item.innerHTML =`${ticketTypeW.value}`;
  })
  halfTickTypeSpan.forEach(item=>{
    item.innerHTML =`${ticketTypeW.value/2}`
  });
  preAmount.innerHTML = `${(amountW.value*ticketTypeW.value)}`;
  preAmount2.innerHTML = `${(amount2W.value*ticketTypeW.value)/2}`;
  totalAmount.innerHTML = `${Number(preAmount.innerHTML)+Number(preAmount2.innerHTML)}`;
  ticketCheckOver.innerHTML = optionHtml[ticketTypeW.value];
}

function createTimeList (){
  for(let i=9;i<18; i++){
    for(let j = 0; j<2; j++){
      let option = document.createElement('option');
      if(j===0){
        if(i===9){
          option.setAttribute('value',`0${i}:00`);
           timeList.append(option);
        } else{
          option.setAttribute('value',`${i}:00`);
        timeList.append(option);
        }
        
      } else if(j===1){
        if(i===9){
          option.setAttribute('value',`0${i}:30`);
        timeList.append(option);
        } else{
          option.setAttribute('value',`${i}:30`);
        timeList.append(option);
        }
        
      }
    }
    
    }
}

function calculationPrice(){
  let rate = Number(ticketTypeW.value);
  let seniorPrice = (Number(amount2W.value) * rate) / 2;
  let regularPrice = Number(amountW.value) * rate;
  totalAmount.innerHTML = seniorPrice + regularPrice;
  preAmount.innerHTML = `${(amountW.value*ticketTypeW.value)}`;
  preAmount2.innerHTML = `${(amount2W.value*ticketTypeW.value)/2}`;
  countOverAmount.innerHTML = `${amountW.value}`;
  countOverAmount2.innerHTML = `${amount2W.value}`;
  total.value = totalAmount.textContent;
    localStorage.setItem('total', totalAmount.textContent);
    localStorage.setItem('amount', amountW.value);
    localStorage.setItem('amount2', amount2W.value);
    
}



function reloadPage() {
  if (localStorage.getItem('total')) {
    total.value = localStorage.getItem('total');
    amount.value = localStorage.getItem('amount');
    amount2.value = localStorage.getItem('amount2');
    ticketTypes.forEach(item => {
      if (item.value === localStorage.getItem('type')) {
      item.checked=true;
      } else {
        item.checked=false;
      }

    })
   
  } else {
    let typeRate = document.querySelector('input[name="rb"]:checked');
    localStorage.setItem('total', total.value);
    localStorage.setItem('amount', amount.value);
    localStorage.setItem('amount2', amount2.value);
    localStorage.setItem('type', typeRate.value);
  }
}

function closeForm() {
  if (localStorage.getItem('total')) {
    total.value = Number(localStorage.getItem('total'));
    amount.value = localStorage.getItem('amount');
    amount2.value = localStorage.getItem('amount2');
    ticketTypes.forEach(item => {
      if (item.value === localStorage.getItem('type')) {
      item.checked=true;
      } else {
        item.checked=false;
      }

    })
   
  } else {
    let typeRate = document.querySelector('input[name="rb"]:checked');
    localStorage.setItem('total', total.value);
    localStorage.setItem('amount', amount.value);
    localStorage.setItem('amount2', amount2.value);
    localStorage.setItem('type', typeRate.value);
  }
}


amountBtn.forEach((item) => {
  item.addEventListener('click', firstСalculation)
});
ticketTypes.forEach((item) => {
  item.addEventListener('click', firstСalculation)
});

buyNow.addEventListener('click', firstWindowForm)

window.addEventListener("DOMContentLoaded", reloadPage)

ticketTime.addEventListener('change', ()=>{
  ticketTimeOver.innerHTML = ticketTime.value;
})

ticketDate.addEventListener('change', ()=>{
let date = new Date(ticketDate.value);
const tourDay = date.getDay();
const tourMonth = date.getMonth();
const tourDate = date.getDate();
  ticketDateOver.innerHTML = `${daysWeek[tourDay]}, ${months[tourMonth]} ${tourDate}`;
})

ticketTypeW.addEventListener('change', ()=>{
  drawSpan()
  localStorage.setItem('type', ticketTypeW.value);
}
  )
amountWindowBtn.forEach((item) => {
  item.addEventListener('click', calculationPrice)

});
overlay.addEventListener('click', ()=>{
  reloadPage();
  firstСalculation();})