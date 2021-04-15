/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

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
