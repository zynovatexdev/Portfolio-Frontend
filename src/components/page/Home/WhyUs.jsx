import React from 'react'
import { WhyUsMainCon, MassageMainCon, MassageTopicmob, WhyUsInfo, WhyUsTopic, WhyUsDtl, Massages, MassageTopic, MassageDtl } from "../../../styles/pages/Home";
import DownMenu from './DownMenu';


const WhyUs = () => {
    return (
        <WhyUsMainCon>
            <WhyUsInfo>
                <WhyUsTopic>Why Us</WhyUsTopic>
                <WhyUsDtl>
                    Our dedication to customer satisfaction has earned us a reputation for
                    providing top-notch solutions tailored to meet the unique needs of each client.
                </WhyUsDtl>
            </WhyUsInfo>
            <MassageMainCon>
                <Massages>
                    <MassageTopicmob>Expertise an Experience  </MassageTopicmob>
                    <MassageTopic>Expertise an Experience </MassageTopic>
                    <MassageDtl>
                        With over 6 years of experience, we have honed our skills
                        and knowledge in our field. Our team consists of experienced
                        professionals
                        who are experts in their respective domains.
                    </MassageDtl>
                </Massages>
                <Massages>
                    <MassageTopic>Customer Satisfaction </MassageTopic>
                    <MassageDtl>
                        Customer satisfaction is our top priority. We go the extra
                        mile to understand our clients' needs and deliver solutions
                        that exceed their expectations.
                        We value long-term relationships with our clients
                    </MassageDtl>
                    <MassageTopicmob>Customer Satisfaction </MassageTopicmob>

                </Massages>
                <Massages>
                    <MassageTopicmob>Timely Delivery </MassageTopicmob>
                    <MassageTopic>Tailored Solutions </MassageTopic>
                    <MassageDtl>
                        We understand that each client is unique, and we believe in
                        providing customized solutions to meet their specific
                        requirements. We works closely with clients to understand
                        their goals and then crafts
                        solutions that are tailored to their needs.
                    </MassageDtl>

                </Massages>
                <Massages>
                    <MassageTopic>Timely Delivery </MassageTopic>
                    <MassageDtl>
                        We understand the importance of timely delivery
                        Our team is committed to delivering projects within
                        the agreed-upon
                        timelines, without compromising on quality.
                    </MassageDtl>
                    <MassageTopicmob>Timely Delivery </MassageTopicmob>


                </Massages>

            </MassageMainCon>
            <WhyUsInfo>
                <WhyUsTopic>We work smartly with our clients</WhyUsTopic>
                <WhyUsDtl>
                    We guarantee 100% customer satisfaction because we work
                    smartly with our clients.We believe in collective exchange
                    of ideas, in which you can request and decide with us,
                    exactly what
                    you want your website or app to look like and offer.
                </WhyUsDtl>
            </WhyUsInfo>
            <DownMenu />
        </WhyUsMainCon>
    )
}

export default WhyUs