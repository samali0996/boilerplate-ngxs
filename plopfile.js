
module.exports = function (plop) {
  plop.setHelper('lowerCase', function(text) {
    return text.toLowerCase();
  });

  plop.setHelper('capatalizeFirstLetter', function(text){
    return text.charAt(0).toUpperCase()+text.slice(1)
  })

  plop.setGenerator('ngxsMapStateModel', {
    description: 'NGXS Map State Model',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/{{lowerCase name}}/models/{{lowerCase name}}.model.ts',
        templateFile: 'plop_templates/model.ts.hbs',
      },
    ],
  });
  plop.setGenerator('ngxsMapStateAction', {
    description: 'Ngxs Map Action',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/{{lowerCase name}}/action/{{lowerCase name}}.action.ts',
        templateFile: 'plop_templates/action.ts.hbs',
      },
    ],
  })
};
