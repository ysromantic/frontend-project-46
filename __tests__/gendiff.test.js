import fs from 'fs';
import path from 'path';
import genDiff from '../src/gendiff.js';

const getFixturePath = (name) => path.resolve(process.cwd(), '__fixtures__', name);

test('gendiff with flat JSON (string output)', () => {
    const file1Path = getFixturePath('file1.json');
    const file2Path = getFixturePath('file2.json');
    const expected = fs.readFileSync(getFixturePath('expected.txt'), 'utf-8').trim();

    const result = genDiff(file1Path, file2Path);

    expect(result.trim()).toBe(expected);
});
