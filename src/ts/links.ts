import "../less/links.less";
import {page, transitionTo} from "./components/page";
import {menu} from "./components/menu";

class links extends page {
    title = "hs-sh: Links";
    path = "/links.html";
    onload(): void {
        console.log("links.");

        new menu().makelink();
    }
}

window.onload = () => {
    transitionTo(new links());
};

export {links};
