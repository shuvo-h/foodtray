import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { getGitUsers } from "../../fetchers/gitFetchers";
import Home from "../../pages/home/home";

jest.mock('../../fetchers/gitFetchers', () => ({
    getGitUsers: jest.fn(),
}));

describe('Should render home page',()=>{
    beforeEach(()=>{
        jest.resetAllMocks();
    })
    
    it('should render the home page with input field and button',()=>{
        render(<Home />)
        const searchInputElement = screen.getByTestId('search-input')
        expect(searchInputElement).toBeInTheDocument();
        const searchInput = screen.getByPlaceholderText(/Enter username/i);
        expect(searchInput).toBeInTheDocument();
    })
    it('Should change the search input field value',()=>{
        render(<Home />);
        const inputElement = screen.getByTestId('search-input');
        fireEvent.change(inputElement,{target:{value:"test username"}});
        expect(inputElement).toHaveValue('test username');
    })
    it('Should fetch api when clicking on search button or pressing enter', async()=>{
        // mock the data
        const sampleData = { 
            login:'shuvo-h', 
            avatar_url:"http://sample.com/avatar.jpg",
            events_url:"",
            followers_url :"",
            following_url :"",
            gists_url :"",
            gravatar_id :"",
            html_url :"",
            id :1,
            node_id :"",
            organizations_url :"",
            received_events_url :"",
            repos_url :"",
            score : 0,
            site_admin : false,
            starred_url :"",
            subscriptions_url :"",
            type :"",
            url :"",
        }
        const jestMockGitUser = getGitUsers as jest.MockedFunction<typeof getGitUsers>;
        jestMockGitUser.mockResolvedValue({data:[sampleData],errorMsg:null});
        // render the component and get element
        render(<Home />);
        const inputElement = screen.getByTestId('search-input');
        const searchBtnElement = screen.getByTestId('search-btn');
        // search users
        fireEvent.change(inputElement,{target:{value:"shuvo-h"}});
        fireEvent.click(searchBtnElement);
        expect(jestMockGitUser).toHaveBeenCalledWith('shuvo-h');
        // wait for the element to be data available
        const loaderElement = screen.getByTestId('loader-user');
        expect(loaderElement).toBeInTheDocument();
        await waitFor(()=>{
            const userCardsElements = screen.getAllByTestId('user-card');
            expect(userCardsElements.length).toBe(1);
            // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
            expect(screen.getByText(/Showing users for "shuvo-h"/i)).toBeInTheDocument();
        });
    })
    it("Should show error when mock return error",async()=>{
        const jestMockGetusers = getGitUsers as jest.MockedFunction<typeof getGitUsers>
        jestMockGetusers.mockResolvedValue({data:[],errorMsg:"Your API limit exceed"});
        render(<Home />);
        const inputElement = screen.getByTestId('search-input');
        const searchBtnElement = screen.getByTestId('search-btn');
        fireEvent.change(inputElement,{target:{value:"new username"}});
        fireEvent.click(searchBtnElement);
        const loaderElement = screen.getByTestId('loader-user');
        expect(loaderElement).toBeInTheDocument();
        await waitFor(()=>{
            const errMsgElement = screen.getByText('Your API limit exceed');
            expect(errMsgElement).toBeInTheDocument();
            // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
            expect(screen.queryByText(/Showing users for "new username"/i)).not.toBeInTheDocument();
        })
    })
    it("Should show no user found message when data is empty and no error",async()=>{
        const jestMockGetusers = getGitUsers as jest.MockedFunction<typeof getGitUsers>
        jestMockGetusers.mockResolvedValue({data:[],errorMsg:null});
        render(<Home />);
        const inputElement = screen.getByTestId('search-input');
        const searchBtnElement = screen.getByTestId('search-btn');
        fireEvent.change(inputElement,{target:{value:"new username"}});
        fireEvent.click(searchBtnElement);
        const loaderElement = screen.getByTestId('loader-user');
        expect(loaderElement).toBeInTheDocument();
        await waitFor(()=>{
            const errMsgElement = screen.getByText('No user found');
            expect(errMsgElement).toBeInTheDocument();
            // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
            expect(screen.queryByText(/Showing users for "new username"/i)).not.toBeInTheDocument();
        })
    })
})

export {};