import React from 'react';

interface ProjectProps {
    title?: string,
    description?: string,
    imageUrl?: string
}




function Project({
    title = "Project",
    description = "No description for now!",
    imageUrl = undefined
}: ProjectProps) {
   
    return <div className='flex flex-row  h-56 hover:border'>
        <img className='w-52 h-52 ml-10 rounded-2xl' src={imageUrl}></img>
        <div className='flex flex-col w-full align-end'>
        <h1 className='font-bold self-center'>{title}</h1>
        <p className='self-center'>{description}</p>
        </div>
    </div>;
}

export default Project;
