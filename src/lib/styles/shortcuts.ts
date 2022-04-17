import type { FullConfig } from 'windicss/types/interfaces';

/**
 * @note
 * restart dev server after updating shortcuts,
 * as this will be consumed through windi.config.ts
 */
export const shortcuts: FullConfig = {
	layout: {
		'@apply': 'max-w-1000px mx-auto p-4'
	},
	btn: {
		color: 'white',
		'@apply':
			'cursor-pointer text-sm text-center font-semibold bg-blue-600 rounded-2xl px-5 py-2.5',
		'&:hover': {
			'@apply': 'bg-blue-800'
		},
		'&:focus': {
			'@apply': 'ring-4 ring-blue-300'
		},
		'&:dark': {
			'@apply': 'bg-blue-600',
			'&:focus': {
				'@apply': 'ring-blue-800'
			},
			'&:hover': {
				'@apply': 'bg-blue-700'
			}
		}
	}
};
