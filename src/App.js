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
					backgroundColor: '#eacae0',
					border: '0.2rem solid #47385f',
					boxShadow: '6.1px 7.2px #40ad33',
				}}
			>
				<Header as={'h1'} textAlign='center'>
					#99DaysofJavaScript
				</Header>
				<Header as={'h4'} textAlign='center'>
					by Later Nerd ✌️
				</Header>
			</Segment>

			<Segment raised>
				<Accordion fluid styled panels={panels} />
			</Segment>
		</Container>
	);
}

export default App;
