//MUST HAVE - CREATE A TEMPLATE TAG
var template_dblchatbtn = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_dblchatbtn.innerHTML = `
<link rel="stylesheet" href="index.css">
<div class="bubblechat">
    <p>Text Here</p>
    <div class="card-btn">
        I'll help!
    </div>
    <div class="card-btn2">
    2,000,000
    </div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class DblBubbleBtn extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_dblchatbtn.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".bubblechat p").innerText = this.getAttribute("desc-text");
        this.shadowRoot.querySelector(".card-btn").innerText = this.getAttribute("btn");
        this.shadowRoot.querySelector(".card-btn2").innerText = this.getAttribute("btn2");
        this.scene = 4;
        this.shadowRoot.querySelector(".card-btn").onclick = () => {
            document.querySelector("#scene4").nextScene();
        }
        this.shadowRoot.querySelector(".card-btn2").onclick = () => {
            document.querySelector("#scene4").nextScene();
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!

    nextScene(){
        if(this.scene === 4) {
            this.scene = this.scene + 1; console.log(this.scene);
            document.querySelector("#scene4").style.display = "none";
            console.log("yes");
            document.querySelector("#scene5").style.display = "block";
        }
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("dblbutton-card", DblBubbleBtn)
