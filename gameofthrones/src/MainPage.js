import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import Directory from './Directory';
import Character from './Character';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            charcters : {},
            isLoading : true,
            hasError : false,
            pageNumber : 1,          
            selectedCharacter : {}
        }
    }

    getFirstPage()
    {
        let currentpage = this.state.pageNumber;
        fetch('https://www.anapioficeandfire.com/api/characters?page='+currentpage+'&pageSize=50')
        .then( response => {                
                return (response.json());
        })
        .then(data => {            
            this.setState({
                characters : data,
                isLoading : false
            });
        })
        .catch(error=>{
            console.log(error.message);
            this.setState({
                isLoading : false,
                hasError : true
            });
        });
    }
    

    componentDidMount() {
        this.getFirstPage();        
    }

    getNextPage = ()=> 
    {
        let currentpage = this.state.pageNumber + 1;
        
        fetch('https://www.anapioficeandfire.com/api/characters?page='+currentpage+'&pageSize=50')
        .then( response => {                
                return (response.json());
        })
        .then(data => {
            this.setState({
                characters : data,
                pageNumber : currentpage,
                isLoading : false
            });
        })
        .catch(error=>{
            console.log(error.message);
            this.setState({
                isLoading : false,
                hasError : true
            });
        });
    }

    getPreviousPage = ()=> 
    {
        let currentpage = this.state.pageNumber;
        if (currentpage > 1)
        {
            currentpage = currentpage - 1;
        }
        
        fetch('https://www.anapioficeandfire.com/api/characters?page='+currentpage+'&pageSize=50')
        .then( response => {                
                return (response.json());
        })
        .then(data => {            
            this.setState({
                characters : data,
                pageNumber : currentpage,
                isLoading : false
            });
        })
        .catch(error=>{
            console.log(error.message);
            this.setState({
                isLoading : false,
                hasError : true
            });
        });
    }

    backToHome= () => {
        this.props.history.push('/');
    }

    displayCharacterDetails = () => {        
        return(            
            <Character selectedItem={this.state.selectedCharacter} onClick = {this.backToHome} />
        )
    }

    navigateToCharacterDetails = (character) => {
        this.setState(prevState => {
            return {
                selectedCharacter : character                
            };
        })
        this.props.history.push('/character/');
    }

    render() {       
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        if (this.state.hasError) {
            return <div>ERROR, please reload and try again</div>;
        }

        return (            
            <div>
                <Switch>
                    <Route exact path="/" render={(props) => 
                        <Directory  characters={this.state.characters}
                                     onClick = {this.navigateToCharacterDetails} 
                                     getNextPage = {this.getNextPage}
                                     getPreviousPage = {this.getPreviousPage}/>} />
                    <Route path="/character" render={this.displayCharacterDetails} />
                </Switch>                
            </div>
        )
    };
}

export default withRouter(MainPage)