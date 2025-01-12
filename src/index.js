import fs from 'node:fs/promises';

const badAsyncFn = () => {
  const content = await fs.readFile('some-file');
};
