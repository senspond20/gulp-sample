import AbstractView from "../components/AbstractView.js";

export default class extends AbstractView {

    // 1. 생성자
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    // 2. 랜더링
    async render() {
        return `
            <h1>Posts</h1>
            <p>You are viewing the posts!</p>
            <div class="page">
            
            </div>
        `;
    }
    // 3. 랜더링 이후 데이터 바인딩
    async afterRender(){
        return ""
    }
}