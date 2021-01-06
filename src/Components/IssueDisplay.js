import './IssueDisplay.css'

const IssueDisplay=({Issue})=>{
  return <div >
      <h2>{Issue.title}</h2>
      <p class="issueNumber">#{Issue.number}</p>
      </div>
}

export default IssueDisplay