/**
 * WordPress dependencies
 */

import { addFilter } from '@wordpress/hooks';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function WCCAMediaPlaceholder( MediaPlaceholder ) {
	return function ( props ) {
		return (
			<MediaPlaceholder
				{ ...props }
				icon="palmtree"
				labels={ {
					title: props?.labels?.title + ' - WCCA',
					description: __( 'Upload media to WordCamp Central America', 'app-example' ),
				} }
			>
				<Button
					icon="palmtree"
					onClick={ console.log }
					isPrimary
				>
					{ __( 'WCCA Media', 'app-example' ) }
				</Button>
			</MediaPlaceholder>
		);
	};
}

addFilter(
	'editor.MediaPlaceholder',
	'app-example/wcca-media-upload',
	WCCAMediaPlaceholder
);
