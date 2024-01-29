import Image from 'next/image'

const CardLink = ({ link, children }) => (
  <a href={link} target={link.startsWith('/') ? undefined : '_blank'}>{children}</a>
)

export default function Card({ image, heading, link, isAlt = false, children }) {
  return (
    <div className="card">
      <div className="image">
        <CardLink link={link}>
          <Image alt={heading} src={image} height={40} width={205} />
        </CardLink>
      </div>

      <div className="text">{children}</div>

      <div className="link">
        <CardLink link={link}>&lt;{isAlt ? 'login now' : 'read more'}&gt;</CardLink>
      </div>
    </div>
  )
}
