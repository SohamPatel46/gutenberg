/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import EditableText from '../';

const meta = {
	title: 'BlockEditor/EditableText',
	component: EditableText,
	parameters: {
		docs: {
			canvas: { sourceState: 'shown' },
			description: {
				component:
					'Renders a user interface that allows the user to select predefined (common) font sizes.',
			},
		},
	},
	argTypes: {
		tagName: {
			control: { type: 'text' },
			description: 'The tag name of the editable element.',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		onChange: {
			action: 'onChange',
			control: { type: null },
			table: {
				type: { summary: 'function' },
			},
			description: 'Function executed when the text value changes.',
		},
		onReplace: {
			control: { type: null },
			table: {
				type: { summary: 'function' },
			},
			description:
				'Function executed when the `Text` instance can be replaced with the given blocks.',
		},
		onMerge: {
			control: { type: null },
			table: {
				type: { summary: 'function' },
			},
			description: 'Function executed when blocks can be merged.',
		},
		onRemove: {
			control: { type: null },
			table: {
				type: { summary: 'function' },
			},
			description: 'Function executed when the block can be removed.',
		},
		value: {
			control: { type: 'text' },
			description: 'String to make editable.',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		placeholder: {
			control: { type: 'text' },
			description: 'Placeholder text to show when the field is empty.',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		disableLineBreaks: {
			control: { type: null },
			description:
				'Text wont insert line breaks on Enter if set to true.',
			table: {
				type: {
					summary: 'boolean',
				},
			},
		},
	},
};

export default meta;

export const Default = {
	render: function Template( { onChange, ...args } ) {
		const [ value, setValue ] = useState();

		return (
			<EditableText
				{ ...args }
				value={ value }
				onChange={ ( ...changeArgs ) => {
					onChange( ...changeArgs );
					setValue( ...changeArgs );
				} }
			/>
		);
	},
	args: {
		tagName: 'h2',
	},
};
