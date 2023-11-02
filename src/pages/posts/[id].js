
export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking', // Generate pages on-demand
    };
}

export async function getStaticProps({ params }) {
    const { id } = params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    return { props: { post } }
}

export default function Page({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}