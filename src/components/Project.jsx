import '../styles/Project.css';


import muskvszuckImage from "src\assets\images\mvz.png";
import pokeSquadImage from "src\assets\images\PokeSquad.Screenshot.png";
import bookSearchEngineImage from "src\assets\images\screenshot.png";
import socialNetworkApiImage from "src\assets\images\socialnetworkapi.png";
import readmeGeneratorImage from "src\assets\images\ReadMeGenerator.png";
import weatherDashboardImage from "src\assets\images\weatherdashboard.png";

const projects = [
  {
    id: 1,
    name: "Musk vs Zuck",
    description: "A voting app for your favorite fighter",
    image: muskvszuckImage,
    deployedApp: "https://c-hickman23.github.io/Musk-Vs.-Zuck/",
    repo: "https://github.com/Lyman17/Musk-Vs.-Zuck",
  },
  {
    id: 2,
    name: "pokeSquad",
    description: "An app for tracking your Pokemon collection",
    image: pokeSquadImage,
    deployedApp: "https://lyman17.github.io/pokesquad/",
    repo: "https://github.com/Lyman17/pokesquad",
  },
  {
    id: 3,
    name: "bookSearchEngine",
    description: "A MERN project for searching books",
    image: bookSearchEngineImage,
    deployedApp: "https://book-search-engine-production-ddcc.up.railway.app/",
    repo: "https://github.com/Lyman17/Book-Search-Engine",
  },
  {
    id: 4,
    name: "Social Network API",
    description: "A back end database for a social network built with MongoDB",
    image: socialNetworkApiImage,
    deployedApp: "https://github.com/Lyman17/Social-Network-API",
    repo: "https://github.com/Lyman17/Social-Network-API",
  },
  {
    id: 5,
    name: "ReadMe Generator",
    description: "An CLI app for creating ReadMe.md files",
    image: readmeGeneratorImage,
    deployedApp: "https://github.com/Lyman17/professional-README-generator",
    repo: "https://github.com/Lyman17/professional-README-generator",
  },
  {
    id: 6,
    name: "Weather Dashboard",
    description: "An app to quickly get the current weather and 5 day forecast using OpenWeather API",
    image: weatherDashboardImage,
    deployedApp: "https://lyman17.github.io/Weather-Dashboard-ServerSide-APIs/",
    repo: "https://github.com/Lyman17/Weather-Dashboard-ServerSide-APIs",
  },
];

function Project() {
    return (
        <div>
              {projects.map((project) => (
                <div className="cardFormat">
                    <img className="imageFormat" src={project.image} />
                    <div>
                        <h5>Name: {project.name}</h5>
                        <p>Description: {project.description}</p>
                        <a href="#">{project.deployedApp}</a>
                        <a href="#">{project.repo}</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;