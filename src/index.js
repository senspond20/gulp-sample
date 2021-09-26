import router from './routes/index.js'

const navigateTo = async (url) => {
    history.pushState(null, null, url);
    await router();
};

const navlinkHandler =(e)=>{
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.href);
    }
}
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", async () => {
    document.body.addEventListener("click", e => navlinkHandler);
    await router();
});

