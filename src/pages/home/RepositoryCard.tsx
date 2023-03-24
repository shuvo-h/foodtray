import React from 'react';
import {GitRepo} from '../../typeDefs/gitTypes';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from "react-icons";

type RepositoryCardProp = {
    repository: GitRepo
}

const RepositoryCard = ({repository}:RepositoryCardProp) => {
    console.log(repository);
    
    return (
        <div className='repo-card'>
            <div className='repo-heading'>
                <h4>{repository.name}</h4>
                <div className='star'>
                    <span>{repository.forks}</span>
                    <IconContext.Provider value={{size:'18', color: "black", className: "icon" }}>
                        <AiFillStar /> 
                    </IconContext.Provider>
                </div>
            </div>
            <p>{repository.description}</p>
        </div>
    );
};

export default RepositoryCard;