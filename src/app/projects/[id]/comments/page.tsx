const getComments = async (idPost: string) => {
  return await fetch(
    `https://jsonplaceholder.typicode.com/posts/${idPost}/comments`
  ).then((res) => res.json())
}

const CommentsPage = async ({ params }) => {
  const { id: idPost } = params
  const comments = await getComments(idPost)

  return (
    <ul>
      {comments.map(({ id, body, email }) => (
        <li key={id}>
          <p style={{ opacity: 0.4 }}>{email}</p>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  )
}

export default CommentsPage
