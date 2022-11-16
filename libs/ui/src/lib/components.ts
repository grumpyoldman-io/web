import { resolve } from 'node:path';

import { parseCSSFiles } from './parseCSSFiles';
import { getCSSFilesFromDir } from './getCSSFilesFromDir';

export const getComponents = (root: string) => {
  const files = getCSSFilesFromDir(resolve(root, 'components'));
  const components = parseCSSFiles(files);

  return components;
};
