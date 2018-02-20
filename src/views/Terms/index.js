import React from "react";
import { Helmet } from "react-helmet";

import Section from "../../components/Section/Section";
import SectionTitle from "../../components/Section/SectionTile";



const TermsAndUse = () => (
      <div className="animated fadeIn">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Terms and Privacy | dev_hernandez2 Personal Website</title>
          <meta name="description" content="Hernandez2.com" />
        </Helmet>

        <Section
          backgroundColor="bg-section-color-white"
        >
          <SectionTitle
            title="Terms of use for site"
            textColor="title is-3 color-regular"
            topLineColor="top-primary"
          />

          <div className="row about-body">
           
            <p className="regular">
                 This website is managed by Hernandez2.
            </p>
            <p className="regular">
                By reading and using the site, you are agreeing to the following terms and conditions, and these take effect from the date of first use.
            </p>
            <p className="regular">
                 Any material featured on this site is subject to copyright protection, unless it’s otherwise indicated. You can’t reproduce any of this copyright protected material; when copyrighted items are being republished or copied to others, you must identify the source of the material and the copyright status. This permission does not cover any material on the site which is identified as copyright of a third party. You must gain permission from them to reproduce that content.
            </p>
            <p className="regular">
                We encourage users to create hypertext links to this site. You don’t have to ask permission to link directly to any pages hosted on this site. However, we don’t permit our pages to be loaded into frames on your site, any link should open the Hernandez2 website in the user’s entire tab/window.
            </p>
            <p className="regular">
                Certain links, including hypertext links, in our site will take you to external websites. These are provided for your convenience and inclusion of links does not imply that we endorse or approve the linked site, its operator, or content. We cannot guarantee that these links will work all of the time and we have no control over the availability of linked pages.
            </p>
            <p className="regular">
                 We make every effort to check and test material at all stages of production. It’s always wise for you to run an anti-virus program on any material downloaded from the internet. We can’t accept any responsibility for loss or damage to your data or computer system which may occur whilst using material from the Hernandez2 website.
            </p>
            <p className="regular">
                Any personal data collected through this website will be treated as confidential in line with the principles of the 39-2012 law.
            </p>
            <p className="regular">
                More information about how we handle the information we learn about you when you visit our site can be obtained in our privacy policy below.
            </p>
           
          </div>
        </Section>
        <Section
        backgroundColor="bg-section-color-white"
      >
        <SectionTitle
          title="Privacy notice"
          textColor="title is-3 color-regular"
          topLineColor="top-primary"
        />

        <div className="row about-body">
       
          <p className="regular">
              Hernandez2 may collect personal information from visitors to this site. This information is used only to respond to enquiries and to monitor site usage. E-mail addresses received as part of an enquiry are only retained as long as the individual solicits it, meaning the individual can opt-out or unsubscribe from any mailing at their disposal.
          </p>
          <p className="regular">
              Cookies and logging of IP addresses are used to enable Hernandez2 to monitor site traffic and repeat visitor statistics. These statistics will not include information that can be used to identify any individual. Such information is anonymous and held on a temporary basis.
          </p>
          <p className="regular">
              By submitting your data you consent to the use of that information as set out above.
          </p>
          <p className="regular">
              Where personal data is requested through forms (including contact forms), such data is only used for the purpose stated on the form and will not be given or sold to any third parties.
          </p>
          <p className="regular">
              This privacy policy only covers this Hernandez2 website – websites linked to from this site are not covered by this policy.
          </p>
          <p className="regular">
              Hernandez2 will at all times comply with the requirements of the 39-2012 law.
          </p>
        </div>
      </Section>
      </div>
    )

export default TermsAndUse
