module.exports = {
    prompt: ({ inquirer }) => {
        var getAllFilesFromFolder = function(dir) {

          var filesystem = require("fs");
          var results = [];
      
          filesystem.readdirSync(dir).forEach(function(file) {
      
              file = dir+'/'+file;
              var stat = filesystem.statSync(file);
             
              if (stat && stat.isDirectory()) {
                 results.push(file);
              } 
      
          });
      
          return results;
      
      };
      var dirs = getAllFilesFromFolder("src/features");
      if( dirs.length < 1 ){
        throw new Error('Create feature first');
      }
      else{
          dirs = dirs.map(dir => dir.replace("src/features/",""))
      }
      const questions = [
        {
          type: 'select',
          name: 'feature',
          message: 'What is the name of the feature?',
          choices: dirs
        },
        {
          type: 'select',
          name: 'category',
          message: 'Which Atomic design level?',
          choices: ['atoms', 'molecules', 'organisms', 'pages']
        },
        {
          type: 'input',
          name: 'name',
          message: 'What is the component name?'
        },
       
      ]
      return inquirer
        .prompt(questions)
        .then(answers => {
          const { category, name, feature } = answers
          const path = `${feature}/components/${category}/${name}`
          const absPath = `src/features/${path}`
          return { ...answers, path, absPath, category }
        })
    }
  }