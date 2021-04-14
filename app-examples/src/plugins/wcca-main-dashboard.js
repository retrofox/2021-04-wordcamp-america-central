/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import {
    __experimentalMainDashboardButton as MainDashboardButton,
    __experimentalFullscreenModeClose as FullscreenModeClose,
} from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './style.scss'

const WCCAMainDashboardButton = () => (
    <MainDashboardButton>
        <FullscreenModeClose
            icon="palmtree"
            href="https://centroamerica.wordcamp.org/2021/"
            title={ __( 'The best WordCamp of 2021', 'app-example' ) }
        />
    </MainDashboardButton>
);
 
registerPlugin( 'main-dashboard-button-test', {
    render: WCCAMainDashboardButton,
} );
