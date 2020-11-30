const scriptUrl ="/api";

const form = document.forms['exp-form']

        //   Fetch Api
         
        form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new  FormData(form)}).then( ()=>{
                alert("Thanks for Contacting...")
              }).catch((e) =>{
                alert(`Error!`)
              })
            //   sheet.then(response => alertf("Thanks for Contacting us..! We Will Contact You Soon..."))
            //     .catch(error => console.error('Error!', error.message))
        })