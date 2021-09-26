import AbstractView from "../components/AbstractView";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
        this.setScript("setting.bundle.js")
    }

    // 1. 랜더링
    async render() {
        // alert("ggg")


        return `
            <h1 id="title">Settings</h1>
            <p>Manage your privacy and configuration.</p>
        `;
    }

    // 2. 랜더링 이후
    async afterRender(){
        // document.getElementById('title').addEventListener('click',titleClickHandler);
        // const titleClickHandler = ()=>{
        //     alert('제목 클릭 했엉')
        // }
        const title = document.getElementById('title');
        console.log(title);
        title.addEventListener('click',function (){
            console.log("gggggg")
        })

    }


}