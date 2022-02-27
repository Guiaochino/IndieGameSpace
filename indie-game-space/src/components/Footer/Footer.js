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
                content here content here content here content here content here content here 
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