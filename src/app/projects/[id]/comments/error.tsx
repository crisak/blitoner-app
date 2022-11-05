'use client'

const ErrorPage = ({ ...props }) => {
  console.log('props->', props)
  return (
    <p
      style={{
        backgroundColor: '#ff000092',
        color: '#ffffff',
        padding: '2rem'
      }}
    >
      🚨Error al cargar los comentarios
    </p>
  )
}

export default ErrorPage
