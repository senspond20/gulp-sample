import router from './router.js'

const navigateTo = async url => {
    history.pushState(null, null, url);
    await router();
};
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", async () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    await router();
});

