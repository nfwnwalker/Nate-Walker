import marked from 'marked';

const renderer = new marked.Renderer();

renderer.image = (src, title, alt) => {
    // To ensure that images stay in their containers
    return `
        <figure style="max-width: 100%;">
            <img 
                src="${ src }"
                alt="${ alt }"
                style="width: 100%; heigh: auto;"
            />
        </figure>
    `;
}

export default function MarkdownManager() {
    this.parseMarkdown = function parseMarkdown(markdown) {
        const match = /---\n([\s\S]+?)\n---/.exec(markdown);
        const content = markdown.slice(match[0].length);
        const frontMatter = match[1];
        const metadata = {};

        frontMatter.split('\n')
            .forEach(pair => {
                const colonIndex = pair.indexOf(':');
                const key = pair.slice(0, colonIndex).trim();
                const value = pair.slice(colonIndex + 1).trim();
                metadata[key] = value;
            });

        return Object.freeze({ metadata, content });
    }

    this.render = function render(markdown) {
        return marked(markdown, { renderer: renderer });
    }
}