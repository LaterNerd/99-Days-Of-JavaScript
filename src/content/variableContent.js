import { PanelInfo } from '../panelInfo';
import { Accordion, Header } from 'semantic-ui-react';
import { TIKTOK_EMBED_LINK } from '../constants';
import {
	statementDefinition,
	variableDefinition,
	variableNameDefinition,
	primitivesDefinition,
	letDefinition,
	constDefinition,
	variableDeclarationDefinition,
	commentsDefinition,
} from '../definitions/variableDefinitions';
import {
	variableCodeSnippet,
	variableNameCodeSnippet,
	primitivesCodeSnippet,
	letCodeSnippet,
	constCodeSnippet,
	variableDeclarationCodeSnippet,
	commentsCodeSnippet,
} from '../codeSnippets/variableCodeSnippets';

const variablePanels = [
	{
		key: 'JavaScript',
		title: "What's JavaScript",
		content: {
			content: (
				<PanelInfo
					embedLink={`${TIKTOK_EMBED_LINK}7147784853138935086`}
					lessonDefinition={null}
					codeSnippet={null}
				/>
			),
		},
	},
	{
		key: 'statements',
		title: 'Statements',
		content: {
			content: (
				<PanelInfo
					embedLink={`${TIKTOK_EMBED_LINK}7167216318289169707`}
					lessonDefinition={statementDefinition}
					codeSnippet={null}
				/>
			),
		},
	},
	{
		key: 'variables',
		title: 'Variables',
		content: {
			content: (
				<PanelInfo
					embedLink={`${TIKTOK_EMBED_LINK}7164566076225998126`}
					lessonDefinition={variableDefinition}
					codeSnippet={variableCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'variableNaming',
		title: 'Variable Naming',
		content: {
			content: (
				<PanelInfo
					embedLink={`${TIKTOK_EMBED_LINK}7164908710643502379`}
					lessonDefinition={variableNameDefinition}
					codeSnippet={variableNameCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'primitiveDataTypes',
		title: 'Primitive Data Types',
		content: {
			content: (
				<PanelInfo
					embedLink={`${TIKTOK_EMBED_LINK}7165016641443564843`}
					lessonDefinition={primitivesDefinition}
					codeSnippet={primitivesCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'let',
		title: "'let' Keyword",
		content: {
			content: (
				<PanelInfo
					embedLink={`${TIKTOK_EMBED_LINK}7164955319293005099`}
					lessonDefinition={letDefinition}
					codeSnippet={letCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'const',
		title: "'const' Keyword",
		content: {
			content: (
				<PanelInfo
					embedLink={`${TIKTOK_EMBED_LINK}7164962890405956910`}
					lessonDefinition={constDefinition}
					codeSnippet={constCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'variableDeclaration',
		title: 'Variable Declaration',
		content: {
			content: (
				<PanelInfo
					embedLink={`${TIKTOK_EMBED_LINK}7166048950410104106`}
					lessonDefinition={variableDeclarationDefinition}
					codeSnippet={variableDeclarationCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'comments',
		title: 'Comments',
		content: {
			content: (
				<PanelInfo
					embedLink={`${TIKTOK_EMBED_LINK}7148925986434731306`}
					lessonDefinition={commentsDefinition}
					codeSnippet={commentsCodeSnippet}
				/>
			),
		},
	},
];

export const variableContent = (
	<div>
		<Header block as='h3' textAlign='center' content='START HERE 👇' />
		<Accordion fluid styled panels={variablePanels} />
	</div>
);
