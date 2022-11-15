import { PanelInfo } from '../panelInfo';
import { Accordion } from 'semantic-ui-react';
import { TIKTOK_EMBED_LINK } from '../constants';
import {
	arithmeticOperatorsDefinition,
	assignmentOperatorsDefinition,
	incrementDecrementDefinition,
	operatorPrecedenceDefinition,
	comparisonOperatorsDefinition,
} from '../definitions/operationDefinitions';
import {
	arithmeticOperatorsCodeSnippet,
	assignmentOperatorsCodeSnippet,
	incrementDecrementCodeSnippet,
	operatorPrecedenceCodeSnippet,
	comparisonOperatorsPartOneCodeSnippet,
	comparisonOperatorsPartTwoCodeSnippet,
} from '../codeSnippets/operationCodeSnippets';

const operationPanels = [
	{
		key: 'arithmeticOperators',
		title: 'Arithmetic Operators',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7151195266224262446`}
					lessonDefinition={arithmeticOperatorsDefinition}
					codeSnippet={arithmeticOperatorsCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'assignmentOperators',
		title: 'Assignment Operators',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7151265482761407786`}
					lessonDefinition={assignmentOperatorsDefinition}
					codeSnippet={assignmentOperatorsCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'incrementDecrement',
		title: 'Increment + Decrement',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7151235536026406190`}
					lessonDefinition={incrementDecrementDefinition}
					codeSnippet={incrementDecrementCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'operatorPrecedence',
		title: 'Operator Precedence',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7151209648559836458`}
					lessonDefinition={operatorPrecedenceDefinition}
					codeSnippet={operatorPrecedenceCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'comparisonOperatorsPt1',
		title: 'Comparison Operators Pt.1',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7151472626358291758`}
					lessonDefinition={comparisonOperatorsDefinition}
					codeSnippet={comparisonOperatorsPartOneCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'comparisonOperatorsPt2',
		title: 'Comparison Operators Pt.2',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7151490219278257454`}
					lessonDefinition={comparisonOperatorsDefinition}
					codeSnippet={comparisonOperatorsPartTwoCodeSnippet}
				/>
			),
		},
	},
];

export const operationContent = (
	<Accordion fluid styled panels={operationPanels} />
);
