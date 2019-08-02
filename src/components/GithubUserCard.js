import React, { Component } from 'react'
import api                  from '../services/api'
import Error                from '../components/Error'
import styled               from 'styled-components'



class GithubUserCard extends Component {
    repos = 
    [
        {
            "id": 149037773,
            "node_id": "MDEwOlJlcG9zaXRvcnkxNDkwMzc3NzM=",
            "name": "Arquivos---SSL",
            "full_name": "FeehGb/Arquivos---SSL",
            "private": false,
            "owner": {
                "login": "FeehGb",
                "id": 43045359,
                "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/FeehGb",
                "html_url": "https://github.com/FeehGb",
                "followers_url": "https://api.github.com/users/FeehGb/followers",
                "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
                "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
                "organizations_url": "https://api.github.com/users/FeehGb/orgs",
                "repos_url": "https://api.github.com/users/FeehGb/repos",
                "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
                "received_events_url": "https://api.github.com/users/FeehGb/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/FeehGb/Arquivos---SSL",
            "description": "arquivos apra criaçao da chave",
            "fork": false,
            "url": "https://api.github.com/repos/FeehGb/Arquivos---SSL",
            "forks_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/forks",
            "keys_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/teams",
            "hooks_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/hooks",
            "issue_events_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/issues/events{/number}",
            "events_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/events",
            "assignees_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/assignees{/user}",
            "branches_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/branches{/branch}",
            "tags_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/tags",
            "blobs_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/languages",
            "stargazers_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/stargazers",
            "contributors_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/contributors",
            "subscribers_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/subscribers",
            "subscription_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/subscription",
            "commits_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/contents/{+path}",
            "compare_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/merges",
            "archive_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/downloads",
            "issues_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/issues{/number}",
            "pulls_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/labels{/name}",
            "releases_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/releases{/id}",
            "deployments_url": "https://api.github.com/repos/FeehGb/Arquivos---SSL/deployments",
            "created_at": "2018-09-16T21:33:27Z",
            "updated_at": "2018-09-28T01:56:37Z",
            "pushed_at": "2018-09-28T01:56:36Z",
            "git_url": "git://github.com/FeehGb/Arquivos---SSL.git",
            "ssh_url": "git@github.com:FeehGb/Arquivos---SSL.git",
            "clone_url": "https://github.com/FeehGb/Arquivos---SSL.git",
            "svn_url": "https://github.com/FeehGb/Arquivos---SSL",
            "homepage": null,
            "size": 5,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": null,
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        },
        {
            "id": 155297816,
            "node_id": "MDEwOlJlcG9zaXRvcnkxNTUyOTc4MTY=",
            "name": "Client-server-Node",
            "full_name": "FeehGb/Client-server-Node",
            "private": false,
            "owner": {
                "login": "FeehGb",
                "id": 43045359,
                "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/FeehGb",
                "html_url": "https://github.com/FeehGb",
                "followers_url": "https://api.github.com/users/FeehGb/followers",
                "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
                "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
                "organizations_url": "https://api.github.com/users/FeehGb/orgs",
                "repos_url": "https://api.github.com/users/FeehGb/repos",
                "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
                "received_events_url": "https://api.github.com/users/FeehGb/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/FeehGb/Client-server-Node",
            "description": null,
            "fork": false,
            "url": "https://api.github.com/repos/FeehGb/Client-server-Node",
            "forks_url": "https://api.github.com/repos/FeehGb/Client-server-Node/forks",
            "keys_url": "https://api.github.com/repos/FeehGb/Client-server-Node/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/FeehGb/Client-server-Node/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/FeehGb/Client-server-Node/teams",
            "hooks_url": "https://api.github.com/repos/FeehGb/Client-server-Node/hooks",
            "issue_events_url": "https://api.github.com/repos/FeehGb/Client-server-Node/issues/events{/number}",
            "events_url": "https://api.github.com/repos/FeehGb/Client-server-Node/events",
            "assignees_url": "https://api.github.com/repos/FeehGb/Client-server-Node/assignees{/user}",
            "branches_url": "https://api.github.com/repos/FeehGb/Client-server-Node/branches{/branch}",
            "tags_url": "https://api.github.com/repos/FeehGb/Client-server-Node/tags",
            "blobs_url": "https://api.github.com/repos/FeehGb/Client-server-Node/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/FeehGb/Client-server-Node/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/FeehGb/Client-server-Node/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/FeehGb/Client-server-Node/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/FeehGb/Client-server-Node/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/FeehGb/Client-server-Node/languages",
            "stargazers_url": "https://api.github.com/repos/FeehGb/Client-server-Node/stargazers",
            "contributors_url": "https://api.github.com/repos/FeehGb/Client-server-Node/contributors",
            "subscribers_url": "https://api.github.com/repos/FeehGb/Client-server-Node/subscribers",
            "subscription_url": "https://api.github.com/repos/FeehGb/Client-server-Node/subscription",
            "commits_url": "https://api.github.com/repos/FeehGb/Client-server-Node/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/FeehGb/Client-server-Node/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/FeehGb/Client-server-Node/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/FeehGb/Client-server-Node/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/FeehGb/Client-server-Node/contents/{+path}",
            "compare_url": "https://api.github.com/repos/FeehGb/Client-server-Node/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/FeehGb/Client-server-Node/merges",
            "archive_url": "https://api.github.com/repos/FeehGb/Client-server-Node/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/FeehGb/Client-server-Node/downloads",
            "issues_url": "https://api.github.com/repos/FeehGb/Client-server-Node/issues{/number}",
            "pulls_url": "https://api.github.com/repos/FeehGb/Client-server-Node/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/FeehGb/Client-server-Node/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/FeehGb/Client-server-Node/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/FeehGb/Client-server-Node/labels{/name}",
            "releases_url": "https://api.github.com/repos/FeehGb/Client-server-Node/releases{/id}",
            "deployments_url": "https://api.github.com/repos/FeehGb/Client-server-Node/deployments",
            "created_at": "2018-10-30T00:04:12Z",
            "updated_at": "2018-10-30T00:04:19Z",
            "pushed_at": "2018-10-30T00:04:18Z",
            "git_url": "git://github.com/FeehGb/Client-server-Node.git",
            "ssh_url": "git@github.com:FeehGb/Client-server-Node.git",
            "clone_url": "https://github.com/FeehGb/Client-server-Node.git",
            "svn_url": "https://github.com/FeehGb/Client-server-Node",
            "homepage": null,
            "size": 0,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": null,
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        },
        {
            "id": 190491544,
            "node_id": "MDEwOlJlcG9zaXRvcnkxOTA0OTE1NDQ=",
            "name": "Codenation-Criptografia-de-J-lio-C-sar",
            "full_name": "FeehGb/Codenation-Criptografia-de-J-lio-C-sar",
            "private": false,
            "owner": {
                "login": "FeehGb",
                "id": 43045359,
                "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/FeehGb",
                "html_url": "https://github.com/FeehGb",
                "followers_url": "https://api.github.com/users/FeehGb/followers",
                "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
                "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
                "organizations_url": "https://api.github.com/users/FeehGb/orgs",
                "repos_url": "https://api.github.com/users/FeehGb/repos",
                "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
                "received_events_url": "https://api.github.com/users/FeehGb/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/FeehGb/Codenation-Criptografia-de-J-lio-C-sar",
            "description": null,
            "fork": false,
            "url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar",
            "forks_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/forks",
            "keys_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/teams",
            "hooks_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/hooks",
            "issue_events_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/issues/events{/number}",
            "events_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/events",
            "assignees_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/assignees{/user}",
            "branches_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/branches{/branch}",
            "tags_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/tags",
            "blobs_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/languages",
            "stargazers_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/stargazers",
            "contributors_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/contributors",
            "subscribers_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/subscribers",
            "subscription_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/subscription",
            "commits_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/contents/{+path}",
            "compare_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/merges",
            "archive_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/downloads",
            "issues_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/issues{/number}",
            "pulls_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/labels{/name}",
            "releases_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/releases{/id}",
            "deployments_url": "https://api.github.com/repos/FeehGb/Codenation-Criptografia-de-J-lio-C-sar/deployments",
            "created_at": "2019-06-06T01:10:01Z",
            "updated_at": "2019-06-07T14:13:00Z",
            "pushed_at": "2019-06-07T14:12:58Z",
            "git_url": "git://github.com/FeehGb/Codenation-Criptografia-de-J-lio-C-sar.git",
            "ssh_url": "git@github.com:FeehGb/Codenation-Criptografia-de-J-lio-C-sar.git",
            "clone_url": "https://github.com/FeehGb/Codenation-Criptografia-de-J-lio-C-sar.git",
            "svn_url": "https://github.com/FeehGb/Codenation-Criptografia-de-J-lio-C-sar",
            "homepage": null,
            "size": 16,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        },
        {
            "id": 147713707,
            "node_id": "MDEwOlJlcG9zaXRvcnkxNDc3MTM3MDc=",
            "name": "curso-javascript-projeto-calculadora-clone",
            "full_name": "FeehGb/curso-javascript-projeto-calculadora-clone",
            "private": false,
            "owner": {
                "login": "FeehGb",
                "id": 43045359,
                "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/FeehGb",
                "html_url": "https://github.com/FeehGb",
                "followers_url": "https://api.github.com/users/FeehGb/followers",
                "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
                "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
                "organizations_url": "https://api.github.com/users/FeehGb/orgs",
                "repos_url": "https://api.github.com/users/FeehGb/repos",
                "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
                "received_events_url": "https://api.github.com/users/FeehGb/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/FeehGb/curso-javascript-projeto-calculadora-clone",
            "description": null,
            "fork": false,
            "url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone",
            "forks_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/forks",
            "keys_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/teams",
            "hooks_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/hooks",
            "issue_events_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/issues/events{/number}",
            "events_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/events",
            "assignees_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/assignees{/user}",
            "branches_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/branches{/branch}",
            "tags_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/tags",
            "blobs_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/languages",
            "stargazers_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/stargazers",
            "contributors_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/contributors",
            "subscribers_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/subscribers",
            "subscription_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/subscription",
            "commits_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/contents/{+path}",
            "compare_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/merges",
            "archive_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/downloads",
            "issues_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/issues{/number}",
            "pulls_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/labels{/name}",
            "releases_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/releases{/id}",
            "deployments_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-calculadora-clone/deployments",
            "created_at": "2018-09-06T18:06:23Z",
            "updated_at": "2018-10-22T23:32:35Z",
            "pushed_at": "2018-10-22T23:32:34Z",
            "git_url": "git://github.com/FeehGb/curso-javascript-projeto-calculadora-clone.git",
            "ssh_url": "git@github.com:FeehGb/curso-javascript-projeto-calculadora-clone.git",
            "clone_url": "https://github.com/FeehGb/curso-javascript-projeto-calculadora-clone.git",
            "svn_url": "https://github.com/FeehGb/curso-javascript-projeto-calculadora-clone",
            "homepage": null,
            "size": 47,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "HTML",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        },
        {
            "id": 149535617,
            "node_id": "MDEwOlJlcG9zaXRvcnkxNDk1MzU2MTc=",
            "name": "curso-javascript-projeto-usuarios-master",
            "full_name": "FeehGb/curso-javascript-projeto-usuarios-master",
            "private": false,
            "owner": {
                "login": "FeehGb",
                "id": 43045359,
                "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/FeehGb",
                "html_url": "https://github.com/FeehGb",
                "followers_url": "https://api.github.com/users/FeehGb/followers",
                "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
                "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
                "organizations_url": "https://api.github.com/users/FeehGb/orgs",
                "repos_url": "https://api.github.com/users/FeehGb/repos",
                "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
                "received_events_url": "https://api.github.com/users/FeehGb/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/FeehGb/curso-javascript-projeto-usuarios-master",
            "description": "curso-javascript-projeto-usuarios-master",
            "fork": false,
            "url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master",
            "forks_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/forks",
            "keys_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/teams",
            "hooks_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/hooks",
            "issue_events_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/issues/events{/number}",
            "events_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/events",
            "assignees_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/assignees{/user}",
            "branches_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/branches{/branch}",
            "tags_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/tags",
            "blobs_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/languages",
            "stargazers_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/stargazers",
            "contributors_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/contributors",
            "subscribers_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/subscribers",
            "subscription_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/subscription",
            "commits_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/contents/{+path}",
            "compare_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/merges",
            "archive_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/downloads",
            "issues_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/issues{/number}",
            "pulls_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/labels{/name}",
            "releases_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/releases{/id}",
            "deployments_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-usuarios-master/deployments",
            "created_at": "2018-09-20T01:49:05Z",
            "updated_at": "2018-10-23T01:16:00Z",
            "pushed_at": "2018-10-23T01:15:59Z",
            "git_url": "git://github.com/FeehGb/curso-javascript-projeto-usuarios-master.git",
            "ssh_url": "git@github.com:FeehGb/curso-javascript-projeto-usuarios-master.git",
            "clone_url": "https://github.com/FeehGb/curso-javascript-projeto-usuarios-master.git",
            "svn_url": "https://github.com/FeehGb/curso-javascript-projeto-usuarios-master",
            "homepage": null,
            "size": 6509,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "HTML",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        },
        {
            "id": 156121790,
            "node_id": "MDEwOlJlcG9zaXRvcnkxNTYxMjE3OTA=",
            "name": "curso-javascript-projeto-whatsapp-clone",
            "full_name": "FeehGb/curso-javascript-projeto-whatsapp-clone",
            "private": false,
            "owner": {
                "login": "FeehGb",
                "id": 43045359,
                "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/FeehGb",
                "html_url": "https://github.com/FeehGb",
                "followers_url": "https://api.github.com/users/FeehGb/followers",
                "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
                "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
                "organizations_url": "https://api.github.com/users/FeehGb/orgs",
                "repos_url": "https://api.github.com/users/FeehGb/repos",
                "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
                "received_events_url": "https://api.github.com/users/FeehGb/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/FeehGb/curso-javascript-projeto-whatsapp-clone",
            "description": "WhatsApp",
            "fork": false,
            "url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone",
            "forks_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/forks",
            "keys_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/teams",
            "hooks_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/hooks",
            "issue_events_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/issues/events{/number}",
            "events_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/events",
            "assignees_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/assignees{/user}",
            "branches_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/branches{/branch}",
            "tags_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/tags",
            "blobs_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/languages",
            "stargazers_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/stargazers",
            "contributors_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/contributors",
            "subscribers_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/subscribers",
            "subscription_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/subscription",
            "commits_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/contents/{+path}",
            "compare_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/merges",
            "archive_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/downloads",
            "issues_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/issues{/number}",
            "pulls_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/labels{/name}",
            "releases_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/releases{/id}",
            "deployments_url": "https://api.github.com/repos/FeehGb/curso-javascript-projeto-whatsapp-clone/deployments",
            "created_at": "2018-11-04T20:27:22Z",
            "updated_at": "2018-11-04T20:27:31Z",
            "pushed_at": "2018-11-04T20:27:29Z",
            "git_url": "git://github.com/FeehGb/curso-javascript-projeto-whatsapp-clone.git",
            "ssh_url": "git@github.com:FeehGb/curso-javascript-projeto-whatsapp-clone.git",
            "clone_url": "https://github.com/FeehGb/curso-javascript-projeto-whatsapp-clone.git",
            "svn_url": "https://github.com/FeehGb/curso-javascript-projeto-whatsapp-clone",
            "homepage": null,
            "size": 462,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "CSS",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        },
        {
            "id": 154240622,
            "node_id": "MDEwOlJlcG9zaXRvcnkxNTQyNDA2MjI=",
            "name": "Drop-box",
            "full_name": "FeehGb/Drop-box",
            "private": false,
            "owner": {
                "login": "FeehGb",
                "id": 43045359,
                "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/FeehGb",
                "html_url": "https://github.com/FeehGb",
                "followers_url": "https://api.github.com/users/FeehGb/followers",
                "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
                "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
                "organizations_url": "https://api.github.com/users/FeehGb/orgs",
                "repos_url": "https://api.github.com/users/FeehGb/repos",
                "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
                "received_events_url": "https://api.github.com/users/FeehGb/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/FeehGb/Drop-box",
            "description": null,
            "fork": false,
            "url": "https://api.github.com/repos/FeehGb/Drop-box",
            "forks_url": "https://api.github.com/repos/FeehGb/Drop-box/forks",
            "keys_url": "https://api.github.com/repos/FeehGb/Drop-box/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/FeehGb/Drop-box/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/FeehGb/Drop-box/teams",
            "hooks_url": "https://api.github.com/repos/FeehGb/Drop-box/hooks",
            "issue_events_url": "https://api.github.com/repos/FeehGb/Drop-box/issues/events{/number}",
            "events_url": "https://api.github.com/repos/FeehGb/Drop-box/events",
            "assignees_url": "https://api.github.com/repos/FeehGb/Drop-box/assignees{/user}",
            "branches_url": "https://api.github.com/repos/FeehGb/Drop-box/branches{/branch}",
            "tags_url": "https://api.github.com/repos/FeehGb/Drop-box/tags",
            "blobs_url": "https://api.github.com/repos/FeehGb/Drop-box/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/FeehGb/Drop-box/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/FeehGb/Drop-box/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/FeehGb/Drop-box/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/FeehGb/Drop-box/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/FeehGb/Drop-box/languages",
            "stargazers_url": "https://api.github.com/repos/FeehGb/Drop-box/stargazers",
            "contributors_url": "https://api.github.com/repos/FeehGb/Drop-box/contributors",
            "subscribers_url": "https://api.github.com/repos/FeehGb/Drop-box/subscribers",
            "subscription_url": "https://api.github.com/repos/FeehGb/Drop-box/subscription",
            "commits_url": "https://api.github.com/repos/FeehGb/Drop-box/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/FeehGb/Drop-box/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/FeehGb/Drop-box/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/FeehGb/Drop-box/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/FeehGb/Drop-box/contents/{+path}",
            "compare_url": "https://api.github.com/repos/FeehGb/Drop-box/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/FeehGb/Drop-box/merges",
            "archive_url": "https://api.github.com/repos/FeehGb/Drop-box/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/FeehGb/Drop-box/downloads",
            "issues_url": "https://api.github.com/repos/FeehGb/Drop-box/issues{/number}",
            "pulls_url": "https://api.github.com/repos/FeehGb/Drop-box/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/FeehGb/Drop-box/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/FeehGb/Drop-box/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/FeehGb/Drop-box/labels{/name}",
            "releases_url": "https://api.github.com/repos/FeehGb/Drop-box/releases{/id}",
            "deployments_url": "https://api.github.com/repos/FeehGb/Drop-box/deployments",
            "created_at": "2018-10-23T01:18:42Z",
            "updated_at": "2018-10-23T01:18:53Z",
            "pushed_at": "2018-10-23T01:18:52Z",
            "git_url": "git://github.com/FeehGb/Drop-box.git",
            "ssh_url": "git@github.com:FeehGb/Drop-box.git",
            "clone_url": "https://github.com/FeehGb/Drop-box.git",
            "svn_url": "https://github.com/FeehGb/Drop-box",
            "homepage": null,
            "size": 1771,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        },
        {
            "id": 184166006,
            "node_id": "MDEwOlJlcG9zaXRvcnkxODQxNjYwMDY=",
            "name": "google-chrome-tabs-only-css",
            "full_name": "FeehGb/google-chrome-tabs-only-css",
            "private": false,
            "owner": {
                "login": "FeehGb",
                "id": 43045359,
                "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/FeehGb",
                "html_url": "https://github.com/FeehGb",
                "followers_url": "https://api.github.com/users/FeehGb/followers",
                "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
                "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
                "organizations_url": "https://api.github.com/users/FeehGb/orgs",
                "repos_url": "https://api.github.com/users/FeehGb/repos",
                "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
                "received_events_url": "https://api.github.com/users/FeehGb/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/FeehGb/google-chrome-tabs-only-css",
            "description": null,
            "fork": false,
            "url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css",
            "forks_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/forks",
            "keys_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/teams",
            "hooks_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/hooks",
            "issue_events_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/issues/events{/number}",
            "events_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/events",
            "assignees_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/assignees{/user}",
            "branches_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/branches{/branch}",
            "tags_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/tags",
            "blobs_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/languages",
            "stargazers_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/stargazers",
            "contributors_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/contributors",
            "subscribers_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/subscribers",
            "subscription_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/subscription",
            "commits_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/contents/{+path}",
            "compare_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/merges",
            "archive_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/downloads",
            "issues_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/issues{/number}",
            "pulls_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/labels{/name}",
            "releases_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/releases{/id}",
            "deployments_url": "https://api.github.com/repos/FeehGb/google-chrome-tabs-only-css/deployments",
            "created_at": "2019-04-30T00:55:27Z",
            "updated_at": "2019-05-04T15:43:58Z",
            "pushed_at": "2019-05-04T15:43:57Z",
            "git_url": "git://github.com/FeehGb/google-chrome-tabs-only-css.git",
            "ssh_url": "git@github.com:FeehGb/google-chrome-tabs-only-css.git",
            "clone_url": "https://github.com/FeehGb/google-chrome-tabs-only-css.git",
            "svn_url": "https://github.com/FeehGb/google-chrome-tabs-only-css",
            "homepage": null,
            "size": 20,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "HTML",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": {
                "key": "apache-2.0",
                "name": "Apache License 2.0",
                "spdx_id": "Apache-2.0",
                "url": "https://api.github.com/licenses/apache-2.0",
                "node_id": "MDc6TGljZW5zZTI="
            },
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        },
        {
            "id": 194751458,
            "node_id": "MDEwOlJlcG9zaXRvcnkxOTQ3NTE0NTg=",
            "name": "Graphql-GitHub",
            "full_name": "FeehGb/Graphql-GitHub",
            "private": false,
            "owner": {
                "login": "FeehGb",
                "id": 43045359,
                "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/FeehGb",
                "html_url": "https://github.com/FeehGb",
                "followers_url": "https://api.github.com/users/FeehGb/followers",
                "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
                "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
                "organizations_url": "https://api.github.com/users/FeehGb/orgs",
                "repos_url": "https://api.github.com/users/FeehGb/repos",
                "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
                "received_events_url": "https://api.github.com/users/FeehGb/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/FeehGb/Graphql-GitHub",
            "description": null,
            "fork": false,
            "url": "https://api.github.com/repos/FeehGb/Graphql-GitHub",
            "forks_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/forks",
            "keys_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/teams",
            "hooks_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/hooks",
            "issue_events_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/issues/events{/number}",
            "events_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/events",
            "assignees_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/assignees{/user}",
            "branches_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/branches{/branch}",
            "tags_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/tags",
            "blobs_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/languages",
            "stargazers_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/stargazers",
            "contributors_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/contributors",
            "subscribers_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/subscribers",
            "subscription_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/subscription",
            "commits_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/contents/{+path}",
            "compare_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/merges",
            "archive_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/downloads",
            "issues_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/issues{/number}",
            "pulls_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/labels{/name}",
            "releases_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/releases{/id}",
            "deployments_url": "https://api.github.com/repos/FeehGb/Graphql-GitHub/deployments",
            "created_at": "2019-07-01T22:34:46Z",
            "updated_at": "2019-07-01T22:36:27Z",
            "pushed_at": "2019-07-01T22:36:25Z",
            "git_url": "git://github.com/FeehGb/Graphql-GitHub.git",
            "ssh_url": "git@github.com:FeehGb/Graphql-GitHub.git",
            "clone_url": "https://github.com/FeehGb/Graphql-GitHub.git",
            "svn_url": "https://github.com/FeehGb/Graphql-GitHub",
            "homepage": null,
            "size": 298,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        },
        {
            "id": 157469749,
            "node_id": "MDEwOlJlcG9zaXRvcnkxNTc0Njk3NDk=",
            "name": "modalbox",
            "full_name": "FeehGb/modalbox",
            "private": false,
            "owner": {
                "login": "FeehGb",
                "id": 43045359,
                "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/FeehGb",
                "html_url": "https://github.com/FeehGb",
                "followers_url": "https://api.github.com/users/FeehGb/followers",
                "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
                "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
                "organizations_url": "https://api.github.com/users/FeehGb/orgs",
                "repos_url": "https://api.github.com/users/FeehGb/repos",
                "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
                "received_events_url": "https://api.github.com/users/FeehGb/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/FeehGb/modalbox",
            "description": "Simple modal box creater",
            "fork": false,
            "url": "https://api.github.com/repos/FeehGb/modalbox",
            "forks_url": "https://api.github.com/repos/FeehGb/modalbox/forks",
            "keys_url": "https://api.github.com/repos/FeehGb/modalbox/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/FeehGb/modalbox/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/FeehGb/modalbox/teams",
            "hooks_url": "https://api.github.com/repos/FeehGb/modalbox/hooks",
            "issue_events_url": "https://api.github.com/repos/FeehGb/modalbox/issues/events{/number}",
            "events_url": "https://api.github.com/repos/FeehGb/modalbox/events",
            "assignees_url": "https://api.github.com/repos/FeehGb/modalbox/assignees{/user}",
            "branches_url": "https://api.github.com/repos/FeehGb/modalbox/branches{/branch}",
            "tags_url": "https://api.github.com/repos/FeehGb/modalbox/tags",
            "blobs_url": "https://api.github.com/repos/FeehGb/modalbox/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/FeehGb/modalbox/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/FeehGb/modalbox/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/FeehGb/modalbox/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/FeehGb/modalbox/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/FeehGb/modalbox/languages",
            "stargazers_url": "https://api.github.com/repos/FeehGb/modalbox/stargazers",
            "contributors_url": "https://api.github.com/repos/FeehGb/modalbox/contributors",
            "subscribers_url": "https://api.github.com/repos/FeehGb/modalbox/subscribers",
            "subscription_url": "https://api.github.com/repos/FeehGb/modalbox/subscription",
            "commits_url": "https://api.github.com/repos/FeehGb/modalbox/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/FeehGb/modalbox/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/FeehGb/modalbox/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/FeehGb/modalbox/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/FeehGb/modalbox/contents/{+path}",
            "compare_url": "https://api.github.com/repos/FeehGb/modalbox/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/FeehGb/modalbox/merges",
            "archive_url": "https://api.github.com/repos/FeehGb/modalbox/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/FeehGb/modalbox/downloads",
            "issues_url": "https://api.github.com/repos/FeehGb/modalbox/issues{/number}",
            "pulls_url": "https://api.github.com/repos/FeehGb/modalbox/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/FeehGb/modalbox/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/FeehGb/modalbox/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/FeehGb/modalbox/labels{/name}",
            "releases_url": "https://api.github.com/repos/FeehGb/modalbox/releases{/id}",
            "deployments_url": "https://api.github.com/repos/FeehGb/modalbox/deployments",
            "created_at": "2018-11-14T01:12:44Z",
            "updated_at": "2019-01-22T10:57:01Z",
            "pushed_at": "2019-01-22T10:56:59Z",
            "git_url": "git://github.com/FeehGb/modalbox.git",
            "ssh_url": "git@github.com:FeehGb/modalbox.git",
            "clone_url": "https://github.com/FeehGb/modalbox.git",
            "svn_url": "https://github.com/FeehGb/modalbox",
            "homepage": null,
            "size": 56,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "CSS",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        },
        {
            "id": 177904002,
            "node_id": "MDEwOlJlcG9zaXRvcnkxNzc5MDQwMDI=",
            "name": "mongoDb",
            "full_name": "FeehGb/mongoDb",
            "private": false,
            "owner": {
                "login": "FeehGb",
                "id": 43045359,
                "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/FeehGb",
                "html_url": "https://github.com/FeehGb",
                "followers_url": "https://api.github.com/users/FeehGb/followers",
                "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
                "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
                "organizations_url": "https://api.github.com/users/FeehGb/orgs",
                "repos_url": "https://api.github.com/users/FeehGb/repos",
                "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
                "received_events_url": "https://api.github.com/users/FeehGb/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/FeehGb/mongoDb",
            "description": null,
            "fork": false,
            "url": "https://api.github.com/repos/FeehGb/mongoDb",
            "forks_url": "https://api.github.com/repos/FeehGb/mongoDb/forks",
            "keys_url": "https://api.github.com/repos/FeehGb/mongoDb/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/FeehGb/mongoDb/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/FeehGb/mongoDb/teams",
            "hooks_url": "https://api.github.com/repos/FeehGb/mongoDb/hooks",
            "issue_events_url": "https://api.github.com/repos/FeehGb/mongoDb/issues/events{/number}",
            "events_url": "https://api.github.com/repos/FeehGb/mongoDb/events",
            "assignees_url": "https://api.github.com/repos/FeehGb/mongoDb/assignees{/user}",
            "branches_url": "https://api.github.com/repos/FeehGb/mongoDb/branches{/branch}",
            "tags_url": "https://api.github.com/repos/FeehGb/mongoDb/tags",
            "blobs_url": "https://api.github.com/repos/FeehGb/mongoDb/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/FeehGb/mongoDb/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/FeehGb/mongoDb/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/FeehGb/mongoDb/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/FeehGb/mongoDb/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/FeehGb/mongoDb/languages",
            "stargazers_url": "https://api.github.com/repos/FeehGb/mongoDb/stargazers",
            "contributors_url": "https://api.github.com/repos/FeehGb/mongoDb/contributors",
            "subscribers_url": "https://api.github.com/repos/FeehGb/mongoDb/subscribers",
            "subscription_url": "https://api.github.com/repos/FeehGb/mongoDb/subscription",
            "commits_url": "https://api.github.com/repos/FeehGb/mongoDb/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/FeehGb/mongoDb/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/FeehGb/mongoDb/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/FeehGb/mongoDb/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/FeehGb/mongoDb/contents/{+path}",
            "compare_url": "https://api.github.com/repos/FeehGb/mongoDb/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/FeehGb/mongoDb/merges",
            "archive_url": "https://api.github.com/repos/FeehGb/mongoDb/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/FeehGb/mongoDb/downloads",
            "issues_url": "https://api.github.com/repos/FeehGb/mongoDb/issues{/number}",
            "pulls_url": "https://api.github.com/repos/FeehGb/mongoDb/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/FeehGb/mongoDb/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/FeehGb/mongoDb/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/FeehGb/mongoDb/labels{/name}",
            "releases_url": "https://api.github.com/repos/FeehGb/mongoDb/releases{/id}",
            "deployments_url": "https://api.github.com/repos/FeehGb/mongoDb/deployments",
            "created_at": "2019-03-27T02:30:24Z",
            "updated_at": "2019-03-27T02:36:00Z",
            "pushed_at": "2019-03-27T02:35:58Z",
            "git_url": "git://github.com/FeehGb/mongoDb.git",
            "ssh_url": "git@github.com:FeehGb/mongoDb.git",
            "clone_url": "https://github.com/FeehGb/mongoDb.git",
            "svn_url": "https://github.com/FeehGb/mongoDb",
            "homepage": null,
            "size": 2,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": null,
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        },
        {
            "id": 155298631,
            "node_id": "MDEwOlJlcG9zaXRvcnkxNTUyOTg2MzE=",
            "name": "Projeto-Node-Client-Server",
            "full_name": "FeehGb/Projeto-Node-Client-Server",
            "private": false,
            "owner": {
                "login": "FeehGb",
                "id": 43045359,
                "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/FeehGb",
                "html_url": "https://github.com/FeehGb",
                "followers_url": "https://api.github.com/users/FeehGb/followers",
                "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
                "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
                "organizations_url": "https://api.github.com/users/FeehGb/orgs",
                "repos_url": "https://api.github.com/users/FeehGb/repos",
                "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
                "received_events_url": "https://api.github.com/users/FeehGb/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/FeehGb/Projeto-Node-Client-Server",
            "description": null,
            "fork": false,
            "url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server",
            "forks_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/forks",
            "keys_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/teams",
            "hooks_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/hooks",
            "issue_events_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/issues/events{/number}",
            "events_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/events",
            "assignees_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/assignees{/user}",
            "branches_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/branches{/branch}",
            "tags_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/tags",
            "blobs_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/languages",
            "stargazers_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/stargazers",
            "contributors_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/contributors",
            "subscribers_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/subscribers",
            "subscription_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/subscription",
            "commits_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/contents/{+path}",
            "compare_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/merges",
            "archive_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/downloads",
            "issues_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/issues{/number}",
            "pulls_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/labels{/name}",
            "releases_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/releases{/id}",
            "deployments_url": "https://api.github.com/repos/FeehGb/Projeto-Node-Client-Server/deployments",
            "created_at": "2018-10-30T00:14:38Z",
            "updated_at": "2018-10-30T00:14:56Z",
            "pushed_at": "2018-10-30T00:14:54Z",
            "git_url": "git://github.com/FeehGb/Projeto-Node-Client-Server.git",
            "ssh_url": "git@github.com:FeehGb/Projeto-Node-Client-Server.git",
            "clone_url": "https://github.com/FeehGb/Projeto-Node-Client-Server.git",
            "svn_url": "https://github.com/FeehGb/Projeto-Node-Client-Server",
            "homepage": null,
            "size": 5322,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "HTML",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        },
        {
            "id": 194765694,
            "node_id": "MDEwOlJlcG9zaXRvcnkxOTQ3NjU2OTQ=",
            "name": "ProjetoGitHubSquad3",
            "full_name": "FeehGb/ProjetoGitHubSquad3",
            "private": false,
            "owner": {
                "login": "FeehGb",
                "id": 43045359,
                "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/FeehGb",
                "html_url": "https://github.com/FeehGb",
                "followers_url": "https://api.github.com/users/FeehGb/followers",
                "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
                "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
                "organizations_url": "https://api.github.com/users/FeehGb/orgs",
                "repos_url": "https://api.github.com/users/FeehGb/repos",
                "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
                "received_events_url": "https://api.github.com/users/FeehGb/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/FeehGb/ProjetoGitHubSquad3",
            "description": null,
            "fork": false,
            "url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3",
            "forks_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/forks",
            "keys_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/teams",
            "hooks_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/hooks",
            "issue_events_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/issues/events{/number}",
            "events_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/events",
            "assignees_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/assignees{/user}",
            "branches_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/branches{/branch}",
            "tags_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/tags",
            "blobs_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/languages",
            "stargazers_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/stargazers",
            "contributors_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/contributors",
            "subscribers_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/subscribers",
            "subscription_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/subscription",
            "commits_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/contents/{+path}",
            "compare_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/merges",
            "archive_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/downloads",
            "issues_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/issues{/number}",
            "pulls_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/labels{/name}",
            "releases_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/releases{/id}",
            "deployments_url": "https://api.github.com/repos/FeehGb/ProjetoGitHubSquad3/deployments",
            "created_at": "2019-07-02T01:24:14Z",
            "updated_at": "2019-07-26T01:52:25Z",
            "pushed_at": "2019-07-26T01:52:23Z",
            "git_url": "git://github.com/FeehGb/ProjetoGitHubSquad3.git",
            "ssh_url": "git@github.com:FeehGb/ProjetoGitHubSquad3.git",
            "clone_url": "https://github.com/FeehGb/ProjetoGitHubSquad3.git",
            "svn_url": "https://github.com/FeehGb/ProjetoGitHubSquad3",
            "homepage": null,
            "size": 304,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 1,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 1,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        },
        {
            "id": 193818571,
            "node_id": "MDEwOlJlcG9zaXRvcnkxOTM4MTg1NzE=",
            "name": "react_node",
            "full_name": "FeehGb/react_node",
            "private": false,
            "owner": {
                "login": "FeehGb",
                "id": 43045359,
                "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/FeehGb",
                "html_url": "https://github.com/FeehGb",
                "followers_url": "https://api.github.com/users/FeehGb/followers",
                "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
                "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
                "organizations_url": "https://api.github.com/users/FeehGb/orgs",
                "repos_url": "https://api.github.com/users/FeehGb/repos",
                "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
                "received_events_url": "https://api.github.com/users/FeehGb/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/FeehGb/react_node",
            "description": null,
            "fork": false,
            "url": "https://api.github.com/repos/FeehGb/react_node",
            "forks_url": "https://api.github.com/repos/FeehGb/react_node/forks",
            "keys_url": "https://api.github.com/repos/FeehGb/react_node/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/FeehGb/react_node/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/FeehGb/react_node/teams",
            "hooks_url": "https://api.github.com/repos/FeehGb/react_node/hooks",
            "issue_events_url": "https://api.github.com/repos/FeehGb/react_node/issues/events{/number}",
            "events_url": "https://api.github.com/repos/FeehGb/react_node/events",
            "assignees_url": "https://api.github.com/repos/FeehGb/react_node/assignees{/user}",
            "branches_url": "https://api.github.com/repos/FeehGb/react_node/branches{/branch}",
            "tags_url": "https://api.github.com/repos/FeehGb/react_node/tags",
            "blobs_url": "https://api.github.com/repos/FeehGb/react_node/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/FeehGb/react_node/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/FeehGb/react_node/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/FeehGb/react_node/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/FeehGb/react_node/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/FeehGb/react_node/languages",
            "stargazers_url": "https://api.github.com/repos/FeehGb/react_node/stargazers",
            "contributors_url": "https://api.github.com/repos/FeehGb/react_node/contributors",
            "subscribers_url": "https://api.github.com/repos/FeehGb/react_node/subscribers",
            "subscription_url": "https://api.github.com/repos/FeehGb/react_node/subscription",
            "commits_url": "https://api.github.com/repos/FeehGb/react_node/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/FeehGb/react_node/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/FeehGb/react_node/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/FeehGb/react_node/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/FeehGb/react_node/contents/{+path}",
            "compare_url": "https://api.github.com/repos/FeehGb/react_node/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/FeehGb/react_node/merges",
            "archive_url": "https://api.github.com/repos/FeehGb/react_node/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/FeehGb/react_node/downloads",
            "issues_url": "https://api.github.com/repos/FeehGb/react_node/issues{/number}",
            "pulls_url": "https://api.github.com/repos/FeehGb/react_node/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/FeehGb/react_node/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/FeehGb/react_node/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/FeehGb/react_node/labels{/name}",
            "releases_url": "https://api.github.com/repos/FeehGb/react_node/releases{/id}",
            "deployments_url": "https://api.github.com/repos/FeehGb/react_node/deployments",
            "created_at": "2019-06-26T02:54:50Z",
            "updated_at": "2019-06-26T03:02:18Z",
            "pushed_at": "2019-06-26T03:02:16Z",
            "git_url": "git://github.com/FeehGb/react_node.git",
            "ssh_url": "git@github.com:FeehGb/react_node.git",
            "clone_url": "https://github.com/FeehGb/react_node.git",
            "svn_url": "https://github.com/FeehGb/react_node",
            "homepage": null,
            "size": 300,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        },
        {
            "id": 150353087,
            "node_id": "MDEwOlJlcG9zaXRvcnkxNTAzNTMwODc=",
            "name": "restful",
            "full_name": "FeehGb/restful",
            "private": false,
            "owner": {
                "login": "FeehGb",
                "id": 43045359,
                "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/FeehGb",
                "html_url": "https://github.com/FeehGb",
                "followers_url": "https://api.github.com/users/FeehGb/followers",
                "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
                "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
                "organizations_url": "https://api.github.com/users/FeehGb/orgs",
                "repos_url": "https://api.github.com/users/FeehGb/repos",
                "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
                "received_events_url": "https://api.github.com/users/FeehGb/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/FeehGb/restful",
            "description": "nodejs",
            "fork": false,
            "url": "https://api.github.com/repos/FeehGb/restful",
            "forks_url": "https://api.github.com/repos/FeehGb/restful/forks",
            "keys_url": "https://api.github.com/repos/FeehGb/restful/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/FeehGb/restful/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/FeehGb/restful/teams",
            "hooks_url": "https://api.github.com/repos/FeehGb/restful/hooks",
            "issue_events_url": "https://api.github.com/repos/FeehGb/restful/issues/events{/number}",
            "events_url": "https://api.github.com/repos/FeehGb/restful/events",
            "assignees_url": "https://api.github.com/repos/FeehGb/restful/assignees{/user}",
            "branches_url": "https://api.github.com/repos/FeehGb/restful/branches{/branch}",
            "tags_url": "https://api.github.com/repos/FeehGb/restful/tags",
            "blobs_url": "https://api.github.com/repos/FeehGb/restful/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/FeehGb/restful/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/FeehGb/restful/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/FeehGb/restful/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/FeehGb/restful/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/FeehGb/restful/languages",
            "stargazers_url": "https://api.github.com/repos/FeehGb/restful/stargazers",
            "contributors_url": "https://api.github.com/repos/FeehGb/restful/contributors",
            "subscribers_url": "https://api.github.com/repos/FeehGb/restful/subscribers",
            "subscription_url": "https://api.github.com/repos/FeehGb/restful/subscription",
            "commits_url": "https://api.github.com/repos/FeehGb/restful/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/FeehGb/restful/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/FeehGb/restful/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/FeehGb/restful/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/FeehGb/restful/contents/{+path}",
            "compare_url": "https://api.github.com/repos/FeehGb/restful/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/FeehGb/restful/merges",
            "archive_url": "https://api.github.com/repos/FeehGb/restful/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/FeehGb/restful/downloads",
            "issues_url": "https://api.github.com/repos/FeehGb/restful/issues{/number}",
            "pulls_url": "https://api.github.com/repos/FeehGb/restful/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/FeehGb/restful/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/FeehGb/restful/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/FeehGb/restful/labels{/name}",
            "releases_url": "https://api.github.com/repos/FeehGb/restful/releases{/id}",
            "deployments_url": "https://api.github.com/repos/FeehGb/restful/deployments",
            "created_at": "2018-09-26T01:47:44Z",
            "updated_at": "2018-09-28T01:56:30Z",
            "pushed_at": "2018-09-28T01:56:27Z",
            "git_url": "git://github.com/FeehGb/restful.git",
            "ssh_url": "git@github.com:FeehGb/restful.git",
            "clone_url": "https://github.com/FeehGb/restful.git",
            "svn_url": "https://github.com/FeehGb/restful",
            "homepage": null,
            "size": 1914,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        },
        {
            "id": 151187147,
            "node_id": "MDEwOlJlcG9zaXRvcnkxNTExODcxNDc=",
            "name": "selfservice",
            "full_name": "FeehGb/selfservice",
            "private": false,
            "owner": {
                "login": "FeehGb",
                "id": 43045359,
                "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/FeehGb",
                "html_url": "https://github.com/FeehGb",
                "followers_url": "https://api.github.com/users/FeehGb/followers",
                "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
                "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
                "organizations_url": "https://api.github.com/users/FeehGb/orgs",
                "repos_url": "https://api.github.com/users/FeehGb/repos",
                "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
                "received_events_url": "https://api.github.com/users/FeehGb/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/FeehGb/selfservice",
            "description": null,
            "fork": false,
            "url": "https://api.github.com/repos/FeehGb/selfservice",
            "forks_url": "https://api.github.com/repos/FeehGb/selfservice/forks",
            "keys_url": "https://api.github.com/repos/FeehGb/selfservice/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/FeehGb/selfservice/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/FeehGb/selfservice/teams",
            "hooks_url": "https://api.github.com/repos/FeehGb/selfservice/hooks",
            "issue_events_url": "https://api.github.com/repos/FeehGb/selfservice/issues/events{/number}",
            "events_url": "https://api.github.com/repos/FeehGb/selfservice/events",
            "assignees_url": "https://api.github.com/repos/FeehGb/selfservice/assignees{/user}",
            "branches_url": "https://api.github.com/repos/FeehGb/selfservice/branches{/branch}",
            "tags_url": "https://api.github.com/repos/FeehGb/selfservice/tags",
            "blobs_url": "https://api.github.com/repos/FeehGb/selfservice/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/FeehGb/selfservice/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/FeehGb/selfservice/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/FeehGb/selfservice/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/FeehGb/selfservice/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/FeehGb/selfservice/languages",
            "stargazers_url": "https://api.github.com/repos/FeehGb/selfservice/stargazers",
            "contributors_url": "https://api.github.com/repos/FeehGb/selfservice/contributors",
            "subscribers_url": "https://api.github.com/repos/FeehGb/selfservice/subscribers",
            "subscription_url": "https://api.github.com/repos/FeehGb/selfservice/subscription",
            "commits_url": "https://api.github.com/repos/FeehGb/selfservice/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/FeehGb/selfservice/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/FeehGb/selfservice/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/FeehGb/selfservice/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/FeehGb/selfservice/contents/{+path}",
            "compare_url": "https://api.github.com/repos/FeehGb/selfservice/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/FeehGb/selfservice/merges",
            "archive_url": "https://api.github.com/repos/FeehGb/selfservice/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/FeehGb/selfservice/downloads",
            "issues_url": "https://api.github.com/repos/FeehGb/selfservice/issues{/number}",
            "pulls_url": "https://api.github.com/repos/FeehGb/selfservice/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/FeehGb/selfservice/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/FeehGb/selfservice/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/FeehGb/selfservice/labels{/name}",
            "releases_url": "https://api.github.com/repos/FeehGb/selfservice/releases{/id}",
            "deployments_url": "https://api.github.com/repos/FeehGb/selfservice/deployments",
            "created_at": "2018-10-02T01:56:06Z",
            "updated_at": "2018-10-02T02:02:35Z",
            "pushed_at": "2018-10-02T02:02:33Z",
            "git_url": "git://github.com/FeehGb/selfservice.git",
            "ssh_url": "git@github.com:FeehGb/selfservice.git",
            "clone_url": "https://github.com/FeehGb/selfservice.git",
            "svn_url": "https://github.com/FeehGb/selfservice",
            "homepage": null,
            "size": 27,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "PHP",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": {
                "key": "gpl-3.0",
                "name": "GNU General Public License v3.0",
                "spdx_id": "GPL-3.0",
                "url": "https://api.github.com/licenses/gpl-3.0",
                "node_id": "MDc6TGljZW5zZTk="
            },
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        }
    ]
    user =  {
            
        "login": "FeehGb",
        "id": 43045359,
        "node_id": "MDQ6VXNlcjQzMDQ1MzU5",
        "avatar_url": "https://avatars1.githubusercontent.com/u/43045359?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/FeehGb",
        "html_url": "https://github.com/FeehGb",
        "followers_url": "https://api.github.com/users/FeehGb/followers",
        "following_url": "https://api.github.com/users/FeehGb/following{/other_user}",
        "gists_url": "https://api.github.com/users/FeehGb/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/FeehGb/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/FeehGb/subscriptions",
        "organizations_url": "https://api.github.com/users/FeehGb/orgs",
        "repos_url": "https://api.github.com/users/FeehGb/repos",
        "events_url": "https://api.github.com/users/FeehGb/events{/privacy}",
        "received_events_url": "https://api.github.com/users/FeehGb/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Felipe Augusto Gonçalves Basilio",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "public_repos": 16,
        "public_gists": 0,
        "followers": 4,
        "following": 6,
        "created_at": "2018-09-06T18:02:28Z",
        "updated_at": "2019-07-01T16:24:40Z"
} 
    constructor(props){
        super(props)
        this.state = {
                user    : null
            ,   repos   : null
            ,   error   : false
            ,   loading : true
        }
        
        this.closeBoxErrorEvent     = this.closeBoxErrorEvent.bind(this)
    }
    
    closeBoxErrorEvent(){
        
        this.setState({
                error   : false
            ,   loading : false
        })
        
    }
    
    
    async componentDidMount() {
        
        if (!this.props.match.params.searchString){
            
            this.setState({
                error : {code:"001",type:"Errors"}
                ,   loading : false
            })
        }
        
        
        try {
            
            
            const user  = await api.get(`/users/${this.props.match.params.searchString}`);
            const repos = await api.get(user.data.repos_url)
            
            
            this.setState({
                
                    user  : user.data
                ,   repos : repos.data
                ,   loading : false
                
            })
            
            
        } catch (error) {
            
            this.setState({
                    error : {
                        code: error.response.status ,
                        type : "HttpErrors"
                    }
                ,   loading : false
            }) 
        } 
        
    /* this.setState({
                
            user  : this.user
        ,   repos : this.repos
        
    }) */
        
        
        
    }
    
    
    
    render(){
        const { user, repos , error } = this.state
        if (!error && user )
            return (
                <Card>
                    <CardHeader>
                        <Photo>
                            <Link target="_blank" href={user.html_url}><img height="50px" src={user.avatar_url} alt=""/></Link>
                        </Photo>
                        <UserInfo>
                            <Name><Link  target="_blank" href={user.html_url}>{user.name}</Link></Name>
                            <Nick>{user.login}</Nick>
                        </UserInfo>
                    </CardHeader>
                        
                        
                    <CardContent>
                        <UserData>
                            <OthersInfo>
                                <Info>Location  : {user.location}</Info>
                                <Info>Email     : {user.email}</Info>
                                <Info>Company   : {user.company}</Info>
                                <Info>Created   : {user.created_at}</Info>
                                
                                
                            </OthersInfo>
                            <UserStats>
                                <Stats><b>{user.public_repos}</b><p>Repos</p></Stats>
                                <Stats><b>{user.followers}</b><p>Followers</p></Stats>
                                <Stats><b>{user.following}</b><p>Following</p></Stats>
                            </UserStats>
                            
                        </UserData>
                        <Repos>
                            
                            {
                                
                                repos ? repos.map( (repo, key) => 
                                    
                                    <Repo key={key}>
                                        { repo.name         ? 
                                            <RepoData>
                                                <RepoLink target="_blank" href={repo.html_url}>{ repo.name       } </RepoLink>
                                            </RepoData> 
                                            :
                                            <RepoData >&nbsp;</RepoData>
                                        }
                                        { repo.description  ? <RepoData  >                               { repo.description} </RepoData >            :<RepoData >&nbsp;</RepoData>}
                                        { repo.language     ? <RepoData  className="language"> <Circle />                    { repo.language   } </RepoData >            :<RepoData >&nbsp;</RepoData>}
                                                            
                                    </Repo>
                                    
                                ) : null
                            }
                            
                        </Repos>
                    </CardContent>
                        
                    <CardFooter>
                        
                    </CardFooter>
                    
                </Card>
            )
        else
            return this.state.error ? <Error code={error.code} type={error.type} closeEvent={this.closeBoxErrorEvent} /> : null
            
    }
    
    
}



const Card = styled.div`
    
    display             : flex              ;
    width               : 40%               ;
    border-radius       : 0 0 6px 6px       ;
    align-self          : center            ;
    flex-direction      : column            ;
    box-shadow          : 5px 4px 5px -3px rgba(29, 29, 29, 0.1),0 0 0  1px rgba(0, 0, 0, 0.01);
    margin              : 10px              ;
`
const Link = styled.a`
    
    color: #eee;
    &:hover{
        color: white;
    }
    
    `


const CardHeader = styled.div`
    display         : flex;
    height          : 100px;
    padding         : 15px;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border          : solid 2px #fefefe;
    align-items     : center;
    
    
`



const Photo = styled.div`
    border-radius: 50%;
    display      : block;
    height       : 50px;
    box-shadow   : inset 0 0 0 1px #fff, 0 0 0 3px #fff;
    overflow     : hidden;
    margin       : 10px;

`
const UserInfo = styled.div`
    color: white;
`
const Nick = styled.div`
    font-weight: none;
    color      : white;
`
const Name = styled.div`
    font-weight: bold;
    color      : white;
`
const CardContent = styled.div`
    
    background: #fefefe;
`

const UserData = styled.div`
`
const OthersInfo = styled.div`
    display       : flex;
    flex-direction: column;
    padding       : 10px;
`
const Info = styled.div`
    
`


const UserStats = styled.div`
    display: flex;
    
`
const Stats = styled.div`
    flex           : 1;
    display        : flex;
    justify-content: center;
    align-items    : center;
    flex-direction : column;
    border         : solid 1px #eee;
    border-right   : none;
    padding        : 15px;
    font-size      : 16px;
    color          : #666;
    
    &:first-child {
        border-left: none;
    }
    
`
const Circle = styled.div`
    border-radius   : 50%;
    background-color: #eee;
    width           : 10px;
    height          : 10px;
    display         : block;
    margin-right    : 5px;
`

const Repos = styled.div`
    display  : flex;
    flex-wrap: wrap;
    
`
const Repo = styled.div`
    
    border      : solid 1px #eee;
    border-right: none;
    border-top  : none;
    padding     : 5px;
    width       : 50%;
    min-height  : 40px;
    
    &:nth-child(2n+1) {
        border-left:none
    }
    
`

const RepoLink = styled.a`
    
    color      : #3754a9;
    font-weight: bold;
    &:hover{
        color: #7452ac;;
    }
    `

const RepoData = styled.div`
    display      : flex;
    align-content: center;
    align-items  : center;
    
    &.language{
        
        font-weight:bold;
        
    }

`

const CardFooter = styled.div``

export default GithubUserCard
