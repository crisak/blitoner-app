'use client'

const ToggleButtonShowCard = ({ ...props }) => {
  return (
    <button
      style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        backgroundColor: 'transparent',
        border: '1px solid #ffffff4f',
        color: '#ffffff4f',
        boxShadow: 'none',
        float: 'right'
      }}
      {...props}
    />
  )
}

export default ToggleButtonShowCard
