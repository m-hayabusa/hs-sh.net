class page {
    title = "";
    path = "";
    onload(): void {
        return;
    }
}

function transitionTo(newPage: page): void {
    console.log("transitionTo", newPage.path, newPage.title);

    const req = new XMLHttpRequest();
    req.addEventListener("load", function name() {
        try {
            if (this.responseXML) {
                const oldcontent = document.getElementById("main");
                const newcontent = this.responseXML.getElementById("main");
                if (oldcontent && newcontent) {
                    if (document.location.pathname === newPage.path) {
                        history.replaceState(null, newPage.title, newPage.path);
                    } else {
                        history.pushState(null, newPage.title, newPage.path);
                    }
                    document.title = newPage.title;
                    oldcontent.innerHTML = newcontent.innerHTML;
                    newPage.onload();
                } else {
                    throw "#main seems null";
                }
            } else {
                throw this.responseText;
            }
        } catch (error) {
            console.error("something went wrong in transition...", error);
        }
    });
    req.open("GET", newPage.path, true);
    req.responseType = "document";
    req.send();
}

export {page, transitionTo};
