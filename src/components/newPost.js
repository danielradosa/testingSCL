import "../styles.css";
import { useCallback } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_POST = gql`
  mutation createPost($title: String!, $content: String!, $postedBy: String!) {
    createPost(title: $title, content: $content, postedBy: $postedBy) {
      title
      content
      postedBy
      createdAt
    }
  }
`;

export default function Post({ onCreate }) {
  const [createPost] = useMutation(CREATE_POST);

  const handleSubmit = useCallback(
    async (input) => {
      const { data } = await createPost({
        variables: { input }
      });
      onCreate(data?.createPost);
    },
    [createPost, onCreate]
  );

  return (
    <div className="newPost">
      <form>
        <h2>Create new post</h2>
        <label>
          Your handle with @: <br />
          <input type="text" name="postedBy" /> <br />
        </label>
        <label>
          Title: <br />
          <input type="text" name="title" /> <br />
        </label>
        <label>
          Content: <br />
          <input type="text" name="content" />
        </label>
        <button onSubmit={handleSubmit}>Post</button>
      </form>
    </div>
  );
}
