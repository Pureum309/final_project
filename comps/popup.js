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
        text-align: center;
        
    }
   
    .pop-btn:hover, .close_pop button {
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
        margin-bottom: 0.8em;
    }

    .pop-btn a {
        text-decoration: none;
        color: white;
    }

    .pop-btn a:hover, .close_pop button:hover {
        background-color:#4095c6;
        color: #16314b;
    }

    .close_pop button {
        padding: 0.5em;
        float: right;
        background: #549DE3;
        border: 0;
        border-radius: 4px;
        color: white;
    
    }

</style>
<div class="popchat">
    <div class="close_pop"><button>CLOSE</button></div>
    <p>Text Here</p>
    <div class="pop-btn">
        <a href = "https://www.iberdrola.com/sustainability/how-to-reduce-plastic-use">Learn more</a>
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
        // this.shadowRoot.querySelector(".pop-btn > a").href = "https://www." + this.getAttribute("link_name");

        this.shadowRoot.querySelector('.close_pop').onclick = () => {
            this.closeDisplay();
            document.querySelector('#reduce').resetClick();
            document.querySelector('#reduce').backColor();
            document.querySelector('#reuse').resetClick();
            document.querySelector('#reuse').backColor();
            document.querySelector('#recycle').resetClick();
            document.querySelector('#recycle').backColor();
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    popDisply(txt, link) {
        this.shadowRoot.querySelector('.popchat').style.display = "flex";
        this.shadowRoot.querySelector('.popchat > p').innerText = txt;
        this.shadowRoot.querySelector(".pop-btn > a").href = "https://www." + link;
    }

    closeDisplay() {
        this.shadowRoot.querySelector('.popchat').style.display = "none";
    }

}

//MUST HAVE - define the tag for the custom elements
customElements.define("pop-card", ThePop)
