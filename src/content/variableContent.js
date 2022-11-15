import { PanelInfo } from '../panelInfo';
import { Accordion } from 'semantic-ui-react';
import { TIKTOK_EMBED_LINK } from '../constants';
import {
	variableDefinition,
	variableNameDefinition,
	primitivesDefinition,
	letDefinition,
	constDefinition,
} from '../definitions/variableDefinitions';
import {
	variablesCodeSnippet,
	variableNameCodeSnippet,
	primitivesCodeSnippet,
	letCodeSnippet,
	constCodeSnippet,
	variableDeclarationCodeSnippet,
	updatingVariablesCodeSnippet,
} from '../codeSnippets';

const variablePanels = [
	{
		key: 'JavaScript',
		title: "What's JavaScript",
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7147784853138935086`}
					lessonDefinition={null}
					codeSnippet={null}
				/>
			),
		},
	},
	{
		key: 'variables',
		title: 'What are variables used for?',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7164566076225998126`}
					lessonDefinition={variableDefinition}
					codeSnippet={variablesCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'nameVariable',
		title: 'How to name a variable?',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7164908710643502379`}
					lessonDefinition={variableNameDefinition}
					codeSnippet={variableNameCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'primitiveDataTypes',
		title: 'What are primitive data types?',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7165016641443564843`}
					lessonDefinition={primitivesDefinition}
					codeSnippet={primitivesCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'let',
		title: "What does 'let' mean?",
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7164955319293005099`}
					lessonDefinition={letDefinition}
					codeSnippet={letCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'const',
		title: "What does 'const' mean?",
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7164962890405956910`}
					lessonDefinition={constDefinition}
					codeSnippet={constCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'declareVariable',
		title: 'How do you declare a variable?',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7166048950410104106`}
					lessonDefinition={null}
					codeSnippet={variableDeclarationCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'updatingVariables',
		title: 'Updating Variables',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7148586546302766382`}
					lessonDefinition={null}
					codeSnippet={updatingVariablesCodeSnippet}
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
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7148925986434731306`}
					lessonDefinition={null}
					codeSnippet={null}
				/>
			),
		},
	},
];

export const variableContent = (
	<Accordion fluid styled panels={variablePanels} />
);
