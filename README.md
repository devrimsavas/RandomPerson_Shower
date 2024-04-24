# ABOUT TUTORIAL 
** The aim of this tutorial is to use fetch and Axios and populate table ** 
- this show how we can fetch from random person API with server side FETCH and again FETCH from client side
- it shows basic table population

- Nothing special but can be useful to see how we can use fetch 

# CODE CLUES 

- Important lines 

```bash 
let URL=`https://randomuser.me/api/?results=${howMany}`;
// it allows me to get input from client side form 

 ```
and front side client 
```bash 
function getUser() {
    let userNumber = document.getElementById('howMany').value || 1; // Default to 1 if no input
    fetch(`/getuser?howMany=${userNumber}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
```


 
