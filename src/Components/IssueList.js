import React,{useState,useEffect} from 'react'
import IssueDisplay from './IssueDisplay'
import axios from 'axios';
import './IssueList.css'

const IssueList=(props)=>{
 
   let name=props.location.state.name;
   let issues=props.location.state.issues;
   let stars=props.location.state.stars;
   let has_issues=props.location.state.has_issues;
   let org=props.location.state.org;
   
    const [issuesList,setIssuesList]=useState([]);

    useEffect(() => {
        // https://api.github.com/repos/facebook/react/issues?per_page=25&page=1
        axios.get(`https://api.github.com/repos/${org}/${name}/issues?per_page=10&page=1`).then((res)=>{
             setIssuesList(res.data);
          });
    });

    return <div>
          <div class="header">
              <h2>{name}</h2>
              <div class="stars"><i class="fas fa-star"></i>{stars}</div>
           </div>
           <div>
            {issuesList.map((issue)=>{
               return <IssueDisplay Issue={issue}/>
            })}
           </div>
        </div>
}

export default IssueList