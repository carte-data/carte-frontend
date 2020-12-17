const { resolve } = require('path');
const { readdir } = require('fs').promises;

export async function getPaths(dir) {
    const dirEntries = await readdir(dir, { withFileTypes: true });

    const files = await Promise.all(dirEntries.map((dirEntry) => {
        const res = resolve(dir, dirEntry.name);

        if (dirEntry.isDirectory()) {
            return getFiles(res);
        } else {
            return res.split('.').slice(0, -1).join('.');
        }
    }));

    return Array.prototype.concat(...files);
}
