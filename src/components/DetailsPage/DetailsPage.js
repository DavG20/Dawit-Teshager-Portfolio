import React from 'react';
import {FiX, FiGithub, FiArrowRightCircle} from "react-icons/fi";

function DetailsPage({onClose, workData}) {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 w-full min-h-screen p-3 md:p-10 text-darker-2'>
            <div className="flex flex-col h-full w-full bg-white rounded-xl p-6">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-2 items-center px-2">
                        <div className="text-black text-lg md:text-2xl font-bold font-space-grotesk">
                            {workData.name}
                        </div>
                        <div className="hidden md:flex text-black text-md md:text-xl font-space-grotesk">
                        | {workData.title}
                        </div>
                    </div>
                    <button onClick={onClose} className='p-2 rounded-full bg-red-400 hover:scale-105'>
                        <FiX className='text-lg md:text-xl text-white'/>
                    </button>
                </div>

                <div className="flex flex-col gap-1 bg-white p-1 md:p-3 group-hover:translate-y-4 duration-200">
                    <div className="flex flex-row gap-2 w-full mb-2">
                        <img src={require(`../../asset/works/${workData.image}`)} alt="project" className="w-full md:w-1/2 xl:w-1/3 h-full object-contain rounded-lg" />
                        <img src={require(`../../asset/works/${workData.image}`)} alt="project" className="w-1/2 xl:w-1/3 h-full object-contain rounded-lg hidden md:flex" />
                    </div>
                    <div className="flex flex-col">
                        {/* <div className="text-black text-xl md:text-3xl font-bold font-space-grotesk">
                            {workData.name}
                        </div> */}
                        <div className="text-black text-md md:text-xl font-space-grotesk font-medium">
                            {workData.title}
                        </div>
                        <div className="w-0 group-hover:w-full duration-500 h-0.5 bg-red-400 hidden md:flex"></div>
                    </div>
                    <div className="flex flex-row">
                        <div className="px-4 py-1 rounded-full bg-slate-100">
                            <div className="text-base text-darker-1 font-medium">
                                {workData.from} - {workData.to}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-row items-start gap-4">
                        {workData.details}  
                    </div>
                    <div className="flex md:hidden flex-row items-start gap-4">
                        {workData.desc}  
                    </div>

                    <div className="text-base md:text-lg font-bold text-darker-2 font-roboto mt-2">
                        Techs Used:
                    </div>

                    <div className="flex flex-row gap-5 my-2">
                        {workData.tech_icons.map((tech) => {
                            return (
                                <img src={tech} title="React" alt="React" width="30" height="30"/>
                            );
                        })}

                    </div>

                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col gap-1">
                            <div className="text-base md:text-lg font-bold text-darker-2 font-roboto mt-2">
                                Additional Techs Used:
                            </div>

                            <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
                                {workData.techs.map((tech, index) => {
                                return (
                                    <div className="font-mono"> {tech} {index!==workData.techs.length-1 && " | "} </div>
                                    );
                                })}

                            </div>
                        </div>
                        <div className="flex gap-4 duration-200 mt-6 justify-end">
                            <a href={workData.source} className="group hover:scale-110 flex justify-end items-center gap-2 duration-200">
                                <FiGithub className='text-2xl text-red-400'/>
                            </a>

                            <a href={workData.link} className="flex hover:scale-125 justify-end items-center gap-2 duration-200">
                                <FiArrowRightCircle className='text-2xl text-red-400'/>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DetailsPage;