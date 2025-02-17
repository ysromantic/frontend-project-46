#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/gendiff.js';

program
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .helpOption('-h, --help', 'output usage information')

    .arguments('<filepath1> <filepath2>')
    .action((filepath1, filepath2) => {
        const result = genDiff(filepath1, filepath2);
        console.log(result);
    });

program.parse(process.argv);
