import "./styles.css";
import { useQuery, gql } from "@apollo/client";

const ALL_POSTS = gql`
  {
    getAllPosts {
      id
      title
      content
      postImage
      postedBy {
        id
        handle
        profilePicture
        username
      }
      createdAt
    }
  }
`;

export default function Posts() {
  const { data, loading, error } = useQuery(ALL_POSTS);

  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>{error.message}</h4>;

  return (
    <div className="Posts">
      <div>
        {data &&
          data.getAllPosts
            .slice(0)
            .reverse()
            .map((post) => (
              <div className="post" key={post.id}>
                <div className="left">
                  <img
                    className="profPic"
                    src={post.postedBy.profilePicture}
                    width="40px"
                    alt="prof_pic"
                  />
                </div>
                <div className="right">
                  <span className="handle">
                    {post.postedBy.username} |{" "}
                    <span className="handlena">{post.postedBy.handle}</span>
                    &nbsp;* {post.createdAt}
                  </span>
                  <h4>{post.title}</h4>
                  <p>{post.content}</p>
                  <img
                    src={post.postImage}
                    className="postImage"
                    alt={post.title ? "" : "image"}
                  />
                  <br />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
