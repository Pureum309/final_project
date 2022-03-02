//MUST HAVE - CREATE A TEMPLATE TAG
var template_comp = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_comp.innerHTML = `
<style>
    #frame {
        width: 300px;
        height: 160px;
        border: 4px solid #549DE3;
        background-color:white;
        border-radius: 8px;
        padding: 1em;
        margin: auto;
        color: black;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        display: flex;
        position: absolute;
        flex-direction: column;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }

    #button {
        display: grid;
        position: absolute;
        align-self: center;
        justify-self: center;
        top: 70%;
        margin: auto;
        padding:0.5em 2em;   
        border-radius:2em;
        box-sizing: border-box;
        font-family:'Roboto',sans-serif;
        font-weight:300;
        background-color:#4eb5f1;
        text-align:center;
        transition: all 0.2s;   
    }

    a {
        text-decoration: none;
        color: white;
        
    }

    #button:hover {
        background-color:#4095c6;
        font-weight: bolder;
        cursor: pointer;
        
    }


</style>

<div id="frame">
    Type some text...  
    <div id="button">
         <a href="something" class="btncard_btn">Button</a>
    </div>  
</div>


`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class BubbleFrame extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_comp.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("button-card", BubbleFrame)