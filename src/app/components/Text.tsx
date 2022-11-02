export const Text = ({ children, as }: any) => {
  if (as === 'body') {
    return <p style={{ color: 'white' }}>{children}</p>
  }
  return <h2 style={{ color: 'white' }}>{children}</h2>
}
