# generator-wp-block
A WordPress Block Generator for Yeoman

##Installation

First, install Yeoman (I assume you have node.js pre-installed.)
`npm i -g yo`

Clone generator-wp-block and install dependencies
`git clone https://github.com/digelim/generator-wp-block.git`
`cd generator-wp-block-master && npm install`

Run the generator
`yo wp-block`

##Usage
Enter the block details

1. Name
2. Category
3. Attributes
3. Edit & save JSX

After this you'll need to install webpack & dependencies
`cd [category]/[name] && npm install`

`npm run build`

Register/enqueue the files and that's all folks!


##references
https://github.com/guidesmiths/generator-react-component
https://github.com/ahmadawais/Gutenberg-Boilerplate
