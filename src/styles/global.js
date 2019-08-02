import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
       
		text-rendering: optimizeLegibility;
		
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
        font-size: 14px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	
		overflow:scroll
		
		
    }
    html, body, #root {
		position: relative;
        width: 100%;
        height: 100%;
		overflow-x: hidden;
    }
  
  code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
	  monospace;
  }
  
/*RESET CSS*/



button {
  background: transparent;
  border: 0;
  padding: 0;
  transition: box-shadow .15s ease-in-out;
}

ul {
		
  	list-style-type: none;
	padding: 0;
	margin: 0
}



/*RESET CSS*/

:root {
  --header-bgcolor      : rgb(36, 41, 46)   ; 
  --header-textColor  	: rgb(241, 242, 243); 
}

/*
  * atributos de definicoes
  *
*/
[ellipsis] {
	white-space: nowrap;
	overflow: hidden; 
	text-overflow: ellipsis;
}

[hide] {
	display: none;
}
[grid] {
	display: grid;
}
[flex] {
	display: flex;
}


[rounded] {
	border-radius: 50%;
}

input[code] {
	width: 25%
}
input[code] ~ input {
	width: 70%
}
input[code] + label {
	width: 15%
}

[grid-template-columns] {
	
	grid-template-columns: repeat(4, 25%);
	padding: 15px 5px;
	grid-row-gap: 12px;
}


/* style start */
.app {
  display         : flex    ;
  flex-direction  : column  ;
  height          : 100%    ;
  width           : 100%    ;
}
.app > header h3 {
  margin  : 0                        ;
  color   : var(--header-textColor)  ;
}

.app > header {
  background-color  : var(--header-bgcolor) ;
  padding           : 15px                  ;
  align-items       : center                ;
  justify-content   : center                ;
  display           : flex                  ;
  margin-bottom     : 15px                  ; 
}
.app > header .wrap-header {
    width         : 75%   ;
    margin-left  : 10px   ;
    
}

.content {
  display         : flex    ;
  justify-content : center  ;
}

.content .wrap-content {
  width: 75%;
  
}


.list {
  
  display: grid;
  
}
.list > .item {
  display: flex       ;
  flex-direction: row ;
  align-items: center ;
  
}
.list > .item .key {
  
  background-color  : rgba(0, 0, 0, 0.07) ;
  padding           : 5px                   ;
  flex              : 1                     ;
  
}

.list > .item:nth-child(odd) {
  
  background-color: #e0e0e0
  
}
.list > .item .item-data {
  padding-left: 15px;
  flex: 7
}

.grid-cards {
	
	width: 100%;
    padding: 5px;
	
	
}


.card {
	
	display			: flex				  ;
	border			: solid 1px #ccc	;
	border-radius	: 3px 				  ;
	padding			: 15px				  ;
	margin			: 0 5px 15px 5px	  ;
	
	box-shadow		: 1px 1px 5px 0 rgba(0, 0, 0, 0.2) 
	
	
}




.field {
	position : relative;
	margin	 : 3px 0 3px 0
}
.field input,
.field select, 
.field textarea {
  
	box-shadow        : inset 0 0 0 1px #d8d8d8     ;  
	border-radius     : 4px                         ;  
	background-color  : rgb(255, 255, 255)          ;
	font-size         : 14px                        ; 
	padding           : 15px                        ;  
	border            : none                        ; 
	outline           : none                        ; 
	width			  : 100%						;
    height            : 16px                        ;
    margin            : 0 15px 5px 0                ;  
  
}

.field textarea{
	width: 90%;
	max-width: 90%;
	min-width: 70%;
	height:  50px;
	min-height: 50px;
}
.field label {

	text-transform: capitalize;
	color:#999;
	font-weight:normal;
	position:absolute;
	pointer-events:none;
	left: 10px;
    top: 5px;
	width: 80%;
	white-space: nowrap; 
	overflow: hidden;
	text-overflow: ellipsis;

}

.input-error > input {
	
	box-shadow: inset 0 0 0 1px crimson;
	
} 
.input-error > label {
	color: crimson !important
}


.field button{
  
  cursor        : pointer ;
  margin-right  : 10px    ; 
  
}


.field label[fixed-label]
,.field input:focus ~ label 
,.field textarea:focus ~ label
,.field textarea:not(:placeholder-shown)  ~ label
,.field input:not(:placeholder-shown) ~ label{
	width: auto;
	padding: 0px 6px;
	background-color: white;
	border-radius: 3px;
	top: -10px;
	font-size: 12px;
	color: #5264AE;
	
	transition:0.2s ease top, 0.2s color, 0.2s font-size , padding 0.2s;
	-moz-transition:0.2s ease top, 0.2s color, 0.2s font-size , padding 0.2s;
	-webkit-transition:0.2s ease top, 0.2s color, 0.2s font-size , padding 0.2s; 
	
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
	color: rgba(255, 255, 255, 0);
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
	color: rgba(255, 255, 255, 0);
}

::-ms-input-placeholder { /* Microsoft Edge */
	color: rgba(255, 255, 255, 0);
}

.field label[fixed-label]{
	top: -10px;
}

.field button{
	color: #717171;
	box-shadow: 0px 0px 0px 3px #e8e8e857, inset 0px -20px 20px -14px #00000014, inset 0 0 0px 1px #00000012;
	border-radius: 4px;
	padding: 7px 25px;
	background-color: #e0e0e0;
}
.field button:hover,
.field button:focus {

	color: #464646;
	box-shadow: 0px 0px 0px 3px #335bdf57, inset 0px -20px 20px -14px #9f93ff52, inset 0px -30px 0px -29px #ffffff, inset 0 0 0px 1px #00000012;
	border-radius: 4px;
	padding: 7px 25px;
	background-color: #e0e0e0;
	text-shadow: 1px 1px 0px #ffffff94;
}












    
`;