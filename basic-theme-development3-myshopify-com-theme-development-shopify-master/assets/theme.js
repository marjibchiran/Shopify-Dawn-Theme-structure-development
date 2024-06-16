window.addEventListener("DOMContentLoaded",()=>{  
  function onChangeSubmitHandler(event){
    event.target.form.submit();
  }
  document.querySelectorAll('.shopify-currency-form,.language_auto_submit').forEach((elm)=>{
    elm.addEventListener('change',onChangeSubmitHandler);
  })
})


language-auto-submit