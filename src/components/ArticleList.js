import Article from "./Article"

function ArticleList (blogArticleList) {
    const {posts = []} = blogArticleList
    return (
        <main>
            {posts.map((post) => {
                return <Article key = {post.id} post={post} />
            })}
        </main>
    )
}
export default ArticleList