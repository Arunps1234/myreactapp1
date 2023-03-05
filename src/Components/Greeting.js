import React from 'react'

const Greeting =()=>{

    const date=new Date();
    const hours=date.getHours();
let greeting;

if (hours>=1 && hours<=12){
    greeting="Good Morning"
}
else if(hours >=12 && hours <=18)
 {
    greeting="Good Afternoon"
}
else{
    greeting="Good Night"
}

    return(
        <div>
<h1>{greeting}</h1>
        </div>
    )
}
export default Greeting