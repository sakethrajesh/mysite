import React from 'react'
import Markdown from "markdown-to-jsx"

function page({ params }) {

    return (
        <div>
            <h1>{params.slug}</h1>
            
            <Markdown>
                {/* Your markdown content goes here */}
            </Markdown>
        </div>
    )
}

export default page
