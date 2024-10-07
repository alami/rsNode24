import fs from 'node:fs';
import { stdin, stdout } from 'node:process';
import { Transform, pipeline }  from 'node:stream';

const transform = async () => {
    const transform = new Transform({
        transform(chunk, enc, cb) {
            const chunkStr = chunk.toString().trim();
            const newStr = chunkStr.split('').reverse().join('');
            cb(null, newStr+'\n')
        }
    });
    pipeline(
        stdin,
        transform,
        stdout,
        err=>{console.log(err);
        }
    );
};

await transform();