import React  from "react";
import  "./styles.css";

const Results = (props) => {
    const {Repos} = props;
    const {UserData} = props;

    console.log(UserData["name"]);
 
    const userRepos = Repos.length !==0 ? 
    (Repos.data.slice(0,5).map((item) => <li key= {item.id}> {item.name} </li> ) ) : (<li></li>);


    return (

        <div className="results">
        <div className="userName"> Name: {  UserData["name"]}</div>
        <div className="ProfilePic">Profile Picture : <img src={UserData["avatar_url"]} /> </div>
        <h2> Top Repositories</h2>
        <ul>{userRepos}  </ul>
        </div>
    );
    }

    export default Results;