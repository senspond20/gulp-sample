import Dashboard from "../pages/DashBoard.js";
import Users from "../pages/Users.js";
import Posts from "../pages/Post.js";
import PostView from "../pages/PostView.js";
import Settings from "../pages/Settings.js";
import Raw from "../pages/Raw.js";
const routes = [
    { path: "/", view: Dashboard },
    { path: "/users", view: Users },
    { path: "/posts", view: Posts },
    { path: "/posts/:id", view: PostView },
    { path: "/settings", view: Settings },
    { path: "/raw", view: Raw }
];

export default routes;
