import React, { Component } from "react";

class Terms extends Component {
  render() {
    const listGroupPosition = {
      position: "absolute",
      left: "150px",
      top: "10",
      width: "250px",
      zIndex: "1"
    };

    const textPosition = {
      marginLeft: "250px"
    };

    // const linkStyle = {
    //   color: "#9A0000",
    //   backgroundColor: "#FFFFFF",
    //   borderColor: "#9A0000"
    // };

    return (
      <React.Fragment>
        <div
          id="list-example"
          className="list-group-mine"
          style={listGroupPosition}
        >
          <a
            className="list-group-item list-group-item-action"
            href="#list-item-1"
          >
            Agreement to Terms
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#list-item-2"
          >
            Intellectual Property Rights
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#list-item-3"
          >
            User Representations
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#list-item-4"
          >
            Prohibited Activities
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#list-item-5"
          >
            Mobile Application License
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#list-item-6"
          >
            Disclaimer
          </a>
        </div>
        <div
          data-spy="scroll"
          data-target="#list-example"
          data-offset="0"
          className="scrollspy-example"
          style={textPosition}
        >
          <h9>Last Updated: April 14, 2019</h9>
          <h4 id="list-item-1" style={{ color: "#9A0000" }}>
            Agreement to Terms
          </h4>
          <p>
            These Terms of Use constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity (“you”)
            and GrocerE (“we,” “us” or “our”), concerning your access to and use
            of the heroku.grocereapp.com website as well as any other media
            form, media channel, mobile website or mobile application related,
            linked, or otherwise connected thereto (collectively, the “Site”).
            You agree that by accessing the Site, you have read, understood, and
            agree to be bound by all of these Terms of Use. If you do not agree
            with all of these Terms of Use, then you are expressly prohibited
            from using the Site and you must discontinue use immediately.
            Supplemental terms and conditions or documents that may be posted on
            the Site from time to time are hereby expressly incorporated herein
            by reference. We reserve the right, in our sole discretion, to make
            changes or modifications to these Terms of Use at any time and for
            any reason. We will alert you about any changes by updating the
            “Last updated” date of these Terms of Use, and you waive any right
            to receive specific notice of each such change. It is your
            responsibility to periodically review these Terms of Use to stay
            informed of updates. You will be subject to, and will be deemed to
            have been made aware of and to have accepted, the changes in any
            revised Terms of Use by your continued use of the Site after the
            date such revised Terms of Use are posted. The information provided
            on the Site is not intended for distribution to or use by any person
            or entity in any jurisdiction or country where such distribution or
            use would be contrary to law or regulation or which would subject us
            to any registration requirement within such jurisdiction or country.
            Accordingly, those persons who choose to access the Site from other
            locations do so on their own initiative and are solely responsible
            for compliance with local laws, if and to the extent local laws are
            applicable. Option 1: The Site is intended for users who are at
            least 18 years old. Persons under the age of 18 are not permitted to
            register for the Site. Option 2: [The Site is intended for users who
            are at least 13 years of age.] All users who are minors in the
            jurisdiction in which they reside (generally under the age of 18)
            must have the permission of, and be directly supervised by, their
            parent or guardian to use the Site. If you are a minor, you must
            have your parent or guardian read and agree to these Terms of Use
            prior to you using the Site.
          </p>
          <h4 id="list-item-2" style={{ color: "#9A0000" }}>
            Intellectual Property Rights
          </h4>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and
            all source code, databases, functionality, software, website
            designs, audio, video, text, photographs, and graphics on the Site
            (collectively, the “Content”) and the trademarks, service marks, and
            logos contained therein (the “Marks”) are owned or controlled by us
            or licensed to us, and are protected by copyright and trademark laws
            and various other intellectual property rights and unfair
            competition laws of the United States, foreign jurisdictions, and
            international conventions. The Content and the Marks are provided on
            the Site “AS IS” for your information and personal use only. Except
            as expressly provided in these Terms of Use, no part of the Site and
            no Content or Marks may be copied, reproduced, aggregated,
            republished, uploaded, posted, publicly displayed, encoded,
            translated, transmitted, distributed, sold, licensed, or otherwise
            exploited for any commercial purpose whatsoever, without our express
            prior written permission. Provided that you are eligible to use the
            Site, you are granted a limited license to access and use the Site
            and to download or print a copy of any portion of the Content to
            which you have properly gained access solely for your personal,
            non-commercial use. We reserve all rights not expressly granted to
            you in and to the Site, the Content and the Marks.
          </p>
          <h4 id="list-item-3" style={{ color: "#9A0000" }}>
            User Representations
          </h4>
          <p>
            By using the Site, you represent and warrant that: [(1) all
            registration information you submit will be true, accurate, current,
            and complete; (2) you will maintain the accuracy of such information
            and promptly update such registration information as necessary;] (3)
            you have the legal capacity and you agree to comply with these Terms
            of Use; [(4) you are not under the age of 13;] (5) not a minor in
            the jurisdiction in which you reside[, or if a minor, you have
            received parental permission to use the Site]; (6) you will not
            access the Site through automated or non-human means, whether
            through a bot, script, or otherwise; (7) you will not use the Site
            for any illegal or unauthorized purpose; (8) your use of the Site
            will not violate any applicable law or regulation. If you provide
            any information that is untrue, inaccurate, not current, or
            incomplete, we have the right to suspend or terminate your account
            and refuse any and all current or future use of the Site (or any
            portion thereof).
          </p>
          <h4 id="list-item-4" style={{ color: "#9A0000" }}>
            Prohibited Activities
          </h4>
          <p>
            You may not access or use the Site for any purpose other than that
            for which we make the Site available. The Site may not be used in
            connection with any commercial endeavors except those that are
            specifically endorsed or approved by us. As a user of the Site, you
            agree not to: 1. systematically retrieve data or other content from
            the Site to create or compile, directly or indirectly, a collection,
            compilation, database, or directory without written permission from
            us. 2. make any unauthorized use of the Site, including collecting
            usernames and/or email addresses of users by electronic or other
            means for the purpose of sending unsolicited email, or creating user
            accounts by automated means or under false pretenses. 3. use a
            buying agent or purchasing agent to make purchases on the Site. 4.
            use the Site to advertise or offer to sell goods and services. 5.
            circumvent, disable, or otherwise interfere with security-related
            features of the Site, including features that prevent or restrict
            the use or copying of any Content or enforce limitations on the use
            of the Site and/or the Content contained therein. 6. engage in
            unauthorized framing of or linking to the Site. 7. trick, defraud,
            or mislead us and other users, especially in any attempt to learn
            sensitive account information such as user passwords; 8. make
            improper use of our support services or submit false reports of
            abuse or misconduct. 9. engage in any automated use of the system,
            such as using scripts to send comments or messages, or using any
            data mining, robots, or similar data gathering and extraction tools.
            10. interfere with, disrupt, or create an undue burden on the Site
            or the networks or services connected to the Site. 11. attempt to
            impersonate another user or person or use the username of another
            user. 12. sell or otherwise transfer your profile. 13. use any
            information obtained from the Site in order to harass, abuse, or
            harm another person. 14. use the Site as part of any effort to
            compete with us or otherwise use the Site and/or the Content for any
            revenue-generating endeavor or commercial enterprise. 15. decipher,
            decompile, disassemble, or reverse engineer any of the software
            comprising or in any way making up a part of the Site. 16. attempt
            to bypass any measures of the Site designed to prevent or restrict
            access to the Site, or any portion of the Site. 17. harass, annoy,
            intimidate, or threaten any of our employees or agents engaged in
            providing any portion of the Site to you. 18. delete the copyright
            or other proprietary rights notice from any Content. 19. copy or
            adapt the Site’s software, including but not limited to Flash, PHP,
            HTML, JavaScript, or other code. 20. upload or transmit (or attempt
            to upload or to transmit) viruses, Trojan horses, or other material,
            including excessive use of capital letters and spamming (continuous
            posting of repetitive text), that interferes with any party’s
            uninterrupted use and enjoyment of the Site or modifies, impairs,
            disrupts, alters, or interferes with the use, features, functions,
            operation, or maintenance of the Site. 21. upload or transmit (or
            attempt to upload or to transmit) any material that acts as a
            passive or active information collection or transmission mechanism,
            including without limitation, clear graphics interchange formats
            (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices
            (sometimes referred to as “spyware” or “passive collection
            mechanisms” or “pcms”). 22. except as may be the result of standard
            search engine or Internet browser usage, use, launch, develop, or
            distribute any automated system, including without limitation, any
            spider, robot, cheat utility, scraper, or offline reader that
            accesses the Site, or using or launching any unauthorized script or
            other software. 23. disparage, tarnish, or otherwise harm, in our
            opinion, us and/or the Site. 24. use the Site in a manner
            inconsistent with any applicable laws or regulations.
          </p>
          <h4 id="list-item-5" style={{ color: "#9A0000" }}>
            Mobile Application License
          </h4>
          <p>
            Use License If you access the Site via a mobile application, then we
            grant you a revocable, non-exclusive, non-transferable, limited
            right to install and use the mobile application on wireless
            electronic devices owned or controlled by you, and to access and use
            the mobile application on such devices strictly in accordance with
            the terms and conditions of this mobile application license
            contained in these Terms of Use. You shall not: (1) decompile,
            reverse engineer, disassemble, attempt to derive the source code of,
            or decrypt the application; (2) make any modification, adaptation,
            improvement, enhancement, translation, or derivative work from the
            application; (3) violate any applicable laws, rules, or regulations
            in connection with your access or use of the application; (4)
            remove, alter, or obscure any proprietary notice (including any
            notice of copyright or trademark) posted by us or the licensors of
            the application; (5) use the application for any revenue generating
            endeavor, commercial enterprise, or other purpose for which it is
            not designed or intended; (6) make the application available over a
            network or other environment permitting access or use by multiple
            devices or users at the same time; (7) use the application for
            creating a product, service, or software that is, directly or
            indirectly, competitive with or in any way a substitute for the
            application; (8) use the application to send automated queries to
            any website or to send any unsolicited commercial e-mail; (9) use
            any proprietary information or any of our interfaces or our other
            intellectual property in the design, development, manufacture,
            licensing, or distribution of any applications, accessories, or
            devices for use with the application
          </p>
          <h4 id="list-item-6" style={{ color: "#9A0000" }}>
            Disclaimer
          </h4>
          <p>
            The site is provided on an as-is and as-available basis. You agree
            that your use of the site and our services will be at your sole
            risk. To the fullest extent permitted by law, we disclaim all
            warranties, express or implied, in connection with the site and your
            use thereof, including, without limitation, the implied warranties
            of merchantability, fitness for a particular purpose, and
            non-infringement. We make no warranties or representations about the
            accuracy or completeness of the site’s content or the content of any
            websites linked to the site and we will assume no liability or
            responsibility for any (1) errors, mistakes, or inaccuracies of
            content and materials, (2) personal injury or property damage, of
            any nature whatsoever, resulting from your access to and use of the
            site, (3) any unauthorized access to or use of our secure servers
            and/or any and all personal information and/or financial information
            stored therein, (4) any interruption or cessation of transmission to
            or from the site, (5) any bugs, viruses, trojan horses, or the like
            which may be transmitted to or through the site by any third party,
            and/or (6) any errors or omissions in any content and materials or
            for any loss or damage of any kind incurred as a result of the use
            of any content posted, transmitted, or otherwise made available via
            the site. We do not warrant, endorse, guarantee, or assume
            responsibility for any product or service advertised or offered by a
            third party through the site, any hyperlinked website, or any
            website or mobile application featured in any banner or other
            advertising, and we will not be a party to or in any way be
            responsible for monitoring any transaction between you and any
            third-party providers of products or services. As with the purchase
            of a product or service through any medium or in any environment,
            you should use your best judgment and exercise caution where
            appropriate.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Terms;
