import { PanelInfo } from '../panelInfo';
import { Accordion } from 'semantic-ui-react';
import { TIKTOK_EMBED_LINK } from '../constants';
import {
	expressionDefinition,
	assignmentOperatorDefinition,
	comparisonOperatorsDefinition,
	arithmeticOperatorsDefinition,
	logicalAndDefinition,
	logicalOrDefinition,
	logicalNotDefinition,
	stringOperatorDefinition,
	conditionalTernaryOperatorDefinition,
} from '../definitions/operationDefinitions';
import {
	expressionCodeSnippet,
	assignmentOperatorCodeSnippet,
	comparisonOperatorsCodeSnippet,
	arithmeticOperatorsCodeSnippet,
	logicalAndCodeSnippet,
	logicalOrCodeSnippet,
	logicalNotCodeSnippet,
	stringOperatorCodeSnippet,
	conditionalTernaryOperatorCodeSnippet,
} from '../codeSnippets/operationCodeSnippets';

const operationPanels = [
	{
		key: 'expression',
		title: 'Expression',
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
		title: 'Assignment Operator',
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
		title: 'Comparison Operators',
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
		key: 'arithmeticOperators',
		title: 'Arithmetic Operators',
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={arithmeticOperatorsDefinition}
					codeSnippet={arithmeticOperatorsCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'logicalAnd',
		title: 'Logical AND',
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={logicalAndDefinition}
					codeSnippet={logicalAndCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'logicalOr',
		title: 'Logical OR',
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={logicalOrDefinition}
					codeSnippet={logicalOrCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'logicalNot',
		title: 'Logical NOT',
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={logicalNotDefinition}
					codeSnippet={logicalNotCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'stringOperator',
		title: 'String Operator',
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={stringOperatorDefinition}
					codeSnippet={stringOperatorCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'conditionalTernaryOperator',
		title: 'Conditional (Ternary) Operator',
		content: {
			content: (
				<PanelInfo
					embedLink={null}
					lessonDefinition={conditionalTernaryOperatorDefinition}
					codeSnippet={conditionalTernaryOperatorCodeSnippet}
				/>
			),
		},
	},
];

export const operationContent = (
	<Accordion fluid styled panels={operationPanels} />
);
