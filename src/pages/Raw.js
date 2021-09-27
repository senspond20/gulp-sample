import AbstractView from "../components/AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Raw Test");
    }

    async render() {

        return `
            <h1>Raw Test</h1>
            <div id ="user-template"></div>
        `
    }
    async afterRender(){
               
        const data = {
            users: [
                { name: "홍길동1", id: "aaa1", email: "aaa1@gmail.com" },
                { name: "홍길동2", id: "aaa2", email: "aaa2@gmail.com" },
                { name: "홍길동3", id: "aaa3", email: "aaa3@gmail.com" },
                { name: "홍길동4", id: "aaa4", email: "aaa4@gmail.com" },
                { name: "홍길동5", id: "aaa5", email: "aaa5@gmail.com" }
            ]
        };
        const table = `<table><thead><th>이름</th><th>아이디</th><th>메일주소</th></thead><tbody>`

        const tr = data.users.forEach(item=>{
            return (
                    `
                    <tr> 
                        <td>${item.name}</td> 
                        <td>${item.id}/td> 
                        <td><a href="mailto:${item.eamil}">${item.eamil}</a></td> 
                    </tr> 
                   `
            )
        })
        const html = table + tr + '</tbody></table>'
        document.getElementById('user-template').innerHTML = html;
    }
}
