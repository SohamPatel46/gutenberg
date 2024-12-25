/**
 * Internal dependencies
 */
import MediaReplaceFlow from '../';
/**
 * WordPress dependencies
 */

const meta = {
	title: 'BlockEditor/MediaReplaceFlow',
	component: MediaReplaceFlow,
	parameters: {
		docs: {
			canvas: { sourceState: 'shown' },
			description: {
				component:
					'It provides a way for keyboard and assistive technologies users to jump back to the currently selected block.',
			},
		},
	},
	argTypes: {},
};

export default meta;

export const Default = {
	render: function Template( { ...args } ) {
		return (
			<MediaReplaceFlow
				{ ...args }
				allowedTypes={ [ 'png' ] }
				accept={ 'image/*' }
			/>
		);
	},
};
