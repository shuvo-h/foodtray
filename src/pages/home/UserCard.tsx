import React, { useState } from 'react';
import { getGitRepositories } from '../../fetchers/gitFetchers';
import { GitRepo, GitUser } from '../../typeDefs/gitTypes';
import RepositoryCard from './RepositoryCard';

type UserCardPropType = {
    user: GitUser
    
}

const UserCard:React.FC<UserCardPropType> = ({user}) => {

    const [userRepositories,setUserRepositories] = useState<GitRepo[]>([]);
    const [repositoryErr,setRepositoryErr] = useState<string|null>(null);
    const [isRepositoryLoading,setIsRepositoryLoading] = useState<Boolean>(false);

    const handleRepositories = async(username:string):Promise<void> =>{
        setIsRepositoryLoading(true);
        const result = await getGitRepositories(username);
        setUserRepositories(result.data)
        setRepositoryErr(result.errorMsg);
        setIsRepositoryLoading(false);     
    }
    console.log(userRepositories);

    return (
        <div onClick={()=>handleRepositories(user.login)}>
            <h4>{user.login}</h4>
            <div>
                {
                    isRepositoryLoading
                    ? <h3>Loading Repo.........</h3>
                    : userRepositories.map((repository:GitRepo) => <RepositoryCard repository={repository} key={repository.id} />)
                }
            </div>
            {repositoryErr && <p>{repositoryErr}</p>}
        </div>
    );
};

export default UserCard;