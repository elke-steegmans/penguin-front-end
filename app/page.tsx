import Image from 'next/image'
import Header from '@components/header'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="text-center md:mt-24 mx-auto md:w-3/5 lg:w-1/2">
        <span className="flex flex-row justify-center items-center">
          <Image src="/images/hi.png" alt="hi" width={200} height={200} />
        </span>
      </main>
    </>
  )
}
