import React from 'react';

import {Container, Repository} from './styles';


const Comparelist = ({repositories, deleteRepository, updateRepository}) => {

    return (

        <Container>

            {
                repositories.map((repository, index) => (
                    
                    <Repository key={repository.id}>
                        <header>
                            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                            <strong>{repository.name}</strong>
                            <small>{repository.owner.login}</small>
                        </header>
                        <ul>
                            <li>{repository.stargazers_count}<small>stars</small></li>
                            <li>{repository.forks_count}<small>forks</small></li>
                            <li>{repository.open_issues_count}<small>issues</small></li>
                            <li>{repository.lastCommit}<small>last commit</small></li>
                        </ul>
                        <div>
                            <button className="btn-refresh" onClick={() => updateRepository(repository.full_name, index)}><i className={repository.classNameRefresh}/></button>
                            <button className="btn-trash" onClick={() => deleteRepository(repository.id)}><i className="fa fa-trash"/></button>
                        </div>
                    </Repository>
                ))

            }
        </Container>
    );

}

export default Comparelist;