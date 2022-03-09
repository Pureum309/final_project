//MUST HAVE - CREATE A TEMPLATE TAG
var template_popup = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_popup.innerHTML = `

<style>
    .popchat {
        display:none;
        width: 250px;
        height: 160px;
        border: 4px solid #549DE3;
        border-radius: 8px;
        padding: .5em .8em;
        margin: 1em .5em;
        flex-direction: column;
        background-color: white;
        font-family: 'Verdana';
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
    .popchat input {
        width: 200px;
        height: 2em;
        border-radius: 8px;
        border: 1px solid #549DE3;
        padding: .2em .2em .2em .4em;
        position: relative;
        background-color: rgb(206, 203, 203);
    }
    .popchat p {
        width: 250px;
        height: 120px;
        margin: 0;
        padding: 0;
    }
    .popchat img {
        width: 1.5em;
        height: 1.5em;
        margin-bottom: 0;
        /* border: #549DE3 1px solid; */
    }
    .pop-btn:hover {
        background-color:#4095c6;
        /* font-weight: 150; */
        cursor: pointer;
    }

    .pop-btn{
        height: auto;
        width: auto;
        background-color: #549DE3;
        text-align: center;
        padding: 0.5em;
        border-radius: 4px;
        color: white;
        align-self: center;
        justify-self: end;
        margin-top: 10px;
    }

</style>
<div class="popchat">
    <p>Text Here</p>
    <div class="pop-btn">
        I'll help!
    </div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class ThePop extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_popup.content.cloneNode(true)); //use the template to make a clone
        //this.shadowRoot.querySelector(".bubblechat p").innerText = this.getAttribute("desc-text");
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    popDisply(txt="") {
        this.shadowRoot.querySelector('.popchat').style.display = "block";
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("pop-card", ThePop)
