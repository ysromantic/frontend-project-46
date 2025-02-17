import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

let expectedDiff;

beforeEach(() => {
    expectedDiff = fs.readFileSync(getFixturePath('expectedDiff.txt'), 'utf-8').trim();
});

const normalize = (str) => str.replace(/\r\n/g, '\n').trim();

test('gendiff with flat YAML files', () => {
    const file1Path = getFixturePath('file1.yml');
    const file2Path = getFixturePath('file2.yml');
    const result = genDiff(file1Path, file2Path);

    expect(normalize(result)).toEqual(normalize(expectedDiff));
});
