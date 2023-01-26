
const yeoman = require('yeoman-generator');
const fs = require('fs');
const path = require('path');

module.exports = yeoman.Base.extend({
  prompting: function() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your block\'s name',
      default: ''
    },
    {
      type: 'input',
      name: 'category',
      message: 'Your block\'s category',
      default: 'common'
    },
    {
      type: 'input',
      name: 'attributes',
      message: 'Your block attributes',
      default: ''
    },
    {
      type: 'input',
      name: 'edit',
      message: 'Your block\'s edit jsx',
      default: ''
    },
    {
      type: 'input',
      name: 'save',
      message: 'Your block\'s save jsx',
      default: ''
    }
    ]).then(function(answers) {
      this.props = answers;
    }.bind(this));
  },
  writing: function() {
    this._copyFiles('block.js', 'block.js');
    this._copyFiles('block.build.js', 'block.build.js');
    this._copyFiles('editor.css', 'editor.css');
    this._copyFiles('index.php', 'index.php');
    this._copyFiles('package-lock.json','package-lock.json');
    this._copyFiles('package.json','package.json');
    this._copyFiles('style.css','style.css');
    this._copyFiles('webpack.config.js','webpack.config.js');

  },
  end: function() {
    var outputMsg = `\n\nYour block ${this.props.name} has been created.`;
    this.log(outputMsg);
  },
  _copyFiles: function(from, to) {
    this.props.nameUp = this._toCamelCase(this.props.name);
    this.fs.copyTpl(this.templatePath(from), this.destinationPath(this.props.category+'/'+this.props.nameUp+'/'+to), this.props);
  },
  _toCamelCase: function(str) {
    return str
    .replace(/\s(.)/g, function($1) { return $1.toLowerCase(); })
    .replace(/\s/g, '')
    .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
  }
});
