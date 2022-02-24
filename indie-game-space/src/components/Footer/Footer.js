import React from 'react';
import { Button } from '../../globalStyles';
import { FooterContainer, FooterSubscription, FooterSubText, 
    FooterSubHeading, Form, FormInput, FooterLinksContainer, 
    FooterLinksItems, FooterLinksWrapper, FooterLink,
    FooterLinksTitle, SocialMedia, SocialMediaWrap,
    SocialLogo, WebsiteRights, SocialIcons, SocialIconLink,
    SocialIcon } from './Footer.elements';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterSubscription>
            footer content
            <FooterSubHeading>
                content here
            </FooterSubHeading>
            <FooterSubText>
                content here
            </FooterSubText>
            <Form>
                <FormInput name="email" type="email" placeholder="Your Email" />
                    <Button fontBig> Subscribe </Button>
            </Form>
        </FooterSubscription>

        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinksTitle>About Us</FooterLinksTitle>
                    <FooterLink to='/'> About Us Content Here </FooterLink> 
                </FooterLinksItems>

                <FooterLinksItems>
                    <FooterLinksTitle>Contact Us</FooterLinksTitle>
                    <FooterLink to='/'> Email </FooterLink> 
                </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinksTitle>Videos</FooterLinksTitle>
                    <FooterLink to='/'> Game Demos </FooterLink> 
                    <FooterLink to='/'> Streamer Gameplays </FooterLink> 
                </FooterLinksItems>

                <FooterLinksItems>
                    <FooterLinksTitle>Social Media</FooterLinksTitle>
                    <FooterLink to='/'> Facebook </FooterLink>
                    <FooterLink to='/'> Twitter </FooterLink>
                    <FooterLink to='/'> Instagram </FooterLink>
                </FooterLinksItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to="/">
                    <SocialIcon />
                        IndieGameSpace
                </SocialLogo>
                <WebsiteRights>
                    © IndieGameSpace 2022
                </WebsiteRights>
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
                    
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  )
}

export default Footer;