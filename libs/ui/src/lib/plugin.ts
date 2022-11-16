import createPlugin from 'tailwindcss/plugin';
import { PluginCreator } from 'tailwindcss/types/config';
import { getComponents } from './components';

const mainFunction =
  (root: string): PluginCreator =>
  ({ addComponents }) => {
    addComponents(getComponents(root));
  };

export const plugin = (root: string) => createPlugin(mainFunction(root));
