import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"


const blogs = [
    { date: "2022-01-01", title: "Blog 1", tags: ['AI/ML', 'Sports'] },
    { date: "2022-01-02", title: "Blog 2", tags: ['AI/ML', 'Sports'] },
    { date: "2022-01-03", title: "Blog 3", tags: ['AI/ML', 'Sports'] },
]

export default function BlogTable() {
    return (
        <Table className='mt-3'>
            {/* <TableHeader>
                <TableRow align="center">
                    <TableHead align="center">title</TableHead>
                    <TableHead align="center">date</TableHead>
                    <TableHead align="center">tags</TableHead>
                </TableRow>
            </TableHeader> */}

            <TableBody>
                {blogs.map((blog, index) => (
                    <Link href={`/blog/${blog.title}`} legacyBehavior passHref>
                        <TableRow key={index}>
                            <TableCell align="center">
                                {blog.title}
                            </TableCell>
                            <TableCell align="center">{blog.date}</TableCell>
                            <TableCell align="center">
                                {blog.tags.map((tag, index) => (
                                    <Badge key={index}>{tag}</Badge>
                                ))}
                            </TableCell>
                        </TableRow>
                    </Link>
                ))}
            </TableBody>
        </Table>
    )
}
