import moment from 'moment';
import React, { Component, Fragment } from 'react';

import Comparelist from '../../components/Comparelist';
import api from '../../services/api';
import { Container, Form } from './styles';
import logo from '../../assets/logo.png';

export default class  Main extends Component {

    state = {
        loading:false,
        repositoryError: false,
        repositoryInput: "",
        repositories: []
    }

    componentDidMount(){
       
        const repos = localStorage.getItem('repos');

        this.setState({ repositories: repos ? JSON.parse(repos) : []})
    }

    deleteRepository = (id) => {
       
        const updateCollection = this.state.repositories.filter((repository) => {
                                    return repository.id !== id;
                                });

        localStorage.setItem('repos', JSON.stringify(updateCollection));

        this.setState({ repositories: updateCollection });

    }

    updateRepository = async (fullname, index) => {
        
        let updateCollection = this.state.repositories;

        updateCollection[index].classNameRefresh = "fa fa-refresh fa-pulse";

        this.setState({ loading: true, repositories:updateCollection });

        try {
            
            const { data:repository } = await api.get(`repos/${fullname}`);
    
            repository.lastCommit = moment(repository.pushed_at).fromNow();
            
            repository.classNameRefresh = "fa fa-refresh";
    
            let index = this.state.repositories.findIndex(o => o.id === repository.id);

            if(~index) {
                
                updateCollection[index] = repository;
                
                this.setState({repositories: updateCollection})

                localStorage.setItem('repos', JSON.stringify(this.state.repositories));
            }
            
        } catch (error) {
            
            this.setState({repositoryError:true});

        } finally {

            this.setState({ loading: false});
        
        }
    }

    handleRepositories = async (e) =>{
        e.preventDefault();

        this.setState({ loading:true})

        try {
            
            const { data: repository } = await api.get(`repos/${this.state.repositoryInput}`);

            repository.lastCommit = moment(repository.pushed_at).fromNow();

            repository.classNameRefresh = "fa fa-refresh";

            this.setState({
                repositoryError:false,
                repositoryInput:"",
                repositories:[...this.state.repositories, repository]
            })

            localStorage.setItem('repos', JSON.stringify(this.state.repositories));
       
        } catch (error) {

            this.setState({ repositoryError: true})
           
        } finally{

            this.setState({ loading:false})
        }

    }

    render(){
        
        return (
        
            <Fragment>
                <Container>
                    <img src={logo} alt="Git Compare" />
                    <Form withError={ this.state.repositoryError} onSubmit={ this.handleRepositories }>
                        <input 
                            placeholder="usuário/repositório" 
                            value={this.state.repositoryInput} 
                            onChange={e => this.setState({repositoryInput: e.target.value})} />
                        <button type="submit">{this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : "OK"}</button>
                    </Form>
                    <Comparelist
                        repositories={this.state.repositories}
                        updateRepository = {this.updateRepository}
                        deleteRepository = {this.deleteRepository}
                    />
                </Container>
            </Fragment>
        );
    }

}

