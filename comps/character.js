//MUST HAVE - CREATE A TEMPLATE TAG
var template_char = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_char.innerHTML = `
<link rel="stylesheet" href="./index.css">
<div class="char">
    <img src="./graphics/nemofish.png">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class SceneChar extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_char.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".char").onclick = () => this.showScene3();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!

    showScene3() {
        document.querySelector("#scene2").style.display = "none";
        document.querySelector("#scene3").style.display = "block";
    }

    //  showBimo () {
    //     console.log("yes");
    //     document.querySelector(".bimo1").style.display = "block";
    // }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("scene-char", SceneChar)
