import ContentBlock from '@/app/content-block'
import Image from 'next/image'
import PageHeading from '@/app/page-heading'

const ServiceCard = ({ image, heading, link, children }) => (
  <div className="service">
    <ServiceLink link={link}>
      <Image alt={heading} src={image} height={40} width={205} />
    </ServiceLink>

    <div>{children}</div>

    <ServiceLink link={link}>&lt;read more&gt;</ServiceLink>
  </div>
)

const ServiceLink = ({ link, children }) => (
  <a href={link} target={link.startsWith('/') ? undefined : '_blank'}>{children}</a>
)

export default function Services() {
  return (
    <>
      <PageHeading title="Services" image="services" />

      <div id="services">
        <ContentBlock>
          <ServiceCard heading="Hosting" image="/service_hosting.gif" link="/services/hosting">No matter what size company you are, we can accomodate your needs. We have virtual server accounts starting at just $9.99 per month.</ServiceCard>
          <ServiceCard heading="Wireless Access" image="/service_wireless.gif" link="/services/wireless">Get real broadband! We are currently offering wireless internet access in Los Angeles. Contact us for a free site survey.</ServiceCard>
          <ServiceCard heading="Server Colocation" image="/service_colocation.gif" link="/services/colocation">Looking for a data center? We can provide you with rack space or a cage in our private data center. Server management services available. We can accomodate virtually any amount of bandwidth!</ServiceCard>
          <ServiceCard heading="Dedicated Servers" image="/service_dedicated.gif" link="/services/dedicated">Lease a server in our data center today. Reliable, managed Linux servers available starting at $249/month.</ServiceCard>
          <ServiceCard heading="Custom Software" image="/service_custom.gif" link="https://customprogramming.net">Custom programming is available from Hypa.NET. We are capable of developing software for the web platforms in addition to Windows, Linux, and MacOS.</ServiceCard>
          <ServiceCard heading="Network Security" image="/service_security.gif" link="/services/security">Do you have an intrusion detection system? A firewall? When was the last time you performed a security audit? Contact a Hypa.NET sales technician today to arrange for a free consultation.</ServiceCard>
          <ServiceCard heading="Offsite/Redundant Data Storage" image="/service_backup.gif" link="/services/storage">In the event of a catastrophic event, natural disaster or even human error, you will need your data protected. You may not be able to prevent every potential diaster - but you can plan and prevent such an event from having a disastrous effect on your business.</ServiceCard>
        </ContentBlock>
      </div>
    </>
  )
}
