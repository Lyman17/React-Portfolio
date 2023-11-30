import '../styles/Footer.css';
import emailIcon from "src\assets\images\mail.png"
import gitHubIcon from "src\assets\images\github.png"
import linkedInIcon from "src\assets\images\linkedin.png"


function Footer() {
    return (
        <div className="footer">
            <a href="mailto:Brian@UtahMLShomes.com">
                <img src={emailIcon} alt="Email Icon" />
            </a>
            <a href="https://github.com/Lyman17">
                <img src={gitHubIcon} alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/brianlyman/">
                <img src={linkedInIcon} alt="LinkedIn Icon" />
            </a>
            
        </div>
    );
}

export default Footer;