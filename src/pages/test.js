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

  /*
  import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Home from './Home';
import { getGitUsers } from './api';

jest.mock('./api', () => ({
  getGitUsers: jest.fn(),
}));

describe('Home', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render search input and button', () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText('Enter username');
    const searchButton = screen.getByRole('button', { name: /search/i });
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('should update search text when typing into the input', () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText('Enter username');
    fireEvent.change(searchInput, { target: { value: 'testuser' } });
    expect(searchInput).toHaveValue('testuser');
  });

  it('should call getGitUsers with the search text when clicking the search button', async () => {
    const testUser = { id: 1, login: 'testuser', avatar_url: 'http://example.com/avatar' };
    const mockGetGitUsers = getGitUsers as jest.MockedFunction<typeof getGitUsers>;
    mockGetGitUsers.mockResolvedValue({ data: [testUser], errorMsg: null });
    render(<Home />);
    const searchInput = screen.getByPlaceholderText('Enter username');
    const searchButton = screen.getByRole('button', { name: /search/i });
    fireEvent.change(searchInput, { target: { value: 'testuser' } });
    fireEvent.click(searchButton);
    expect(mockGetGitUsers).toHaveBeenCalledWith('testuser');
    await waitFor(() => {
      const userCards = screen.getAllByTestId('user-card');
      expect(userCards.length).toBe(1);
      expect(screen.getByText(/Showing users for "testuser"/i)).toBeInTheDocument();
    });
  });

  it('should display an error message if getGitUsers returns an error', async () => {
    const errorMsg = 'Something went wrong';
    const mockGetGitUsers = getGitUsers as jest.MockedFunction<typeof getGitUsers>;
    mockGetGitUsers.mockResolvedValue({ data: [], errorMsg });
    render(<Home />);
    const searchInput = screen.getByPlaceholderText('Enter username');
    const searchButton = screen.getByRole('button', { name: /search/i });
    fireEvent.change(searchInput, { target: { value: 'testuser' } });
    fireEvent.click(searchButton);
    await waitFor(() => {
      expect(screen.getByText(errorMsg)).toBeInTheDocument();
    });
  });

  it('should display a message if no users are found', async () => {
    const mockGetGitUsers = getGitUsers as jest.MockedFunction<typeof getGitUsers>;
    mockGetGitUsers.mockResolvedValue({ data: [], errorMsg: null });
    render(<Home />);
    const searchInput = screen.getByPlaceholderText('Enter username');
    const searchButton = screen.getByRole('button', { name: /search/i });
    fireEvent.change(searchInput, { target: { value: 'nonexistentuser' } });
    fireEvent.click(searchButton);
    await waitFor(() => {
      expect(screen.getByText(/No user found/i)).toBeInTheDocument();
    });
  });
});



  */




  