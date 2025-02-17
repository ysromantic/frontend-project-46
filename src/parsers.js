import yaml from 'js-yaml';
import fs from 'fs';

const parse = (filepath) => {
    const extension = filepath.split('.').pop();
    const content = fs.readFileSync(filepath, 'utf-8');

    switch (extension) {
        case 'json':
            return JSON.parse(content);
        case 'yml':
        case 'yaml':
            return yaml.load(content);
        default:
            throw new Error(`Unsupported file format: ${extension}`);
    }
};

export default parse;
