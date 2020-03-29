import fs from 'fs';
import path from 'path';

export default function DirectoryManager(dir) {
    this.hasFile = function hasFile(filename) {
        return fs.existsSync(`${dir}/${filename}`);
    }

    this.getFile = function getFile(filename, encoding) {
        return fs.readFileSync(`${dir}/${filename}`, encoding);
    }

    this.getFilenamesWithExtension = function getFilenamesWithExtension(ext) {
        return fs.readdirSync(dir)
            .filter(file => (path.extname(file) === ext))
            .map(file => file.slice(0, -3));
    }
}