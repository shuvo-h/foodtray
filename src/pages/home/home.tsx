import React, { useState } from 'react';
import { getGitRepositories, getGitUsers } from '../../fetchers/gitFetchers';
import { GitRepo, GitUser } from '../../typeDefs/gitTypes';
import UserCard from './UserCard';

const Home = () => {
    const [searchText,setSearchText] = useState<string>("");

    const [users,setUsers] = useState<GitUser[]>([]);
    const [usersErr,setUsersErr] = useState<string|null>(null);
    const [isUsersLoading,setIsUsersLoading] = useState<Boolean>(false);
    
    

    const onChangeSearchHandler = (e:React.ChangeEvent<HTMLInputElement>):void => setSearchText(e.target.value);
    
    const handleUserSearch = async(username:string):Promise<void> =>{
        setIsUsersLoading(true);
        const result = await getGitUsers(username);
        setUsers(result.data)
        setUsersErr(result.errorMsg);
        setIsUsersLoading(false);     
    }

   

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <input onChange={onChangeSearchHandler} type="search" name="" value={searchText} id="" />
                <button onClick={()=>handleUserSearch(searchText)}>Search</button>
            </div>
            <div>
                {
                    isUsersLoading 
                    ? <h1>Loading..................</h1>
                    : users.map((user:GitUser)=><UserCard user={user}  key={user.id} />)
                }
            </div>
            {usersErr && <p>{usersErr}</p>}
        </div>
    );
};

export default Home;