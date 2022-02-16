import React from 'react';
import { FooterContainer, FooterSubscription, FooterSubText, FooterSubHeading } from './Footer.elements';

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
                <FormInput>
                    
                </FormInput>
            </Form>
        </FooterSubscription>
    </FooterContainer>
  )
}

export default Footer;