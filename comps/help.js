//MUST HAVE - CREATE A TEMPLATE TAG
var template_helpbtn = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_helpbtn.innerHTML = `
<link rel="stylesheet" href="index.css">
<div class="bubble_chat help">
    <p>Text Here</p>
    <a href="./links.html">
    <div class="cont-btn">Button Text Here</div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class howTohelp extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_helpbtn.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".bubble_chat p").innerText = this.getAttribute("desc-text");
        this.shadowRoot.querySelector(".bubble_chat div").innerText = this.getAttribute("btn");
        this.scene = 1;
        this.shadowRoot.querySelector(".cont-btn").onclick = () => {
            document.querySelector("#storyscene1").nextScene();
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("help-card", howTohelp)