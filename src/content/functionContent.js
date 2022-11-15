import { PanelInfo } from '../panelInfo';
import { Accordion } from 'semantic-ui-react';
import { TIKTOK_EMBED_LINK } from '../constants';
import { functionDeclarationDefinition } from '../definitions/functionDefinitions';
import {
	functionDeclarationCodeSnippet,
	writingFunctionsCodeSnippet,
	callingFunctionsCodeSnippet,
} from '../codeSnippets';

const functionPanels = [
	{
		key: 'functionDeclaration',
		title: 'Function Declaration',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7154171722831367470`}
					lessonDefinition={functionDeclarationDefinition}
					codeSnippet={functionDeclarationCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'writingFunctions',
		title: 'Writing Functions',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7155639740581023019`}
					lessonDefinition={null}
					codeSnippet={writingFunctionsCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'callingFunctions',
		title: 'Calling Functions',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7155655036410891562`}
					lessonDefinition={null}
					codeSnippet={callingFunctionsCodeSnippet}
				/>
			),
		},
	},
];

export const functionContent = (
	<Accordion fluid styled panels={functionPanels} />
);
