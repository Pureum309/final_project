//MUST HAVE - CREATE A TEMPLATE TAG
var template_chatbtn = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_chatbtn.innerHTML = `

<link rel="stylesheet" href="/index.css">

<div class="bubblechat">
    <p>Text Here</p>
    <a href="/scene1/scene1_1.html"
    class="card-btn">
        <div>
            I'll help!
        </div>
    </a>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class BubbleBtn extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_chatbtn.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".bubblechat p").innerText = this.getAttribute("desc-text");
        this.shadowRoot.querySelector("a").href=this.getAttribute("link");
        this.shadowRoot.querySelector(".card-btn div").innerText = this.getAttribute("btn");

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("button-card", BubbleBtn)
