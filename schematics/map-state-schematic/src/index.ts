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
import {
  buildDefaultPath,
  getWorkspace,
} from '@schematics/angular/utility/workspace';
import {
  findModule,
  findModuleFromOptions,
} from '@schematics/angular/utility/find-module';
import {parseName} from '@schematics/angular/utility/parse-name';
import {addNgxsStateToNgModule} from '../../utility/add-ngxs-state-to-ng-module';

type MapStateOptions = {
  name: string;
  path: string;
  project: string;
  module: string | undefined;
  rootModule: string;
  stateModelName: string;
  modelName: string;
  stateName: string;
  modelFileName: string;
  actionFileName: string;
  actionName: string;
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
    options.rootModule = findModule(tree, options.path);

    options.stateModelName = strings.classify(`${options.name}StateModel`);
    options.stateName = strings.classify(`${options.name}State`);
    options.modelFileName = strings.dasherize(`${options.name}.model`);
    options.modelName = strings.classify(`${options.name}Model`);
    options.actionFileName = strings.dasherize(`${options.name}.action`);
    options.actionName = strings.classify(`${options.name}Action`);

    const templateSource = apply(url('../files'), [
      template({
        ...strings,
        ...options,
      }),
      move(parsedPath.path),
    ]);

    return chain([
      addNgxsStateToNgModule({modulePath: options.rootModule}),
      mergeWith(templateSource),
    ]);
  };
}
