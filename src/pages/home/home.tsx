import React, { useState } from 'react';
import { getGitRepositories, getGitUsers } from '../../fetchers/gitFetchers';
import { GitRepo, GitUser } from '../../typeDefs/gitTypes';
import UserCard from './UserCard';
import "./home.css";
import Loader from '../../components/Loader';

const Home = () => {
    const [searchText,setSearchText] = useState<string>("");
    const [searchedText,setSearchedText] = useState<string>("");

    const [users,setUsers] = useState<GitUser[]>([]);
    const [usersErr,setUsersErr] = useState<string|null>(null);
    const [isUsersLoading,setIsUsersLoading] = useState<Boolean>(false);
    
    

    const onChangeSearchHandler = (e:React.ChangeEvent<HTMLInputElement>):void => setSearchText(e.target.value);
    
    const handleUserSearch = async(username:string):Promise<void> =>{
        setIsUsersLoading(true);
        setUsersErr(null);
        const result = await getGitUsers(username);
        setSearchedText(searchText);
        setUsers(result.data)
        setUsersErr(result.errorMsg);
        setIsUsersLoading(false);     
    }

   

    return (
        <div className='container'>
            <div className=''>
                <h2 className='head-title'>Git  Users and Repositories</h2>
                <div className='search'>
                    <input  onChange={onChangeSearchHandler} type="search" name="" value={searchText} placeholder='Enter username' />
                    <button onClick={()=>handleUserSearch(searchText)}>Search</button>
                </div>
                {searchedText && !!users.length && <p className='search-status'>Showing users for "{searchedText}"</p>}

                <div>
                    {
                        isUsersLoading 
                        ? <div className='loader'><Loader /></div>
                        : users.length === 0 && searchedText
                        ? <p className='text-center'>No user found</p>
                        : <div className='users'>
                            {
                                users.map((user:GitUser)=><UserCard user={user}  key={user.id} />)
                            }
                        </div>
                    }
                </div>
                {usersErr && <p className='errorMsg'>{usersErr}</p>}
            </div>
        </div>
    );
};

export default Home;