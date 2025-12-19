//header
class THeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <header>
            <h1>XEZBETH</h1>
            <nav>
		        <button onclick="toggle()">Theme</button>
            </nav>
        </header>
        `;
    }
}

class TSection extends HTMLElement {
    connectedCallback(){
        const heading = this.getAttribute("heading");
        const details = this.getAttribute("details");
        this.innerHTML = `
        <section>
            <div>
                <h2>${heading}</h2>
                <p>${details}</p>
            </div>
        </header>
        `;
    }
}

class TLinks extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <section>
            <div class="flex">
                <h2>Links</h2>
                <a href="https://www.twitch.tv/x3zbeth" class="btn">Twitch</a>
                <a href="#" class="btn hidden">YouTube</a>
                <a href="https://x3zbeth.itch.io/" class="btn">Itch</a>
                <a href="https://github.com/Xezbeth-dev" class="btn">GitHub</a>
            </div>
	    </section>
    `;
    }
}

customElements.define("t-header", THeader);
customElements.define("t-section", TSection);
customElements.define("t-links", TLinks);