import {
	variableContent,
	operationContent,
	inputOutputContent,
	branchingContent,
	loopContent,
	functionContent,
	groupDataContent,
} from './content';

export const rootPanels = [
	{
		key: '1',
		title: 'Variables',
		content: { content: variableContent },
	},
	{
		key: '2',
		title: 'Operations',
		content: { content: operationContent },
	},
	{
		key: '3',
		title: 'Input/Output',
		content: { content: inputOutputContent },
	},
	{
		key: '4',
		title: 'Logic Flow',
		content: { content: branchingContent },
	},
	{
		key: '5',
		title: 'Loops',
		content: { content: loopContent },
	},
	{
		key: '6',
		title: 'Functions',
		content: { content: functionContent },
	},
	{
		key: '7',
		title: 'Group Data',
		content: { content: groupDataContent },
	},
];
