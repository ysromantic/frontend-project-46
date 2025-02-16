import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
    const absolutePath1 = path.resolve(process.cwd(), filepath1);
    const absolutePath2 = path.resolve(process.cwd(), filepath2);
    const file1Content = fs.readFileSync(absolutePath1, 'utf-8');
    const file2Content = fs.readFileSync(absolutePath2, 'utf-8');

    const data1 = JSON.parse(file1Content);
    const data2 = JSON.parse(file2Content);

    const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

    const result = keys.map((key) => {
        if (!_.has(data2, key)) {
            return `  - ${key}: ${data1[key].value || data1[key]}`;
        }
        if (!_.has(data1, key)) {
            return `  + ${key}: ${data2[key].value || data2[key]}`;
        }
        if (!_.isEqual(data1[key], data2[key])) {
            return `  - ${key}: ${data1[key].value || data1[key]}\n  + ${key}: ${data2[key].value || data2[key]}`;
        }
        return `    ${key}: ${data1[key].value || data1[key]}`;
    });

    return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
