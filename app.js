import React from "react";

import ReactDOM from "react-dom/client";

//React.createElement => Object => HTMLElement(render)

// const heading = React.createElement("h1",{id:"heading"}, "Namaste React")
// console.log(heading)

//JSX - is not HTML in js || HTML like syntax || Transpiled before it reaches to js engine
// PARCEL doing transpile through Babel

const elm = <span>React Element</span>
const Title = () =>(
    <h1 className="head" tabIndex="5">
        {elm}
        Namaste React using JSX
    </h1>
)

const number = 10000;
//React Element
const HeadingComponent =() =>(
    <div id="container">
        
            <Title/>
        
         <h1 className="heading"> Namaste React Functional Component</h1>
    </div>
    
)

//React Component - Class-based-OLD & functional component-NEW


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />)