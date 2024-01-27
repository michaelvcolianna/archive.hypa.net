import Image from 'next/image'

export default function PageHeading({ title, image }) {
  return (
    <h1>
      <Image alt={title} src={`/${image}.gif`} height={41} width={774} />
    </h1>
  )
}
