const regName = /^[a-zA-Zа-яА-Я(\s?)]{3,15}$/i;
const regEmail = /^([a-zA-Z0-9_-]{3,15})@([a-zA-Z0-9-]{4,})\.([a-zA-Z]{2,4})$/i;
const regPhone = /^[\d\s\-]{1,10}$/;
const bookTicket = document.getElementById('book-ticket');
const nameInput = document.getElementById('tick-name');
const emailInput = document.getElementById('tick-email');
const phoneInput = document.getElementById('tick-tel');
const spanName = document.querySelector('.tick-name-invalid');
const spanEmail = document.querySelector('.tick-email-invalid');
const spanPhone = document.querySelector('.tick-phone-invalid');
function phoneChecked(){
  
  const phone = phoneInput.value;
  
  if(!regPhone.test(phone)){
    spanPhone.style.display ='block';
    spanPhone.innerHTML = `Incorrect phone number or field is empty! Use numbers from 0 to 9, space or dash`;
    phoneInput.classList.add('invalidm')
  }
  else if(regPhone.test(phone)){
    spanPhone.style.display ='none';
    spanPhone.innerHTML = '';
    phoneInput.classList.remove('invalidm')
  }
}
  function nameChecked(){
    const name = nameInput.value;
    if(!regName.test(name)){
    spanName.style.display ='block';
    spanName.innerHTML = `Incorrect name or field is empty! Use letters from Aa to Zz and Аа-Яя, space`;
    nameInput.classList.add('invalidm')
  }
  else if(regName.test(name)){
    spanName.style.display ='none';
    spanName.innerHTML = '';
    nameInput.classList.remove('invalidm')
  }
  }
  function emailChecked(){
    const email = emailInput.value;
    if(!regEmail.test(email)){
    spanEmail.style.display ='block';
    spanEmail.innerHTML = `Incorrect email or field is empty! Use email such as username@example.com`;
    emailInput.classList.add('invalidm')
  }
 else if(regEmail.test(email)){
    spanEmail.style.display ='none';
    spanEmail.innerHTML = '';
   emailInput.classList.remove('invalidm')
  }
  }


phoneInput.addEventListener('focus', phoneChecked);
nameInput.addEventListener('focus', nameChecked);
emailInput.addEventListener('focus', emailChecked);
phoneInput.addEventListener('blur', phoneChecked);
nameInput.addEventListener('blur', nameChecked);
emailInput.addEventListener('blur', emailChecked);