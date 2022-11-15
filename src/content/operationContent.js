import { PanelInfo } from '../panelInfo';
import { Accordion } from 'semantic-ui-react';
import { TIKTOK_EMBED_LINK } from '../constants';
import {
	arithmeticOperatorsDefinition,
	operatorPrecedenceDefinition,
	comparisonOperatorsDefinition,
} from '../definitions';
import {
	arithmeticOperatorsCodeSnippet,
	operatorPrecedenceCodeSnippet,
	comparisonOperatorsPartOneCodeSnippet,
	comparisonOperatorsPartTwoCodeSnippet,
} from '../codeSnippets';

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
