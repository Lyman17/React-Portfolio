import gitHubIcon from "/images/github.png"
import linkedInIcon from "/images/linkedin.png"


function Footer() {
    return (
        <div className="footer flex flex-wrap items-center justify-center bg-gray-400 space-x-4 p-4">
            <a href="https://github.com/Lyman17" className="w-20 h-20 bg-white p-2 rounded-full">
                <img src={gitHubIcon} alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/brianlyman/" className="w-20 h-20 bg-white p-2 rounded-full">
                <img src={linkedInIcon} alt="LinkedIn Icon" />
            </a>
        </div>
    );
}

export default Footer;