/* 
File Name: app.js
Name: Shota Ito
Student #: 301103095
App Name: Book List
*/

/* custom JS goes here */

function Start()
{
    // console.log("App Started...");

    let deleteButtons = document.querySelectorAll('.btn-danger');
    
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
                window.location.assign('/books');
            }
        });
    }
}

window.addEventListener("load", Start);


