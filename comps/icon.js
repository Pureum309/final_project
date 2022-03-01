//MUST HAVE - CREATE A TEMPLATE TAG
var template_icons = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_icons.innerHTML = `
<style>
    img{
        width: 100px;
        height: 100px;
    }

    #icon_imgs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #item_cont {
        display: flex;
        flex-direction: row;
    }


</style>

<div id='item_cont'>
    <div id='icon_imgs'>
        <img src='./imgs/reduce.png' /> Reduce
    </div>
    <div id='icon_imgs'>
        <img src='./imgs/recycle.png' /> Recycle
    </div>
    <div id='icon_imgs'>
        <img src='./imgs/reuse.png' /> Reuse
    </div>
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
        if(this.getAttribute("item_text")) {
            this.shadowRoot.querySelector("#item_text").innerText = this.getAttribute("item_text");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("item-comp", TheItems)