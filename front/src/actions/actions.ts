import GitHubUser from "../types/githubUser";


// Make the `request` function generic
// to specify the return data type:
function request<TResponse>(
  url: string,
  config: RequestInit = {}
) : Promise<TResponse> {
  return fetch(url, config)
    // When got a response call a `json` method on it
    .then((response) => response.json())
    // and return the result data.
    .then((data) => data.items as TResponse);
}

async function getGitHubUsers (search : string) {
  return request<Array<GitHubUser>>(`${process.env.REACT_APP_GITHUB_SEARCH_URL}?q=${search}`);
}


export {
    getGitHubUsers
};