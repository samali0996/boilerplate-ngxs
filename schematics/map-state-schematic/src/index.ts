import {
  // FileOperator,
  SchematicContext,
  Rule,
  SchematicsException,
  Tree,
  apply,
  template,
  branchAndMerge,
  applyTemplates,
  chain,
  filter,
  // forEach,
  mergeWith,
  move,
  noop,
  // strings,
  url,
} from '@angular-devkit/schematics';
import {workspaces, strings, virtualFs, normalize} from '@angular-devkit/core';
import {buildDefaultPath, getWorkspace} from '../../utility/workspace';
import {findModuleFromOptions} from '../../utility/find-module';
import {parseName} from '../../utility/parse-name';

type MapStateOptions = {
  name: string;
  path: string;
  project: string;
  module: string | undefined;
};

export function mapStateSchematic(options: MapStateOptions): Rule {
  return async (tree: Tree, _context: SchematicContext) => {
    const workspace = await getWorkspace(tree);
    const project = workspace.projects.get(options.project);
    if (!project) {
      throw new SchematicsException(
        `Project "${options.project}" does not exist.`
      );
    }
    if (
      options.path === undefined ||
      options.path === null ||
      options.path === ''
    ) {
      options.path = buildDefaultPath(project);
    }

    options.module = findModuleFromOptions(tree, options);
    const parsedPath = parseName(options.path, options.name);
    options.name = parsedPath.name;
    options.path = parsedPath.path;

    const templateSource = apply(url('../files'), [
      applyTemplates({
        ...strings,
        ...options,
      }),
      move(parsedPath.path),
    ]);

    return mergeWith(templateSource);
  };
}
