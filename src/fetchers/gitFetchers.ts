import { GitRepo, GitUser } from "../typeDefs/gitTypes";

type gitUserFetcherType = {
    data: GitUser[],
    errorMsg: string | null
}
type gitRepositoriesFetcherType = {
    data: GitRepo[],
    errorMsg: string | null
}
export const getGitUsers = async(username:string,per_page:number=5):Promise<gitUserFetcherType> =>{
    if (!username) {
        return {data:[],errorMsg:"search username is required"}
    }
    try {
        const response = await fetch(`https://api.github.com/search/users?q=${username}&per_page=${per_page}`);
        const data = await response.json();
        return {data:data.items,errorMsg:null}
    } catch (error:any) {
        console.log(error);
        return {data:[],errorMsg:error.message}
    }
}
export const getGitRepositories = async(username:string):Promise<gitRepositoriesFetcherType> =>{
    if (!username) {
        return {data:[],errorMsg:"search username is required"}
    }
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();
        console.log(data);
        
        return {data:data,errorMsg:null}
    } catch (error:any) {
        console.log(error);
        return {data:[],errorMsg:error.message}
    }
}