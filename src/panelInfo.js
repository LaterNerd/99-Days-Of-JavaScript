import { Divider, Embed, Header } from 'semantic-ui-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';

export const PanelInfo = ({
	videoEmbedLink,
	definitionHeader,
	lessonDefinition,
	codeSnippet,
}) => (
	<div>
		<Embed style={{ height: '750px' }} active url={videoEmbedLink} />
		<Divider hidden />
		{lessonDefinition ? (
			<>
				<Header as={'h3'}>
					{definitionHeader ? definitionHeader : 'What is it?'}
				</Header>
				<ReactMarkdown children={lessonDefinition} />
				<Divider hidden />
			</>
		) : null}
		{codeSnippet ? (
			<>
				<Header as={'h3'}>How do you use it?</Header>
				<SyntaxHighlighter
					wrapLongLines
					children={codeSnippet}
					showLineNumbers
					language='javascript'
					style={coldarkDark}
				/>
			</>
		) : null}
	</div>
);
