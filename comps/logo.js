	//MUST HAVE - CREATE A TEMPLATE TAG
var template_logo = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_logo.innerHTML = `
<style>
#item_image {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    }
img {
    width: 50%;
    height: 100%;
    padding: 1em;
}

</style>

<div id = item_image>
    <img src = "./graphics/coral.png" alt = " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Logo ">
    <div id = desc_text>
    Lorem ipsumdlfksjfleifjslfjdk
    </div>
</div>
`;


//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheLogo extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_logo.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("desc_text")){
            this.shadowRoot.querySelector('#desc_text').innerText = this.getAttribute('desc_text')
        }
        if(this.getAttribute("logo_name")) {
            this.shadowRoot.querySelector("#item_image > img").src = "./graphics/" + this.getAttribute("logo_name");
        }
    }



    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("company-link", TheLogo)