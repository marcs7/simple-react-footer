import React from "react";
import PropTypes from "prop-types";
import "./Footer.sass";
import {ImFacebook2} from "react-icons/im";
import {FaTwitterSquare} from "react-icons/fa"
import {ImInstagram} from "react-icons/im";
import {ImLinkedin} from "react-icons/im";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description,
            socialMedia: this.props.socialMedia,
            resourcesName: this.props.resourcesName,
            resources: this.props.resources,
            copyright: this.props.copyright
        }
    }
	render() {
		return (
            <div className="footer-container">

                <div className="first-row">

                    <div className="col-about">
                        <div>
                            <div className="titles">About</div>
                            <div className="description">{this.state.description}</div>
                        </div>
                    </div>

                    <div>
                        <div className="titles">{this.state.resourcesName}</div>
                        {this.state.resources.map(resource => (
                            <div key={resource.id}>
                                <a href="#" target="_blank" className="resources">{resource}</a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="social-media-col col">
                    <div className="titles">Stay connected:</div>
                    <div className="social-media">
                        <a href="#" target="_blank" className="socialMediaLogo"><ImFacebook2 color="black" size={25}/> </a>
                        <a href="#" target="_blank" className="socialMediaLogo"><FaTwitterSquare color="black"size={25}/> </a>
                        <a href="#" target="_blank" className="socialMediaLogo"><ImInstagram color="black" size={25}/> </a>
                        <a href="#" target="_blank" className="socialMediaLogo"><ImLinkedin color="black" size={25}/> </a>
                    </div>
                </div>

                <div>
                    <div className="copyright">Copyright &copy; {this.state.copyright}</div>
                </div>
            </div>
        )
	}
}

Footer.propTypes = {
    description: PropTypes.string,
    socialMedia: PropTypes.arrayOf(
        PropTypes.shape({
            socialMedianame: PropTypes.string,
            socialMediaUrl: PropTypes.string
        })
    ),
    resourcesName: PropTypes.string,
    resources: PropTypes.arrayOf(PropTypes.string),
    copyright: PropTypes.string
};

export default Footer;