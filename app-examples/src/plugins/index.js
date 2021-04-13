/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';
import { Panel, PanelBody, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './style.scss'

registerPlugin( 'wcca-plugin-sidebar', {
	render: function() {
		const [ value, setValue ] = useState( '' );
		return (
			<PluginSidebar
				className="wcca-plugin-sidebar-panel"
				name={ __( 'wcca-plugin-sidebar', 'app-example' ) }
				icon={ 'palmtree' }
				title={ __( 'WCCA @2021', 'app-example' ) }
			>
				<img
					className="portada-hero"
					src="http://localhost:8888/wp-content/uploads/2021/04/portada-hero.png"
				/>

				<Panel>
					<PanelBody title={ __( 'WCCA Tools', 'app-example' ) }>
						<TextControl
							label={ __( 'Search', 'app-example' ) }
							value={ value }
							onChange={ setValue }
						/>
					</PanelBody>
				</Panel>
			</PluginSidebar>
		);
	}
} );
