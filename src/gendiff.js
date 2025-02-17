import path from 'path';
import parse from './parsers.js';

const genDiff = (filepath1, filepath2) => {
    const absolutePath1 = path.resolve(process.cwd(), filepath1);
    const absolutePath2 = path.resolve(process.cwd(), filepath2);

    const data1 = parse(absolutePath1);
    const data2 = parse(absolutePath2);

    const keys = [...new Set([...Object.keys(data1), ...Object.keys(data2)])].sort();

    const diff = keys.map((key) => {
        if (!(key in data2)) {
            return `  - ${key}: ${data1[key]}`;
        }
        if (!(key in data1)) {
            return `  + ${key}: ${data2[key]}`;
        }
        if (data1[key] !== data2[key]) {
            return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
        }
        return `    ${key}: ${data1[key]}`;
    });

    return `{\n${diff.join('\n')}\n}`;
};

export default genDiff;
