import React from 'react';
import fluride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: teeth
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h2 className='text-primary uppercase text-xl'>Our Services</h2>
                 <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    servicesData.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;