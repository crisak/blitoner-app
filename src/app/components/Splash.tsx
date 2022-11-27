'use client'
import BgSplash from '@/assets/images/bg-splash.gif'
import Image from 'next/image'

const Splash = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
      }}
    >
      <Image src={BgSplash.src} alt="Splash logo" width={400} height={300} />
    </div>
  )
}

export default Splash
