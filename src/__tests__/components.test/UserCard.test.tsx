import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { getGitRepositories } from "../../fetchers/gitFetchers"
import UserCard from "../../pages/home/UserCard";

jest.mock("../../fetchers/gitFetchers",()=>({
    getGitRepositories: jest.fn(),
}));

const propsUser = {
    avatar_url :"",
    events_url : "",
    followers_url :"",
    following_url :"",
    gists_url :"",
    gravatar_id :"",
    html_url :"",
    id : 101,
    login :"shuvo-h",
    node_id :"",
    organizations_url :"",
    received_events_url :"",
    repos_url :"",
    score :42,
    site_admin : false,
    starred_url :"",
    subscriptions_url :"",
    type :"",
    url :"",
}
const mockRepositories = [
    {
        allow_forking: true,
        archive_url: "",
        archived: true,
        assignees_url: "",
        blobs_url: "",
        branches_url: "",
        clone_url: "",
        collaborators_url: "",
        comments_url: "",
        commits_url: "",
        compare_url: "",
        contents_url: "",
        contributors_url: "",
        created_at: "",
        default_branch: "",
        deployments_url: "",
        description: "",
        disabled: true,
        downloads_url: "",
        events_url: "",
        fork: true,
        forks: 50,
        forks_count: 0,
        forks_url: "",
        full_name: "",
        git_commits_url: "",
        git_refs_url: "",
        git_tags_url: "",
        git_url: "",
        has_discussions: true,
        has_downloads: true,
        has_issues: true,
        has_pages: true,
        has_projects: true,
        has_wiki: true,
        homepage: "",
        hooks_url: "",
        html_url: "",
        id: 102,
        is_template: true,
        issue_comment_url: "",
        issue_events_url: "",
        issues_url: "",
        keys_url: "",
        labels_url: "",
        language: null,
        languages_url: "",
        license: {
          key: "",
          name: "",
          node_id: "",
          spdx_id: "",
          url: ""
        },
        merges_url: "",
        milestones_url: "",
        mirror_url: null,
        name: "new repository",
        node_id: "",
        notifications_url: "",
        open_issues: 0,
        open_issues_count: 0,
        owner: {
          avatar_url: "",
          events_url: "",
          followers_url: "",
          following_url: "",
          gists_url: "",
          gravatar_id: "",
          html_url: "",
          id: 0,
          login: "",
          node_id: "",
          organizations_url: "",
          received_events_url: "",
          repos_url: "",
          site_admin: true,
          starred_url: "",
          subscriptions_url: "",
          type: "",
          url: ""
        },
        private: true,
        pulls_url: "",
        pushed_at: "",
        releases_url: "",
        size: 0,
        ssh_url: "",
        stargazers_count: 0,
        stargazers_url: "",
        statuses_url: "",
        subscribers_url: "",
        subscription_url: "",
        svn_url: "",
        tags_url: "",
        teams_url: "",
        topics: [],
        trees_url: "",
        updated_at: "",
        url: "",
        visibility: "",
        watchers: 0,
        watchers_count: 0,
        web_commit_signoff_required: true
      },
    {
        allow_forking: true,
        archive_url: "",
        archived: true,
        assignees_url: "",
        blobs_url: "",
        branches_url: "",
        clone_url: "",
        collaborators_url: "",
        comments_url: "",
        commits_url: "",
        compare_url: "",
        contents_url: "",
        contributors_url: "",
        created_at: "",
        default_branch: "",
        deployments_url: "",
        description: "",
        disabled: true,
        downloads_url: "",
        events_url: "",
        fork: true,
        forks: 40,
        forks_count: 0,
        forks_url: "",
        full_name: "",
        git_commits_url: "",
        git_refs_url: "",
        git_tags_url: "",
        git_url: "",
        has_discussions: true,
        has_downloads: true,
        has_issues: true,
        has_pages: true,
        has_projects: true,
        has_wiki: true,
        homepage: "",
        hooks_url: "",
        html_url: "",
        id: 103,
        is_template: true,
        issue_comment_url: "",
        issue_events_url: "",
        issues_url: "",
        keys_url: "",
        labels_url: "",
        language: null,
        languages_url: "",
        license: {
          key: "",
          name: "",
          node_id: "",
          spdx_id: "",
          url: ""
        },
        merges_url: "",
        milestones_url: "",
        mirror_url: null,
        name: "new repository 2",
        node_id: "",
        notifications_url: "",
        open_issues: 0,
        open_issues_count: 0,
        owner: {
          avatar_url: "",
          events_url: "",
          followers_url: "",
          following_url: "",
          gists_url: "",
          gravatar_id: "",
          html_url: "",
          id: 0,
          login: "",
          node_id: "",
          organizations_url: "",
          received_events_url: "",
          repos_url: "",
          site_admin: true,
          starred_url: "",
          subscriptions_url: "",
          type: "",
          url: ""
        },
        private: true,
        pulls_url: "",
        pushed_at: "",
        releases_url: "",
        size: 0,
        ssh_url: "",
        stargazers_count: 0,
        stargazers_url: "",
        statuses_url: "",
        subscribers_url: "",
        subscription_url: "",
        svn_url: "",
        tags_url: "",
        teams_url: "",
        topics: [],
        trees_url: "",
        updated_at: "",
        url: "",
        visibility: "",
        watchers: 0,
        watchers_count: 0,
        web_commit_signoff_required: true
      },
]

describe('It should test all cases to render usercard component',()=>{
    afterAll(()=>{
        jest.clearAllMocks();
    })
    it('Should Render the user component',()=>{
        render(<UserCard user={propsUser} />);
        expect(screen.getByText(propsUser.login)).toBeInTheDocument()
    })
    it('Should expand when click on user name', async()=>{
        const jestMockGitRepo = getGitRepositories as jest.MockedFunction<typeof getGitRepositories>
        jestMockGitRepo.mockResolvedValue({data:mockRepositories,errorMsg:null})
        render(<UserCard user={propsUser} />);
        const userCard = screen.getByTestId('user-card');
        fireEvent.click(userCard);
        await waitFor(()=>{
            expect(screen.getByText(mockRepositories[0].name)).toBeInTheDocument();
        });
        fireEvent.click(userCard);
        expect(screen.getByText(mockRepositories[0].name)).toBeInTheDocument();
    })
    it('Should not re-fetch API when it is expanded', async()=>{
        const jestMockGitRepo = getGitRepositories as jest.MockedFunction<typeof getGitRepositories>
        jestMockGitRepo.mockResolvedValue({data:mockRepositories,errorMsg:null})
        render(<UserCard user={propsUser} />);
        const userCard = screen.getByTestId('user-card');
        fireEvent.click(userCard);
        await waitFor(()=>{
            expect(screen.getByText(mockRepositories[0].name)).toBeInTheDocument();
        });
        fireEvent.click(userCard);
        expect(getGitRepositories).toHaveBeenCalledTimes(1);
    })
    it('Should show Loader during fetching API', async()=>{
        const jestMockGitRepo = getGitRepositories as jest.MockedFunction<typeof getGitRepositories>
        jestMockGitRepo.mockImplementation(()=> new Promise(()=>{}));
        render(<UserCard user={propsUser} />);
        const userCard = screen.getByTestId('user-card');
        fireEvent.click(userCard);
        expect(screen.getByTestId('repo-loader')).toBeInTheDocument();
    })
    it('Should show message if no repository found', async()=>{
        const jestMockGitRepo = getGitRepositories as jest.MockedFunction<typeof getGitRepositories>
        jestMockGitRepo.mockResolvedValue({data:[],errorMsg:null});
        render(<UserCard user={propsUser} />);
        const userCard = screen.getByTestId('user-card');
        fireEvent.click(userCard);
        expect(screen.getByTestId('repo-loader')).toBeInTheDocument();
        await waitFor(()=>{
            expect(screen.getByText('No repository created')).toBeInTheDocument();
        });
    })
    it('Should show error message when error occured', async()=>{
        const jestMockGitRepo = getGitRepositories as jest.MockedFunction<typeof getGitRepositories>
        const errorMsg = "Serverside error occured";
        jestMockGitRepo.mockResolvedValue({data:[],errorMsg});
        render(<UserCard user={propsUser} />);
        const userCard = screen.getByTestId('user-card');
        fireEvent.click(userCard);
        expect(screen.getByTestId('repo-loader')).toBeInTheDocument();
        await waitFor(()=>{
            expect(screen.getByText(errorMsg)).toBeInTheDocument();
        });
    })
})

export {}