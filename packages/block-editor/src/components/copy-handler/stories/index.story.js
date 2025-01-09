/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import CopyHandler from '../';

export default {
	title: 'BlockEditor/CopyHandler',
	component: CopyHandler,
	parameters: {
		docs: {
			canvas: { sourceState: 'shown' },
			description: {
				component:
					'The `CopyHandler` component catches copy/cut and paste events coming from its props.children.',
			},
		},
	},
	argTypes: {
		props: {
			control: false,
			description: 'The props for the component.',
			table: {
				type: { summary: 'object' },
			},
		},
	},
};

export const Default = {
	render: function Template( args ) {
		return (
			<CopyHandler { ...args }>
				<button>{ __( 'Copy Handler' ) }</button>
			</CopyHandler>
		);
	},
};
