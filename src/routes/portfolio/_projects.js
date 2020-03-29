import DirectoryManager from '../../utilities/DirectoryManager.js';
import MarkdownManager from '../../utilities/MarkdownManager.js';

const contentDir = 'content/portfolio';
const markdownExtension = '.md';

const directoryManager = new DirectoryManager(contentDir);
const markdownManager = new MarkdownManager();

export function getProjects() {
    const slugs = directoryManager.getFilenamesWithExtension(markdownExtension);
    return slugs.map(getProject);
}

export function getProject(slug) {
    const filename = `${ slug }.md`;

    if (!directoryManager.hasFile(filename)) {
        // Project doesn't exist
		return null;
    }

    const file = directoryManager.getFile(filename, 'utf-8');
    const { metadata, content } = markdownManager.parseMarkdown(file);
    const html = markdownManager.render(content);

    const date = new Date(`${ metadata.publishedOn } UTC`);
    metadata.dateString = date.toDateString();

    return Object.freeze({ slug, metadata, html });
}