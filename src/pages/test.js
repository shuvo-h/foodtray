/*
const userSearchUrl = 'https://api.github.com/users/{userName}'
  const [repos,setRepos] = useState([]);
  const [users,setUsers] = useState([]);
  const [isLoading,setIsLoading] = useState<Boolean>(false);
  const [username,setUsername] = useState<String>("");
  // https://api.github.com/users/kevinclark/repos
  
  console.log(users);

  const handleSearch = async() =>{
    if (!username) {
      return
    }
    setIsLoading(true);
    try {
      // https://api.github.com/search/users?q=tetris
      const res = await fetch(`https://api.github.com/search/users?q=${username}&per_page=7`);
      const result = await res.json();
      console.log(result);
      setUsers(result.items);
    } catch (error) {
      console.log(error);
      
    } finally{
      setIsLoading(false);
    }
  }
  */


  import React, { useState } from 'react';

  const GitHubSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    const [selectedUserRepos, setSelectedUserRepos] = useState([]);
  
    const handleSearch = async () => {
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchTerm}&per_page=5`
      );
      const data = await response.json();
      setUsers(data.items);
    };
  
    const handleUserClick = async (username) => {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await response.json();
      setSelectedUserRepos(data);
    };
  
    return (
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search test</button>
  
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => handleUserClick(user.login)}>
              {user.login}
            </li>
          ))}
        </ul>
  
        <ul>
          {selectedUserRepos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default GitHubSearch;

  



  