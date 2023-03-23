import React, { useState } from 'react';
import { getGitRepositories } from '../../fetchers/gitFetchers';
import { GitRepo, GitUser } from '../../typeDefs/gitTypes';
import RepositoryCard from './RepositoryCard';
import { IoIosArrowDown } from 'react-icons/io';
import { IconContext } from "react-icons";
import Loader from '../../components/Loader';

type UserCardPropType = {
    user: GitUser
    
}

const UserCard:React.FC<UserCardPropType> = ({user}) => {

    const [userRepositories,setUserRepositories] = useState<GitRepo[]>([]);
    const [repositoryErr,setRepositoryErr] = useState<string|null>(null);
    const [isRepositoryLoading,setIsRepositoryLoading] = useState<Boolean>(false);
    const [isExpand,setIsExpand] = useState<Boolean>(false);


    const handleRepositories = async(username:string):Promise<void> =>{
        if (isExpand) {
            return;
        }
        setIsRepositoryLoading(true);
        setRepositoryErr(null);
        const result = await getGitRepositories(username);
        setUserRepositories(result.data)
        setRepositoryErr(result.errorMsg);
        setIsRepositoryLoading(false);     
    }
    console.log(userRepositories);

    return (
        <div className='user-card' onClick={()=>{handleRepositories(user.login);setIsExpand(!isExpand)}}>
            <div className={`username ${isExpand ? "rotate" : ""}`}>
                <h4>{user.login}</h4>
                <span className='icon-wrapper'>
                    <span className='icon'>
                        <IconContext.Provider value={{size:'22', color: "black", className: "icon" }}><IoIosArrowDown /> </IconContext.Provider>
                    </span>
                </span>
            </div>
            <div className={`repos ${isExpand ? "" :"repos-hide"}`}>
                {
                    isRepositoryLoading
                    ? <div className='loader'><Loader /></div>
                    : userRepositories.map((repository:GitRepo) => <RepositoryCard repository={repository} key={repository.id} />)
                }
            </div>
            {isExpand && !isRepositoryLoading && !userRepositories.length && <p className='text-center'><i>No repository created</i></p>}
            {repositoryErr && <p>{repositoryErr}</p>}
        </div>
    );
};

export default UserCard;