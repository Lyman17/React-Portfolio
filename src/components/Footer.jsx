import gitHubIcon from "src\assets\images\github.png"
import linkedInIcon from "src\assets\images\linkedin.png"


function Footer() {
    return (
        <div className="footer flex items-center justify-center space-x-4">
            <a href="https://github.com/Lyman17" className="w-24 h-24 bg-white p-2 rounded-full">
                <img src={gitHubIcon} alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/brianlyman/" className="w-24 h-24 bg-white p-2 rounded-full">
                <img src={linkedInIcon} alt="LinkedIn Icon" />
            </a>
        </div>
    );
}

export default Footer;