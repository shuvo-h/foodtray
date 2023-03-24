
import { getGitRepositories, getGitUsers } from "../../fetchers/gitFetchers";

// unit testing for getGitUsers function
describe('It should test getGitUsers function for all possible cases',()=>{
    
    it('It shouls return data and errorMsg',async()=>{
        const result = await getGitUsers('test');
        expect(result).toHaveProperty('data');
        expect(result).toHaveProperty('errorMsg');
    })
    it('shoulds return empty data and errorMsg username is not provided',async()=>{
        const result = await getGitUsers('');
        expect(result.data).toEqual([]);
        expect(result.errorMsg).toEqual('search username is required');
    })
    it('shoulds return array data and empty errorMsg when username is provided',async()=>{
        const result = await getGitUsers('a-name');
        expect(result.data).toBeInstanceOf(Array);
        expect(result.data.length).toBeLessThanOrEqual(5);
        expect(result.data.length).not.toBeGreaterThan(5);
        expect(result.data[0]).toHaveProperty('id');
        expect(result.data[0]).toHaveProperty('login');
        expect(result.errorMsg).toEqual(null);
    })
    
})


// unit testing for getGitRepositories function
describe('It should test getGitRepositories function for all possible cases',()=>{
    
    it('shoulds return data and errorMsg',async()=>{
        const result = await getGitRepositories('test');
        expect(result).toHaveProperty('data');
        expect(result).toHaveProperty('errorMsg');
    })
    it('shoulds return empty data and errorMsg username is not provided',async()=>{
        const result = await getGitRepositories('');
        expect(result.data).toEqual([]);
        expect(result.errorMsg).toEqual('search username is required');
    })
    it('shoulds return array data and empty errorMsg when username is provided',async()=>{
        const result = await getGitRepositories('shuvo-h');
        expect(result.data).toBeInstanceOf(Array);
        expect(result.data.length).toBeGreaterThan(0);
        expect(result.data[0]).toHaveProperty('id');
        expect(result.data[0]).toHaveProperty('name');
        expect(result.data[0]).toHaveProperty('forks');
        expect(result.errorMsg).toEqual(null);
    })
    
})

