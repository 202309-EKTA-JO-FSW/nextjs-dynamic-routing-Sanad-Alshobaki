import Link from 'next/link';
import React, { useState, useEffect } from 'react'

const ALL_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

function fetchAllPosts() {
    return fetch(ALL_POSTS_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok (${response.status})`);
            }
            return response.json();
        });
}

function index() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchAllPosts()
            .then(data => {
                setPosts(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, []);

    return (
        <div>
            {posts.map(post => (
                <div style={{ margin: '10px', border: '1px solid white', textAlign: 'center' }}>
                    <Link key={post.id} href={`/posts/${encodeURIComponent(post.id)}`}>

                        <h2 style={{ padding: '10px' }}><span style={{ color: 'green' }}>{post.id}- </span>{post.title}</h2>
                    </Link>
                </div>

            ))}
        </div>
    )
}

export default index
