//MUST HAVE - CREATE A TEMPLATE TAG
var template_nemo = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_nemo.innerHTML = `
<link rel="stylesheet" href="./story.css">
<div class="nemo_char">
    <img src="./graphics/clown-fish-girl.png">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheNemo extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_nemo.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querrySelector('#clownfishgirl').onclick = () => {
            document.querrySelector("#clownfishgirl").transition();
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    transition() {
        if(this.scene === 2) {
            document.querySelector("#shoppingbag").style.display = "none";
                console.log("yes");
            document.querySelector("#clownfishgirl").style.transition = "transform 250ms ease-out";
        }
    }

}

//MUST HAVE - define the tag for the custom elements
customElements.define("nemo-char", TheNemo)