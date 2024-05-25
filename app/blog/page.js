import React from 'react'
import BlogTable from "@/components/blogTable";

function page() {
    return (
        <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-3 mb-4">blogs</h1>
            <BlogTable />
        </div>
    )
}

export default page