import React , {Component }from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/scroll';
import ThemeSwitcher from '../components/AllAboutThemes/ThemeSwitcher';
import SwitchButton from '../components/AllAboutThemes/switchThemeButton';

import './App.css';



class App extends Component{
	constructor(){
		super()
		this.state={
				robots : [],
	            searchfield : '',
		}
		console.log('first')
	}
	componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

	onSearchChange=(event)=>{
		this.setState({searchfield: event.target.value})

	}

	render(){
		console.log("third");
		const filterRobots =this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});
		if(this.state.robots.length === 0){
			return <h1 className='abc'>loading </h1> }
			else {
        return(
        <ThemeSwitcher>	
		<div className ='tc'>
		<h1 className='f2 abc'>Robo friends</h1>
		<SwitchButton/>
		<Searchbox searchChange ={this.onSearchChange}/>
		<Scroll>
		  <Cardlist  robots ={filterRobots}/>
		</Scroll>
		</div>
		</ThemeSwitcher>
		);
    }

	}

}

export default App;
