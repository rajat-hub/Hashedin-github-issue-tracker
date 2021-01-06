import IssueList from './IssueList';
import { Link } from "react-router-dom";
import './RepoList.css';

const RepoList=({ repos ,org})=> {
  return (
    <ul className="repos">
      {repos.map(repo =><Link to={{ pathname: "issues", state: {org:org,name:repo.name,issues:repo.open_issues,stars:repo.stargazers_count,has_issues:repo.has_issues} }}> 
      <li key={repo.id} className="issues__issue-wrapper">
      {/* <IssueList
            org={org}
             name={repo.name}
              issues={repo.open_issues}
              stars={repo.stargazers_count}
              has_issues={repo.has_issues}
             /> */}
              <p>{repo.full_name}</p>
        </li>
        </Link>
       
      )}
    </ul>
  );
}

export default RepoList;
