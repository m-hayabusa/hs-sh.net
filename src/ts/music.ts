import "../less/music.less";
import {page, transitionTo} from "./components/page";
import {menu} from "./components/menu";

class music extends page {
    title = "hs-sh: Music";
    path = "/music.html";
    onload(): void {
        console.log("music.");

        new menu().makelink();

        setTimeout(() => {
            // transitionTo(new index());
        }, 2000);
    }
}

window.onload = () => {
    transitionTo(new music());
};

export {music};
