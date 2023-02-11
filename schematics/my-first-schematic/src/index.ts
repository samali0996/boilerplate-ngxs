import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
// import {Schema} from './schema';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function myFirstSchematic(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // const {stateName} = _options;
    // make this an option
    // const path = `src/app/`;
    return tree;
  };
}
