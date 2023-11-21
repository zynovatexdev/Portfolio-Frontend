import React from 'react'
import { NextPrevious } from "../../../styles/pages/projects";
import { NpButton } from '../../../styles/components/button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const ProjectBt = () => {
    const handleNext = () => {

        console.log("Goto Next.");
    };


    const handlePrevious = () => {

        console.log("User Goto Previous.");
    };
    return (
        <div>
            <NextPrevious>
                <NpButton onClick={handlePrevious}>
                    <KeyboardBackspaceIcon />
                    Previous Page
                </NpButton>
                <NpButton onClick={handleNext}>
                    Next Page
                    <ArrowRightAltIcon />
                </NpButton>
            </NextPrevious>
        </div>
    );
};


export default ProjectBt