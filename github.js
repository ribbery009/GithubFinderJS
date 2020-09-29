class GitHub{
constructor(){
this.client_id='12ccc11a725be85ce3d3';
this.client_secret='5ff1c8de24e7f431735823295e7ba251cdf85085';
this.repos_count = 5;
this.repos_sort = 'created: asc';
}

async getUser(user)
{
const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

const profile = await profileResponse.json();
const repos = await repoResponse.json();

return{
profile,
repos
}
}

}