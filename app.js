document.addEventListener("DOMContentLoaded", function () {

    const button = document.createElement('button');
    button.textContent = 'Add a DIE';
    const reRoll = document.createElement('button');
    reRoll.textContent = 'Reroll Dice';
    const sum = document.createElement('button');
    sum.textContent = 'Sum Dice'
    const container = document.createElement('main');
    container.className = 'container';

    let sumArray = []
   let a = sumArray.valueOf()
   
    
    
    document.body.appendChild(sum);
    document.body.appendChild(reRoll);
    document.body.appendChild(button);
    document.body.appendChild(container);
    
    
    let counter = Math.floor((Math.random() * 5) + 1);
    
    class Box {
        constructor() {
            this.div = document.createElement('div');
            this.value = document.createTextNode(counter);
            this.div.className = 'box';
            this.div.id = counter;
            container.appendChild(this.div)
            this.div.appendChild(this.value);
            sumArray.push(this.value) 

                    
        }

            }
            
            sum.addEventListener('click', function() {
                alert(a)
                
            })
            
            button.addEventListener('click', function () {
                new Box();
                counter = Math.floor((Math.random() * 5) + 1)
                counter++
        // counter++;
        // let box = document.createElement('div');
        // box.className = 'square';
        // box.id = counter;
        
      

        // box.appendChild(idDisplay);

        

    //     box.addEventListener('dblclick', function () {
    //         if (box.id % 2 === 0) {
    //             if (document.body.contains(box.nextSibling)) {
    //                 box.nextSibling.remove()
    //             } else {
    //                 alert("aint no box")
    //             }
    //         } else {
    //             if (document.body.contains(box.previousSibling)) {
    //                 box.previousSibling.remove()
    //             } else {
    //                 alert("aint no box")
    //             }
    //         }
    //     })

    });





});