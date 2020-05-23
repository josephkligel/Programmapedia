# REACT Reference

## Legend
-("): same as above or before

## ------------------------------Setup-------------------
-<script src"" type="text/JSX"> </script>
-import React from "react"
-import ReactDOM from "react-dom"



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
