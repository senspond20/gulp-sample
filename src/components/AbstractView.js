/* 추상 클래스 */
export default class {
    constructor(params) {
        this.params = params;
    }
    setTitle(title) {
        document.title = title;
    }
    // setScript(scriptToAppend){
    //         const script = document.createElement("script");
    //         script.src = scriptToAppend;
    //         script.async = false;
    //         script.defer = true;
    //         document.body.appendChild(script);
    //         this.usescript = true;
    // }

    async render() {
        return ""
    }
    async afterRender(){
        return ""
    }
}