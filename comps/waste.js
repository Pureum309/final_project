//MUST HAVE - CREATE A TEMPLATE TAG
var template_wasteicons = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_wasteicons.innerHTML = `
<style>
    img {
        display: flex;
        position: absolute;
        visibility: visible;
        width: 120px;
        height: 120px;
    -webkit-filter: drop-shadow(0px 0px 10px rgb(198, 249, 250, 0.5));
         filter: drop-shadow(0px 0px 10px rgb(198, 249, 250, 0.5));

         cursor: pointer;
         animation: anti-wiggle 1s ease-in-out;
         animation: wiggle 1s ease-in-out;
    }

</style>

<div id='waste_icons'>
    <img src='./graphics/plastic-glass.png' />
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheWastes extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_waste.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector("#waste_icons > img").src = "./graphics/" + this.getAttribute("icon_name");
        this.isClick = false;

        this.shadowRoot.querySelector('#item_icon').onclick = () => {
            // this.chageButtoncard();
            this.clickTohide();


            this.isClick = true; //!isClick -> when false became true when true it bacomes false
        }
        
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    // chageButtoncard() {
    //     document.querySelector('#popchat').popDisply(this.getAttribute("button_text"), this.getAttribute("link_name"))
    // }

    clickTohide() {
        this.shadowRoot.querySelector('#cup').style.visibility = "hidden"
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("waste-comp", TheWastes)