import React, { useState } from 'react';
import '../App.css';
import BlogPost from './BlogPost';

function Blog() {

  let blogPostContent = [
                    {title: "This pillow is a great deal",
                     contents: "It's comfortable and affordable and you will like it so you should consider buying it.",
                     link: "https://amzn.to/4ffX9wP"},
                    ];

  return (
    <>
      <div>
        <article>
            <div className="w-full">
                <ul className="space-y-4">
                    {blogPostContent.map((post, index) => (
                            <li key={index} className="w-full">
                                <BlogPost
                                    title={post.title}
                                    link={post.link}
                                    contents={post. contents}
                                    className="w-full bg-white p-4 rounded shadow pillow-text"/>
                            </li>
                    ))}
                </ul>
          </div>
        </article>
      </div>
    </>
  )
}

export default Blog;
