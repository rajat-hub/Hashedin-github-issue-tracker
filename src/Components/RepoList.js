import IssueList from './IssueList';
import './RepoList.css';

const RepoList=({ repos ,org})=> {
  return (
    <ul className="repos">
      {repos.map(repo =>
        <li key={repo.id} className="issues__issue-wrapper">
            <IssueList
            org={org}
             name={repo.name}
              issues={repo.open_issues}
              stars={repo.stargazers_count}
              has_issues={repo.has_issues}
             />
              {/* <p>{repo.name}</p> */}
        </li>
      )}
    </ul>
  );
}

export default RepoList;
