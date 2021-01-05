import React,{useState,useEffect} from 'react'
import IssueDisplay from './IssueDisplay'
import axios from 'axios';
import './IssueList.css'

const IssueList=({name,issues,stars,has_issues,org})=>{
 
    const [issuesList,setIssuesList]=useState([]);

    useEffect(() => {
        // https://api.github.com/repos/facebook/react/issues?per_page=25&page=1
        axios.get(`https://api.github.com/repos/${org}/${name}/issues?per_page=10&page=1`).then((res)=>{
             setIssuesList(res.data);
          });
    });

    return <div class="container">
          <div class="header">
              <h2>{name}</h2>
              <div><i class="fas fa-star"></i>{stars}</div>
           </div>
           <div>
            {issuesList.map((issue)=>{
               return <IssueDisplay Issue={issue}/>
            })}
           </div>
        </div>
}

export default IssueList