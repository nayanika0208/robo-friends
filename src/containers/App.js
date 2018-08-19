import React , {Component }from 'react';
import {connect} from 'react-redux';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/scroll';
import ThemeSwitcher from '../components/AllAboutThemes/ThemeSwitcher';
import SwitchButton from '../components/AllAboutThemes/switchThemeButton';
import PropTypes from 'prop-types';
import Title from '../components/title';
import ErrorBoundary from '../components/ErrorBoundry';
import {setSearchField,requestRobots} from '../actions.js';

const mapStateToProps=(state)=>{
	return {
		searchfield:state.searchRobots.searchfield,
		robots:state.requestRobots.robots,
		isPending:state.requestRobots.isPending,
		error:state.requestRobots.error,
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
	onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
	onRequestRobots:()=>requestRobots(dispatch),
}
}

class App extends Component{
	constructor(){
		super()
		this.state={


		}

	}
	componentDidMount() {

		    this.props.onRequestRobots();
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response=> response.json())
    //   .then(users => {this.setState({ robots: users})});
  }


	render(){
		const {searchfield,onSearchChange,robots,isPending} =this.props;
		const filterRobots =robots.filter(robots=>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase())
		});
		if(isPending){
			return <h1 className='abc'>loading </h1> }
			else {
        return(
        <ThemeSwitcher>
		<div className ='tc'>
		<Title />
		<SwitchButton/>
		<Searchbox searchChange ={onSearchChange}/>
		<Scroll>
			<ErrorBoundary>
		  <Cardlist  robots ={filterRobots}/>
		</ErrorBoundary>
		</Scroll>
		</div>
		</ThemeSwitcher>
		);
    }

	}

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
