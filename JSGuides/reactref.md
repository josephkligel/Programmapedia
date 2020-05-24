# REACT Reference
## Legend
>("): same as above or before

## ------------------------------Setup-------------------
1. <script src"app.js" type="text/JSX"> </script>
2. import React from "react"
3. import ReactDOM from "react-dom"
4. Render: see Rendering section below



## ----------------------Rendering-------------------------
Basic rendering
### Methods:
	-ReactDOM.render(): ReactDom.render(<div><h1>Hello, World!</h1>
		<p>This Paragraph</p></div>, document.getElementById("root"))

## -----------------------Attributes--------------------------
-Attributes are camelcased.
-className: use className instead of class

## -----------------------Styles-----------------------------
CSS key/value pairs are interpreted as JavaScript objects. Therefore, when using JSX, they need to be in double curly brackets to be correctly interpreted or used in an object. 
## Examples:
	-adding color styles: ReactDOM.render( <h1 style={{color: "red"}}>Hello World!</h1>, document.getElementById("root"));
	-using objects: const customStyle = {color: "red", fontSize: "20px", border: "1px solid black"}; <h1 style={customStyle}></h1>

## ---------------------Components---------------------------
Break down rendered elements into smaller components.
### Creating Component File:
	1. create file called <component name>.jsx(e.g. Heading.jsx)
	2. import React from 'react'
	3. create function that returns component:
		-function Heading(){return <h1>This is the Title</h1>}
	4. export component:
		-export default Heading
	5. import component to main js file that renders componenets
		-import Heading from './Heading'
	6. Add component tag to render method
		-ReactDOM.render(<Heading />...)
	
