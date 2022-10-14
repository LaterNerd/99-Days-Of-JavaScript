import 'semantic-ui-css/semantic.min.css';
import { Accordion, Container, Header, Segment } from 'semantic-ui-react';
import './App.css';
import panels from './panels';

function App() {
	return (
		<Container>
			<Segment
				style={{
					marginTop: '2rem',
					backgroundColor: '#eda6c3',
					border: '0.2rem solid #47385f',
					boxShadow: '6.1px 7.2px #239b7f',
				}}
			>
				<Header as={'h1'} textAlign='center'>
					#99DaysofJavaScript
				</Header>
				<Header as={'h4'} textAlign='center'>
					<a
						style={{
							color: '#47385f',
						}}
						href={'https://www.tiktok.com/@mario.zamora'}
						target={'_blank'}
					>
						by Later Nerd ✌️
					</a>
				</Header>
			</Segment>

			<Segment raised>
				<Accordion fluid styled panels={panels} />
			</Segment>
		</Container>
	);
}

export default App;
