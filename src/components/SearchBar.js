import React, {useState} from "react";
import axios from "axios";
import Results from './Results';
import  "./styles.css";





const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [gitHubRepos, setGitHubRepos] = useState([]);
    const [data, setUserdata] = useState([]);

    const handleChange = (e)  => {
        setSearchInput(e.target.value);
    };

    const handleClick = async () => {
        console.log(searchInput);

        try {
            const gitHubRepos = await axios(`https://api.github.com/users/${searchInput}/repos`);
            setGitHubRepos(gitHubRepos);

            const {data} = await axios(`https://api.github.com/users/${searchInput}`);
            setUserdata(data);


        }
        catch{
            console.log(err);

        }
       
    };
 




    return (
        <div>
        <div className="github">
        <h1> Github Data</h1>
        <input className="input" type="text" 
        placeholder="Search"  
        value={searchInput} 
        onChange={handleChange}/>
        <button onClick={handleClick}>Search</button>
        </div>

        <div > 
                <Results 
                Repos={gitHubRepos}
                UserData={data}
                />
        </div>
       
        
        </div>
    );
    }

    export default SearchBar;