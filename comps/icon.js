//MUST HAVE - CREATE A TEMPLATE TAG
var template_icons = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_icons.innerHTML = `
<style>
    img{
        width: 100px;
        height: 100px;
    }

    #item_icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        color: white;
        font-size: 20px;
        font-weight: bold;
    }

</style>

<div id='item_icon'>
    <img
    src='./graphics/tote-bag.png' />
    <div id = item_text> text </div>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheItems extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_icons.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector("#item_text").innerText = this.getAttribute("item_text");
        this.shadowRoot.querySelector("#item_icon > img").src = "./graphics/" + this.getAttribute("icon_name");

        this.isClick = false;

        this.shadowRoot.querySelector('#item_icon').onclick = () => {
            this.chageButtoncard();
            this.changeImg();

            this.isClick = true; //!isClick -> when false became true when true it bacomes false
        }

        this.shadowRoot.querySelector('#item_icon').onmouseover = () => {
            this.changeImg();
        }

        this.shadowRoot.querySelector('#item_icon').onmouseout = () => {
            if (this.isClick === false) {
                this.backColor();
            }
        }
   
    }
   
    //To-do - CREATE THE FUNCTIONALITIES HERE!
    chageButtoncard() {
        document.querySelector('#popchat').popDisply(this.getAttribute("button_text"), this.getAttribute("link_name"))
    }

    changeImg() {
        this.shadowRoot.querySelector('#item_icon').style.color = "#549DE3";
        this.shadowRoot.querySelector('#item_icon').style.fontSize = "1.5em";
        this.shadowRoot.querySelector('#item_icon').style.border = "thick solid #549DE3";
        this.shadowRoot.querySelector('#item_icon').style.borderRadius = "15px";
        this.shadowRoot.querySelector('img').style.transition = "1.5s";
        this.shadowRoot.querySelector('img').style.height = '125px';
        this.shadowRoot.querySelector('img').style.width = '125px';
       
    }

    backColor() {
        this.shadowRoot.querySelector('#item_icon').style.color = "white";
        this.shadowRoot.querySelector('#item_icon').style.fontSize = "20px";
        this.shadowRoot.querySelector('#item_icon').style.border = "none";
        this.shadowRoot.querySelector('img').style.height = '100px';
        this.shadowRoot.querySelector('img').style.width = '100px';
    }

    resetClick() {
        this.isClick = false;
    }

   
}

//MUST HAVE - define the tag for the custom elements
customElements.define("item-comp", TheItems)