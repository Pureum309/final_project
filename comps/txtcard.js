//MUST HAVE - CREATE A TEMPLATE TAG
var template_chat = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_chat.innerHTML = `
<link rel="stylesheet" href="./index.css">
<div class="bubblechat">
    <p>Text Here</p>
    <div class="next-txt-btn" value="click">
        <img src="./comps/icons/arrow.svg" alt="next button">
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
        this.scene = 2;
        this.shadowRoot.querySelector(".next-txt-btn").onclick = () => {
            document.querySelector("#scene2").nextScene();
        }
    }


    //To-do - CREATE THE FUNCTIONALITIES HERE!
    nextScene(){
        if(this.scene === 2) {
            this.scene = this.scene + 1; console.log(this.scene);
            document.querySelector("#scene2").style.display = "none";
            document.querySelector("#scene3").style.display = "block";
        }
        if(this.scene === 3) {
            this.scene = 5; /*this.scene + 1;*/ console.log(this.scene);
            document.querySelector("#scene3").style.display = "none";
            document.querySelector("#scene4").style.display = "block";
    
        }
        else if(this.scene === 5)  {
            console.log(this.scene);
            document.querySelector("#scene5").style.display = "none";
            document.querySelector("#scene6").style.display = "block";
        }
    }

}

//MUST HAVE - define the tag for the custom elements
customElements.define("txt-card", BubbleText)