import { Divider, Embed, Header } from 'semantic-ui-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';

export const PanelInfo = ({
	embedLink,
	definitionHeader,
	lessonDefinition,
	codeSnippet,
}) => (
	<div>
		{embedLink ? (
			<>
				<Embed style={{ height: '750px' }} active url={embedLink} />
				<Divider hidden />
			</>
		) : null}

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
					children={codeSnippet}
					showLineNumbers
					language='javascript'
					style={coldarkDark}
				/>
			</>
		) : null}
	</div>
);
