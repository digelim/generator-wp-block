const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;


registerBlockType( 'gb/<%= nameUp %>',
{
	title: __( '<%= name %>', 'GB' ),
	icon: 'shield',
	category: '<%- category -%>',
	attributes: {
		<%- attributes -%>
	},
	edit: function( props ) {
		const { attributes, setAttributes } = props;

		return (
			<%- edit -%>
		);
	},
	save: function( props ) {
		const { attributes } = props;

		return (
			<%- save -%>
		);
	},
} );
