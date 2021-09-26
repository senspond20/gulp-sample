import AbstractView from "../components/AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async render() {
        return `
            <h1>Welcome !!! </h1>
            <p>
                안녕하세요. 반갑습니다. 당신을 환영합니다.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
    async afterRender(){
        return '';
    }
}