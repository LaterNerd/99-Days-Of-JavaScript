import { PanelInfo } from '../panelInfo';
import { Accordion } from 'semantic-ui-react';
import { TIKTOK_EMBED_LINK } from '../constants';
import {
	arraysDefinition,
	objectsDefinition,
	methodsDefinition,
	thisDefinition,
	classesDefinition,
} from '../definitions/groupDataDefinitions';
import {
	arraysCodeSnippet,
	objectsCodeSnippet,
	updatingObjectsCodeSnippet,
	methodsCodeSnippet,
	writingMethodsCodeSnippet,
	thisCodeSnippet,
	classesPartOneCodeSnippet,
	classesPartTwoCodeSnippet,
} from '../codeSnippets/groupDataCodeSnippets';

const groupDataPanels = [
	{
		key: 'arrays',
		title: 'Arrays',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7148251584324209966`}
					lessonDefinition={arraysDefinition}
					codeSnippet={arraysCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'objects',
		title: 'Objects',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7148271817965178154`}
					lessonDefinition={objectsDefinition}
					codeSnippet={objectsCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'updatingObjects',
		title: 'Updating Objects',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7148623993590009134`}
					lessonDefinition={null}
					codeSnippet={updatingObjectsCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'methods',
		title: 'Methods',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7155997800776371499`}
					lessonDefinition={methodsDefinition}
					codeSnippet={methodsCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'writingMethods',
		title: 'Writing Methods',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7156381704742145326`}
					lessonDefinition={null}
					codeSnippet={writingMethodsCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'this',
		title: "'this' keyword",
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7156385276011793710`}
					lessonDefinition={thisDefinition}
					codeSnippet={thisCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'classesPt1',
		title: 'Classes Pt.1',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7156841974564228398`}
					lessonDefinition={classesDefinition}
					codeSnippet={classesPartOneCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'classesPt2',
		title: 'Classes Pt.2',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7158168406351465770`}
					lessonDefinition={classesDefinition}
					codeSnippet={classesPartTwoCodeSnippet}
				/>
			),
		},
	},
	{
		key: 'objectPrototype',
		title: 'Object Prototype',
		content: {
			content: (
				<PanelInfo
					videoEmbedLink={`${TIKTOK_EMBED_LINK}7158188441069423914`}
					lessonDefinition={null}
					codeSnippet={null}
				/>
			),
		},
	},
];

export const groupDataContent = (
	<Accordion fluid styled panels={groupDataPanels} />
);
