/**
 * WordPress dependencies
 */
import { registerBlockStyle } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockStyle( 'core/quote', { 
	name: 'gradient',
	label: __( 'Gradient', 'app-example' ),
} );
