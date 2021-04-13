/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './style.scss'

registerPlugin( 'wcca-plugin-sidebar', {
	render: function() {
		return (
			<PluginSidebar
				className="wcca-plugin-sidebar-panel"
				name={ __( 'wcca-plugin-sidebar', 'app-example' ) }
				icon={ 'palmtree' }
				title={ __( 'WCCA @2021', 'app-example' ) }
			>
				<img
					className="portada-hero"
					src="http://localhost:8888/wp-content/uploads/2021/04/wcca-portada-hero.png"
				/>
			</PluginSidebar>
		);
	}
} );
