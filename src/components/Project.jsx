import "tailwindcss/tailwind.css"


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
        <div className="flex flex-wrap justify-center">
            {projects.map((project) => (
                <div key={project.id} className="max-w-xs mx-4 my-4 bg-white rounded-md overflow-hidden shadow-md">
                    <img className="w-full h-32 object-cover" src={project.image} alt={project.name} />
                    <div className="p-4">
                        <h5 className="text-lg font-semibold">{project.name}</h5>
                        <p className="text-gray-700">{project.description}</p>
                        <div className="mt-4">
                            <a
                                href={project.deployedApp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
                            >
                                Deployed App
                            </a>
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                            >
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;