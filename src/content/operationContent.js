import { PanelInfo } from '../panelInfo';
import { Accordion } from 'semantic-ui-react';
import { TIKTOK_EMBED_LINK } from '../constants';
import {
	assignmentOperatorDefinition,
	expressionDefinition,
	comparisonOperatorsDefinition,
} from '../definitions/operationDefinitions';
import {
	expressionCodeSnippet,
	assignmentOperatorCodeSnippet,
	comparisonOperatorsCodeSnippet,
} from '../codeSnippets/operationCodeSnippets';

const operationPanels = [
	{
		key: 'expression',
		title: "What's an expression?",
		content: {
			content: (
				<PanelInfo
					embedLink={`${TIKTOK_EMBED_LINK}7167227849659747626`}
					lessonDefinition={expressionDefinition}
					codeSnippet={expressionCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'assignmentOperator',
		title: "What's an assignment operator?",
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={assignmentOperatorDefinition}
					codeSnippet={assignmentOperatorCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'comparisonOperators',
		title: "What's a comparison operator?",
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={comparisonOperatorsDefinition}
					codeSnippet={comparisonOperatorsCodeSnippet}
				/>
			),
		},
	},
	{
		key: '',
		title: '',
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={null}
					codeSnippet={null}
				/>
			),
		},
	},
	{
		key: '',
		title: '',
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={null}
					codeSnippet={null}
				/>
			),
		},
	},
	{
		key: '',
		title: '',
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={null}
					codeSnippet={null}
				/>
			),
		},
	},
	{
		key: '',
		title: '',
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={null}
					codeSnippet={null}
				/>
			),
		},
	},
	{
		key: '',
		title: '',
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={null}
					codeSnippet={null}
				/>
			),
		},
	},
	{
		key: '',
		title: '',
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={null}
					codeSnippet={null}
				/>
			),
		},
	},
	{
		key: '',
		title: '',
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={null}
					codeSnippet={null}
				/>
			),
		},
	},
	{
		key: '',
		title: '',
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={null}
					codeSnippet={null}
				/>
			),
		},
	},
	{
		key: '',
		title: '',
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={null}
					codeSnippet={null}
				/>
			),
		},
	},
	{
		key: '',
		title: '',
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={null}
					codeSnippet={null}
				/>
			),
		},
	},
];

export const operationContent = (
	<Accordion fluid styled panels={operationPanels} />
);
