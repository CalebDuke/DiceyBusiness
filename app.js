GamepadButton.addEventListener('click', function(){
//element creation
let box = document.createElement('div');
let boxText = document.createTextNode(counter);
//attributes
box.className = 'box';
box.id = counter;


//events

})



    class Die {
        constructor(){
            this.div = document.createElement('div');
            this.value = document.createTextNode(counter);
            console.log(this);
        }   
    }

    new Die()

// }
// You must use OOP. Create a class named Die that represents a single die.
// Your class must have a property named value.
// Your class must have a method named roll that generates a random integer 1-6, sets the value property, and updates the div on the page with the new value.
// When a new Die is created, it should automatically create a div, call its roll method, and put the div on the screen
// You can use either the DOM or JQuery, but please be consistent and stick with one.