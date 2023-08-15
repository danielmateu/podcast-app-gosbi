import Image from 'next/image'
import React from 'react'
import 'animate.css';

export const Sidebar = ({ podcastData }) => {

    return (
        <div className='shadow-lg hover:shadow-md flex flex-col text-start rounded-xl p-2 m-2 md:w-4/12 h-fit transition-all'>
            {podcastData && (
                <>
                    <Image
                        src={podcastData.results[0].artworkUrl600}
                        alt={`${podcastData.results[0].collectionName} - ${podcastData.results[0].trackName}`}
                        width={200}
                        height={200}
                        className='p-6 m-auto animate__animated animate__fadeIn'
                    />
                    <hr />
                    <div className='text-start py-4 px-2'>
                        <p className='font-semibold text-gray-600'>{podcastData.results[0].collectionName}</p>
                        <p className='text-gray-400'>by {podcastData.results[0].artistName}</p>
                    </div>
                    <hr />
                    <div className='text-start py-4 px-2'>
                        <p className='font-semibold text-gray-600'>Description:</p>
                        <p className='text-gray-400'>{podcastData.results[0].genres}</p>
                    </div>
                </>
            )}
        </div>
    )
}
