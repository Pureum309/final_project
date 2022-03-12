//MUST HAVE - CREATE A TEMPLATE TAG
var template_contbtn = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_contbtn.innerHTML = `
<link rel="stylesheet" href="index.css">
<div class="bubble_chat">
    <p>Text Here</p>
    <div class="cont-btn">Continue</div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class ContinueBtn extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_contbtn.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".bubble_chat p").innerText = this.getAttribute("desc-text");
        this.scene = 1;
        this.shadowRoot.querySelector(".cont-btn").onclick = () => {
            document.querySelector("#storyscene1").nextScene();
        }
    }

    clickTohide(){
        this.shadowRoot.querySelector(".cup").onclick = () => {
            document.querySelector(".cup").hideIcons();
        }
    }



    //To-do - CREATE THE FUNCTIONALITIES HERE!
    nextScene(){
        if(this.scene === 1) {
            this.scene = this.scene + 1; console.log(this.scene);
            document.querySelector("#storyscene1").style.display = "none";
            console.log("yes");
            document.querySelector("#storyscene2").style.display = "block";
        }
    }

    
    hideIcons(){
         document.querySelector(".cup").style.visibility = "hidden";
        // const waste = document.querySelectorAll('.waste img');
        // waste.forEach(waste => {
        //     waste.addEventListener('click', () => {
        //         document.querySelector(".waste img").style.visibility = "hidden";
        //     })
        // })
    }

}

//MUST HAVE - define the tag for the custom elements
customElements.define("cont-card", ContinueBtn)