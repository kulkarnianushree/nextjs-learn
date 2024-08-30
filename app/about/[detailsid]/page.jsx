'use client'  // Add this directive at the top

import React from 'react'
import { useParams } from 'next/navigation'

const Details = () => {
    const details = [
        { id: 1, name: 'Yash', role: 'Senior Developer' },
        { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
        { id: 3, name: 'Suresh', role: 'Frontend Developer' }
    ]

    const params = useParams()
    const detailsid = params.detailsid
    // Find the detail that matches the id from the URL
    const person = details.find(list => list.id === parseInt(detailsid))

    return (
        <div>
            {person ? (
                <div>
                    <h2>Name: {person.name}</h2>
                    <p>Role: {person.role}</p>
                </div>
            ) : (
                <p>No data found</p>
            )}
        </div>
    )
}

export default Details
