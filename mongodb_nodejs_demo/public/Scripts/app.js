// IFFE- Immediately Invoked Function Expression
(function(){
    function Start()
    {
        console.log('in javascript function')
        //list of all danger buttons
        let deletebuttons = document.querySelectorAll('.btn-danger')
       
        for(button of deletebuttons)
        {
            button.addEventListener('click', (event) => {
            if(!confirm("Are you sure?"))
            {
                event.preventDefault();
                window.location.assign('/booklist');
            }    
        });
       }
    }
    window.addEventListener('click', Start);
})();