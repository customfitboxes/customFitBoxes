import { getImg } from '@/services/descriptionService'
import moment from 'moment'
import React from 'react'

const BlogAuthor = ({props, newLine}:any) => {
    return (
        <>
            <div className="flex items-center gap-x-3 my-5">
                <img
                    src={getImg(props.blog.userImage).url}
                    alt={getImg(props.blog.userImage).alt}
                    className="h-8 w-8 rounded-full object-cover"
                />
                <p className="text-[10px] sm:text-xs">
                    {props.blog.username}, {newLine && <br/>} Last Updated:{" "}
                    {moment(props.blog.date).format("MMM DD, YYYY")}
                </p>
            </div>
        </>
    )
}

export default BlogAuthor