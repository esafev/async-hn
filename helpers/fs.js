import fs from 'fs';

const fileIsExists = async name => {
  try {
    await fs.access(name);

    return true;
  } catch {
    return false;
  }
};

const writeFile = (name, content) => fs.promises.writeFile(name, content);
const readFile = name => fs.promises.readFile(name, 'utf8');

export { fileIsExists, writeFile, readFile };