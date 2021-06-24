export const PostCard = (post) => {
  // export const PostCard = ({title, id, ...}) => {

  return (
    <div className="post">
      <img src={post.cover} atl={post.title} />
      <div className="post-content">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};
