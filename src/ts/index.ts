import "../less/index.less";
import {page, transitionTo} from "./components/page";
import {menu} from "./components/menu";

class index extends page {
    title = "hs-sh: Index";
    path = "/index.html";
    onload(): void {
        console.log("index.");

        new menu().makelink();

        setTimeout(() => {
            // transitionTo(new music());
        }, 2000);
    }
}

window.onload = () => {
    transitionTo(new index());
};

export {index};
