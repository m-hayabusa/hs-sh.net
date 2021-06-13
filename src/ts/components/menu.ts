import {transitionTo} from "./page";

import {music} from "../music";
import {index} from "../index";
import {links} from "../links";

class menu {
    makelink(): void {
        const link_music = document.getElementById("link-music");
        const link_links = document.getElementById("link-links");
        const link_logo = document.getElementById("link-logo");

        if (link_music) link_music.onclick = () => transitionTo(new music());
        if (link_links) link_links.onclick = () => transitionTo(new links());
        if (link_logo) link_logo.onclick = () => transitionTo(new index());
    }
}

export {menu};
