import React from 'react';
import {GitRepo} from '../../typeDefs/gitTypes';

type RepositoryCardProp = {
    repository: GitRepo
}

const RepositoryCard:React.FC<RepositoryCardProp> = ({repository}) => {
    console.log(repository);
    
    return (
        <div>
            {repository.id}
        </div>
    );
};

export default RepositoryCard;