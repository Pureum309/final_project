//MUST HAVE - CREATE A TEMPLATE TAG
var template_heading = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_heading.innerHTML = `
<style>
    #head_text {
        font-size: 3.5em;
        color: white;
        font-weight: bold;
    }
</style>

<div id = head_text>
Text
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheHeading extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_heading.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("head_text")) {
            this.shadowRoot.querySelector("#head_text").innerText = this.getAttribute("head_text");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("header-comp", TheHeading)