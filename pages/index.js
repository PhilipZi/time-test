import dynamic from 'next/dynamic'

export default function Home() {
  	const Timer = dynamic(() => import('../components/timer'), {
		ssr: false,
	});
  return (
      <>
      <div>
      <Timer/>
      </div>
      </>
   
  )
}
