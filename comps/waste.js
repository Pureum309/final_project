//MUST HAVE - CREATE A TEMPLATE TAG
var template_waste = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_waste.innerHTML = `
<link rel="stylesheet" href="./story.css">
<div class="waste">
    <img src="./graphics/garbage.png">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class SceneWaste extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_waste.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".waste img").src=this.getAttribute("img");
        this.shadowRoot.querySelector(".waste").onclick = () => this.disappear();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!

    disappear() {
        this.shadowRoot.querySelector(".waste").style.display = "none";
        this.style.visibility="hidden";
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("scene-waste", SceneWaste)
