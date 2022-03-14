//MUST HAVE - CREATE A TEMPLATE TAG
var template_contbtn = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_contbtn.innerHTML = `
<link rel="stylesheet" href="index.css">
<div class="bubble_chat">
    <p>Text Here</p>
    <p class="small">Text Here</p>
    <div class="cont-btn">Button Text Here</div>
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
        this.shadowRoot.querySelector(".small").innerText = this.getAttribute("small-text");
        this.shadowRoot.querySelector(".bubble_chat div").innerText = this.getAttribute("btn");
        this.scene = 1;
        this.shadowRoot.querySelector(".cont-btn").onclick = () => {
            document.querySelector("#storyscene1").nextScene();
        }

        
    // }

    // clickTohide(){
    //     this.shadowRoot.querySelector(".cup").onclick = () => {
    //         document.querySelector(".cup").hideIcons();
    //     }
    }



    //To-do - CREATE THE FUNCTIONALITIES HERE!
    nextScene(){
        if(this.scene === 1) {
            this.scene = this.scene + 1; console.log(this.scene);
            document.querySelector("#first").style.display = "none";
            console.log("yes");
            document.querySelector("#storyscene1").style.display = "block";
        }
        else if(this.scene === 2) {
            this.scene = this.scene + 1; console.log(this.scene);
            document.querySelector("#storyscene1").style.display = "none";
            console.log("yes");
            document.querySelector("#clownfishgirl").style.visibility = "visible";  
            document.querySelector("#shoppingbag").style.visibility = "visible";  
            document.querySelector("#storyscene2").style.display = "block";
        }
        else if(this.scene === 3) {
            this.scene = this.scene + 1; console.log(this.scene);
            document.querySelector("#storyscene2").style.display = "none";
            console.log("yes");
            document.querySelector("#storyscene3").style.display = "block";
        }
        else if(this.scene === 4) {
            this.scene = this.scene + 1; console.log(this.scene);
            document.querySelector("#storyscene3").style.display = "none";
            console.log("yes");
            document.querySelector("#waterplasticbottle").style.visibility = "visible";  
            document.querySelector("#turtle").style.visibility = "visible";  
            document.querySelector("#storyscene4").style.display = "block";
        }
        else if(this.scene === 5) {
            this.scene = this.scene + 1; console.log(this.scene);
            document.querySelector("#storyscene4").style.display = "none";
            console.log("yes");
            document.querySelector("#storyscene5").style.display = "block";
        }
        else if(this.scene === 6) {
            this.scene = this.scene + 1; console.log(this.scene);
            document.querySelector("#storyscene5").style.display = "none";
            console.log("yes");
            document.querySelector("#storyscene6").style.display = "block";
        }
        else if(this.scene === 7) {
            this.scene = this.scene + 1; console.log(this.scene);
            document.querySelector("#storyscene6").style.display = "none";
            console.log("yes");
            document.querySelector("#storyscene7").style.display = "block";
        }
        else if(this.scene === 8) {
            this.scene = this.scene + 1; console.log(this.scene);
            document.querySelector("#storyscene7").style.display = "none";
            console.log("yes");
            document.querySelector("#storyscene8").style.display = "block";
        }


        else if(this.scene === 8) {
                this.shadowRoot.querySelector("a").href = this.getAttribute("link");

        }
        
       
    }


}

//MUST HAVE - define the tag for the custom elements
customElements.define("cont-card", ContinueBtn)
