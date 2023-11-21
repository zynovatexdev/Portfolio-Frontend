import React from 'react'
import { PrivacyInfoCon, Conternar, Btto, BtStyle1, BtStyle2 } from "../../../styles/pages/Conditions";



const ConditionInfo = () => {


    const handleDecline = () => {

        console.log("User declined.");
    };


    const handleAgree = () => {

        console.log("User agreed.");
    };

    return (
        <div>
            <PrivacyInfoCon>
                <Conternar>
                    <h5>Welcome to Zynovatex!</h5>
                    <p> These terms and conditions outline the rules and regulations for the use of Zynovatex Website, located at Website.com. By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.
                        The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                    </p>
                    <h5>Cookies</h5>
                    <p>We employ the use of cookies. By accessing Website Name, you agreed to use cookies in agreement with the Company Name's Privacy Policy.
                        Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                    </p>
                    <h5>License</h5>
                    <p>Unless otherwise stated, Company Name and/or its license own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>
                    <p>
                        You must not:
                    </p>
                    <ul>
                        <li>Republish material from Website Name</li>
                        <li>Sell, rent or sub-license material from Website Name</li>
                        <li>Reproduce, duplicate or copy material from Website Name</li>
                        <li>Redistribute content from Website Name</li>
                    </ul>
                    <Btto>
                        <BtStyle1 onClick={handleDecline}>Decline</BtStyle1>
                        <BtStyle2 onClick={handleAgree}>Agree</BtStyle2>
                    </Btto>
                </Conternar>

            </PrivacyInfoCon>
        </div>
    )
}

export default ConditionInfo