import React from 'react'
import { HomeTopCon, Topic, Dtl } from "../../../styles/pages/Home";
import ContactBt from '../../common/Button';


const HomeTop = () => {
    return (
        <HomeTopCon >
            <Topic>
                Empowering your business with customer-centric IT
            </Topic>
            <Dtl>
                Better IT Solutions, Better Business,Zynovatex
            </Dtl>
            <ContactBt label="Contact Us" />
        </HomeTopCon>
    )
}

export default HomeTop