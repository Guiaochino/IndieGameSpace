import React from 'react';
import { FooterContainer, SocialMedia, SocialMediaWrap,
    SocialLogo, WebsiteRights, SocialIcons, SocialIconLink,
    SocialIcon, FooterSubHeading, FooterSubText } from './Footer.elements';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterSubHeading>
            About Us
        </FooterSubHeading>
        <FooterSubText>
            Independent or indie game creators develop games along with a small team of game developers. 
            These teams usually do not have huge funding for game development unlike huge game companies.
            Some indie game creators choose to work on a project on their own however, indie game developers usually come in small teams.
            IndieGameSpace serves as a platform for indie video game developers to advertise their creations.
        </FooterSubText>

        <FooterSubText> &nbsp; </FooterSubText>

        <FooterSubText>
            The main purpose of this is to allow video game enthusiasts to create and view reviews about the featured video games on the website.
            Potential video game investors may also view the profile of various developers and the performance of their creations based on user reviews. 
        </FooterSubText>
    
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to="/">
                    <SocialIcon />
                        IndieGameSpace 
                </SocialLogo>
            </SocialMediaWrap>
        </SocialMedia>

        <SocialMedia>
            <SocialMediaWrap>
                <WebsiteRights>
                    © IndieGameSpace 2022
                </WebsiteRights>
            </SocialMediaWrap>
        </SocialMedia>

        <SocialMedia>
            <SocialMediaWrap>
                <SocialIcons>
                    <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Email" rel="noopener noreferrer">
                        <FaEnvelope />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
        
    </FooterContainer>
  )
}

export default Footer;