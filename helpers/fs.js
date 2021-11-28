import fs from 'fs';

const fileIsExists = async name => {
  try {
    await fs.access(name);

    return true;
  } catch {
    return false;
  }
};

const appendFile = (name, content) => fs.promises.appendFile(name, content);
const readFile = name => fs.promises.readFile(name, 'utf8');

export { fileIsExists, appendFile, readFile };