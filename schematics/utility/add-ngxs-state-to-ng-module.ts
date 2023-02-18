import {Rule, Tree} from '@angular-devkit/schematics';
import * as ts from 'typescript';

export interface NgxsStateToNgModuleOptions {
  modulePath: string;
}

export function addNgxsStateToNgModule(
  options: NgxsStateToNgModuleOptions
): Rule {
  return (host: Tree) => {
    const sourceText = host.readText(options.modulePath);
    const source = ts.createSourceFile(
      options.modulePath,
      sourceText,
      ts.ScriptTarget.Latest,
      true
    );
    return host;
  };
}
