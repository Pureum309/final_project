//MUST HAVE - CREATE A TEMPLATE TAG
var template_chat = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_chat.innerHTML = `
<link rel="stylesheet" href="/index.css">
<div class="bubblechat">
    <p>Text Here</p>
    <div class="next-txt-btn">
        <img src="/comps/icons/arrow.svg" alt="next button">
        <div>Next</div>
    </div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class BubbleText extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_chat.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".bubblechat p").innerText = this.getAttribute("desc-text");
        this.shadowRoot.querySelector(".next-txt-btn").onclick = () => this.showScene3();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    showScene3() {
        document.querySelector("#scene2").style.display = "none";
        document.querySelector("#scene3").style.display = "block";
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("txt-card", BubbleText)