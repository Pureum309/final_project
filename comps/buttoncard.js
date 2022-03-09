//MUST HAVE - CREATE A TEMPLATE TAG
var template_chatbtn = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_chatbtn.innerHTML = `
<link rel="stylesheet" href="index.css">
<div class="bubblechat">
    <p>Text Here</p>
    <div class="card-btn">
        I'll help!
    </div>
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
        this.shadowRoot.querySelector(".card-btn").innerText = this.getAttribute("btn");
        this.shadowRoot.querySelector(".card-btn").addEventListener("click", this.showScene2);
        this.shadowRoot.querySelector(".card-btn").addEventListener("click", this.showBimo);
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!

    showScene2() {
        document.querySelector("#scene1").style.display = "none";
        console.log("yes");
        document.querySelector("#scene2").style.display = "block";
    }

     showBimo () {
        console.log("yes");
        document.querySelector(".bimo1").style.display = "block";
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("button-card", BubbleBtn)
