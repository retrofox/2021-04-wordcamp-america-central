/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';
import { BlockControls, InspectorControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, Panel, PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function ExtendedCoreQuoteBlockEdit ( BlockEdit ) {
	return function ( props ) {
		if ( props?.name !== 'core/quote' ) {
			return (
				<BlockEdit { ...props } />
			);
		}

		return (
			<Fragment>
				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton
							icon='palmtree'
							onClick={ console.log }
						/>
						<ToolbarButton
							icon='smiley'
							onClick={ console.log }
						/>
					</ToolbarGroup>
				</BlockControls>

				<InspectorControls>
					<Panel>
						<PanelBody title={ __( 'WCCA', 'app-example' ) }>
							<img
								className="portada-hero"
								src="http://localhost:8888/wp-content/uploads/2021/04/portada-hero.png"
							/>

							<TextControl
								label={ __( 'Your name', 'app-example' ) }
								value={ '' }
								onChange={ console.log }
							/>
						</PanelBody>
					</Panel>
				</InspectorControls>
				<BlockEdit { ...props } />
			</Fragment>
		);
	};
}

addFilter(
	'editor.BlockEdit',
	'wcca/block-toolbar',
	ExtendedCoreQuoteBlockEdit
)
