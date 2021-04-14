/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
 
function extendCoreParagraphBlock( settings, name ) {
	if ( name !== 'core/quote' ) {
		return settings;
	}

	return {
		...settings,
		icon: 'palmtree',
		styles: [
			...settings.styles,
			{
				name: 'shadow',
				label: __( 'Shadow', 'app-example' ),
			},
		],
	};
}

addFilter(
	'blocks.registerBlockType',
	'wcca/paragraph',
	extendCoreParagraphBlock
);
