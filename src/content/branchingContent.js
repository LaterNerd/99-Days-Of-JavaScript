import { PanelInfo } from '../panelInfo';
import { Accordion } from 'semantic-ui-react';
import { TIKTOK_EMBED_LINK } from '../constants';
import {
	assignmentOperatorsDefinition,
	ifStatementsDefinition,
	ifElseStatementsDefinition,
	elseIfStatementsDefinition,
	logicalAndDefinition,
	logicalOrDefinition,
} from '../definitions';
import {
	assignmentOperatorsCodeSnippet,
	ifStatementsCodeSnippet,
	ifElseStatementsCodeSnippet,
	elseIfStatementsCodeSnippet,
	logicalAndCodeSnippet,
	logicalOrCodeSnippet,
} from '../codeSnippets';

const branchingPanels = [
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
		key: 'ifStatements',
		title: 'IF Statements',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7153025707411541290`}
					lessonDefinition={ifStatementsDefinition}
					codeSnippet={ifStatementsCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'ifElseStatements',
		title: 'IF / ELSE Statements',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7153057077319994666`}
					lessonDefinition={ifElseStatementsDefinition}
					codeSnippet={ifElseStatementsCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'elseIfStatements',
		title: 'ELSE IF Statements',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7153113451362110763`}
					lessonDefinition={elseIfStatementsDefinition}
					codeSnippet={elseIfStatementsCodeSnippet}
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
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7153764533641776426`}
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
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7153751879040781614`}
					lessonDefinition={logicalOrDefinition}
					codeSnippet={logicalOrCodeSnippet}
				/>
			),
		},
	},
];

export const branchingContent = (
	<Accordion fluid styled panels={branchingPanels} />
);
