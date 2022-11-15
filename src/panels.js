import { PanelInfo } from './panelInfo';
import { Accordion, Header } from 'semantic-ui-react';
import { TIKTOK_EMBED_LINK } from './constants';
import {
	variableDefinition,
	variableNameDefinition,
	primitivesDefinition,
	letDefinition,
	constDefinition,
	arraysDefinition,
	objectsDefinition,
	arithmeticOperatorsDefinition,
	operatorPrecedenceDefinition,
	assignmentOperatorsDefinition,
	comparisonOperatorsDefinition,
	ifStatementsDefinition,
	ifElseStatementsDefinition,
	elseIfStatementsDefinition,
	logicalAndDefinition,
	logicalOrDefinition,
	functionDeclarationDefinition,
	methodsDefinition,
	thisDefinition,
	classesDefinition,
} from './definitions';
import {
	variablesCodeSnippet,
	variableNameCodeSnippet,
	primitivesCodeSnippet,
	letCodeSnippet,
	constCodeSnippet,
	variableDeclarationCodeSnippet,
	arraysCodeSnippet,
	objectsCodeSnippet,
	updatingVariablesCodeSnippet,
	updatingObjectsCodeSnippet,
	arithmeticOperatorsCodeSnippet,
	operatorPrecedenceCodeSnippet,
	assignmentOperatorsCodeSnippet,
	comparisonOperatorsPartOneCodeSnippet,
	comparisonOperatorsPartTwoCodeSnippet,
	ifStatementsCodeSnippet,
	ifElseStatementsCodeSnippet,
	elseIfStatementsCodeSnippet,
	logicalAndCodeSnippet,
	logicalOrCodeSnippet,
	functionDeclarationCodeSnippet,
	writingFunctionsCodeSnippet,
	callingFunctionsCodeSnippet,
	methodsCodeSnippet,
	writingMethodsCodeSnippet,
	thisCodeSnippet,
	classesPartOneCodeSnippet,
	classesPartTwoCodeSnippet,
} from './codeSnippets';

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

const variableContent = <Accordion fluid styled panels={variablePanels} />;

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

const operationContent = <Accordion fluid styled panels={operationPanels} />;

// const inputOutputContent = <Accordion fluid styled panels={null} />;
const inputOutputContent = (
	<Header block as='h3' textAlign='center' content='⏰ COMING SOON ⏰' />
);

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

const branchingContent = <Accordion fluid styled panels={branchingPanels} />;

// const loopPanels = [];
// const loopContent = <Accordion fluid styled panels={loopPanels} />;
const loopContent = (
	<Header block as='h3' textAlign='center' content='⏰ COMING SOON ⏰' />
);

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

const functionContent = <Accordion fluid styled panels={functionPanels} />;

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
const groupDataContent = <Accordion fluid styled panels={groupDataPanels} />;

const rootPanels = [
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
		title: 'Branching',
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

export default rootPanels;
