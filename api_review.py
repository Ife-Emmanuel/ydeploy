import requests
from plotly import offline
from plotly.graph_objs import Bar

url =  'https://api.github.com/search/repositories?q=language:python&sort=stars'
headers = {'Accept': 'application/vnd.github.v3+json'}
r = requests.get(url, headers=headers)
print(f"Status code : {r.status_code}")
response_dict = r.json()
print(response_dict.keys())
repo_dicts = response_dict['items']

repo_names, stars = [], []
for repo_dict in repo_dicts:
    repo_names.append(repo_dict['name'])
    stars.append(repo_dict['stargazers_count'])

data = [{
    'type' : 'bar',
    'x' : repo_names,
    'y' : stars,
    'marker' : {
        'color' : 'rgb(255, 0, 0)',
        'line' : {
            'width' : 1.5,
            'color' : 'rgb(25, 25, 25)'},
    },
    'opacity' : 0.6
}]

my_layout = {
    'title' : 'Most Starred Python projects on github',
    'xaxis' : {
        'title' : 'Repository',
        'titlefont' : {'size' : 24},
        'tickfont' : {'size' : 14},
    },

    'yaxis' : {
        'title' : 'Stars',
        'titlefont' : {'size' : 24},
        'tickfont' : {'size' : 14},
    }
}

fig = {'data' : data, 'layout' : my_layout}
offline.plot(fig, filename='api_repos_review.html')
