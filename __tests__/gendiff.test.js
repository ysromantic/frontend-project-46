import { fileURLToPath } from 'url';
import path from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readJsonFixture = (filename) => JSON.parse(readFileSync(getFixturePath(filename), 'utf-8'));

test('gendiff with flat JSON', () => {
    const file1 = getFixturePath('file1.json');
    const file2 = getFixturePath('file2.json');
    const expected = readJsonFixture('expected.json');

    const result = JSON.parse(genDiff(file1, file2));
    expect(result).toEqual(expected);
});
