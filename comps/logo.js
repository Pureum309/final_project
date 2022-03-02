//MUST HAVE - CREATE A TEMPLATE TAG
var template_comp = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_comp.innerHTML = `
<style>
#desc_text {
   font-size: 16px;
}


<div id='logo_cont'>
    <div id = desc_text> company description lorem ipsum </div>
<div id = 'item_icon'>
    <img src='/graphics/ice.png">
</div>
</div>


`;


//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheComp extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_comp.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("desc_text")){
            this.document.get("#desc_text").innerHTML = this.getAttribute("desc_text");
        }
        if(this.getAttribute("item_icon")){
            this.document.get("#item_icon").innerHTML = this.getAttribute("item_icon");
        }
    }



    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("item-comp", TheLogo)