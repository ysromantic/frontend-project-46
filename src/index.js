import fs from 'fs';
import path from 'path';

const genDiff = (filepath1, filepath2) => {
    const absolutePath1 = path.resolve(process.cwd(), filepath1);
    const absolutePath2 = path.resolve(process.cwd(), filepath2);

    const file1 = fs.readFileSync(absolutePath1, 'utf-8');
    const file2 = fs.readFileSync(absolutePath2, 'utf-8');

    return `File1 content:\n${file1}\n\nFile2 content:\n${file2}`;
};

export default genDiff;
