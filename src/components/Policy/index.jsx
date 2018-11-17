import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import {Header,Container, Icon} from 'semantic-ui-react'

class Content extends Component {
  render() {
    return (
      <Container>
        <Container textAlign='center'>
          <Header as='h2' color='red'><u><b>Privacy Policy<Icon name='bookmark'/></b></u></Header><br/>
        </Container>
        <p>
        <b style={{textDecoration:"underline"}}>1. INTRODUCTION.</b><br/><br/>
        <p>1.1 Welcome to the Tea Kingdom platform run by Tea Kingdom Limited and its affiliates and affiliates 
        (individually and collectively, "Tea Kingdom", "we", "us" or "our"). 
        Tea Kingdom takes its responsibilities under applicable privacy laws and regulations ("Privacy Laws") seriously 
        and is committed to respecting the privacy rights and concerns of all Users of our Tea Kingdom website (the "Site") 
        (we refer to the Site and the services we provide as described in our Site collectively as the "Services"). 
        We recognize the importance of the personal data you have entrusted to us and believe that it is our responsibility 
        to properly manage, protect and process your personal data. This Privacy Policy (“Privacy Policy” or “Policy”) is 
        designed to assist you in understanding how we collect, use, disclose and/or process the personal data you have 
        provided to us and/or we possess about you, whether now or in the future, as well as to assist you in making an 
        informed decision before providing us with any of your personal data. Please read this Privacy Policy carefully. 
        If you have any questions regarding this information or our privacy practices, please see the section entitled "Questions, 
        Concerns or Complaints? Contact Us" at the end of this Privacy Policy.<br/><br/>
        </p>
        1.2 "Personal Data" or "personal data" means data, whether true or not, about an individual who can be identified 
        from that data, or from that data and other information to which an organisation has or is likely to have access. 
        Common examples of personal data could include name, identification number and contact information.<br/><br/>

        1.3 By using the Services, registering for an account with us, visiting our website, or accessing the Services, 
        you acknowledge and agree that you accept the practices, requirements, and/or policies outlined in this Privacy Policy, 
        and you hereby consent to us collecting, using, disclosing and/or processing your personal data as described herein. 
        IF YOU DO NOT CONSENT TO THE PROCESSING OF YOUR PERSONAL DATA AS DESCRIBED IN THIS PRIVACY POLICY, PLEASE DO NOT USE OUR 
        SERVICES OR ACCESS OUR WEBSITE. If we change our Privacy Policy, we will post those changes or the amended Privacy Policy 
        on our website. We reserve the right to amend this Privacy Policy at any time.<br/>
        </p>

        <p>
        <b style={{textDecoration:"underline"}}>2. WHEN WILL TEA KINGDOM COLLECT PERSONAL DATA?</b><br/><br/>
        2.1 We will/may collect personal data about you:<br/><br/>
        <p style={{marginLeft:"20px"}}>(a) when you register and/or use our Services or Site, or open an account with us;<br/><br/>
        (b) when you submit any form, including, but not limited to,
        application forms or other forms relating to any of our products and services, 
        whether online or by way of a physical form;<br/><br/>
        (c) when you enter into any agreement or provide other documentation or information in 
        respect of your interactions with us, or when you use our products and services;<br/><br/>
        (d) when you interact with us, such as via telephone calls (which may be recorded), 
        letters, fax, face-to-face meetings, social media platforms and emails;<br/><br/>
        (e) when you use our electronic services, or interact with us via our application 
        or use services on our website. This includes, without limitation, 
        through cookies which we may deploy when you interact with our application or website;<br/><br/>
        (f) when you carry out transactions through our Services;<br/><br/>
        (g) when you provide us with feedback or complaints;<br/><br/>
        (h) when you register for a contest; or<br/><br/>
        (i) when you submit your personal data to us for any reason.
        </p>
        The above does not purport to be exhaustive and sets out some common instances 
        of when personal data about you may be collected.<br/><br/>
        2.2 When you visit, use or interact with our mobile application or the Site,<br/> 
        we may collect certain information by automated or passive means using a variety of 
        technologies, which technologies may be downloaded to your device and may set 
        or modify settings on your device. The information we collect may include, 
        without limitation, your Internet Protocol (IP) address, computer/mobile device 
        operating system and browser type, type of mobile device, the characteristics of 
        the mobile device, the unique device identifier (UDID) or mobile 
        equipment identifier (MEID) for your mobile device, the address of 
        a referring web site (if any), and the pages you visit on our website and mobile 
        applications and the times of visit. We may collect, use disclose and/or process 
        this information only for the Purposes (defined below).<br/><br/>
        2.3 Our mobile applications may collect precise information about the location 
        of your mobile device using technologies such as GPS, Wi-Fi, etc.. We collect, use, 
        disclose and/or process this information for one or more Purposes including, without 
        limitation, location-based services that you request or to deliver relevant 
        content to you based on your location or to allow you to share your location 
        to other Users as part of the services under our mobile applications. 
        For most mobile devices, you are able to withdraw your permission for us 
        to acquire this information on your location through your device settings. 
        If you have questions about how to disable your mobile device's location services, 
        please contact your mobile device service provider or the device manufacturer.
        </p>

        <p>
        <b style={{textDecoration:"underline"}}>3. WHAT PERSONAL DATA WILL TEA KINGDOM COLLECT?</b><br/><br/>
        3.1 The personal data that Tea Kingdom may collect includes but is not limited to:<br/><br/>
        <p style={{marginLeft:"20px"}}>• name;<br/><br/>
        • email address;<br/><br/>
        • date of birth;<br/><br/>
        • billing address;<br/><br/>
        • bank account and payment information;<br/><br/>
        • telephone number;<br/><br/>
        • gender;<br/><br/>
        • any other information about the User when the User signs up to use our Services or website,
        and when the User uses the Services or website, as well as information related to how the User uses 
        our Services or website; and<br/><br/>
        • aggregate data on content the User engages with.<br/><br/>
        </p>
        3.2 If you do not want us to collect the aforementioned information/personal data, 
        you may opt out at any time by notifying our Data Protection Officer in writing about it. 
        Further information on opting out can be found in the section below entitled 
        "How can you opt-out, remove, request access to or modify information you have provided to us?" . 
        Note, however, that opting out of us collecting your personal data or withdrawing your consent 
        for us to collect, use or process your personal data may affect your use of the Services. 
        For example, opting out of the collection of location information will cause its location-based 
        features to be disabled.
        </p>

      </Container>
   
    );
  }
}

export default class Policy extends Component {
  render() {
    return (
      <TemplateTKD>
        <Content />
      </TemplateTKD>
    );
  }
}