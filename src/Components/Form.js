import React,{useState} from 'react'
import axios from 'axios'
import RepoList from './RepoList' 
import './Form.css'

const Form = props => {
    const [username, setUsername] = useState('');
    const [repos,setRepos]=useState([]);
  
    const handleSubmit = event => {https://api.github.com/users/${username}/repos
      event.preventDefault()
      axios.get(`https://api.github.com/users/${username}/repos`, {
        params: {
          sort: 'pushed',
          direction: 'desc'
        }
      }).then((res)=>{
         setRepos(res.data);
      });
    }
  
    return (
        <div class="container">
            <i class="fab fa-github fa-10x"></i>
            <form onSubmit={handleSubmit}>
          
          <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
          placeholder="GitHub username"
          required
        />
        <button type="submit"><i class="fas fa-search"></i></button>
      </form>

      <RepoList 
          org={username}
          repos={repos}
        />
            </div>
      
    )
  }

  export default Form;