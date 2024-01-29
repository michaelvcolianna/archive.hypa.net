import ContentBlock from '@/app/content-block'
import Image from 'next/image'
import PageHeading from '@/app/page-heading'

export default function Home() {
  return (
    <>
      <PageHeading title="About Hypa.net" image="about" />

      <div id="home">
        <ContentBlock>
          <div className="content">
            <div>Hypa.NET was created in April 1999 as a full featured hosting service provider. Hypa.NET's parent company, Harveyopolis Corporation had been heavily involved in web hosting since its founding in August 1995.</div>
            <div>More than four years after it was created, Hypa.NET is still expanding. Last Autumn a new data center was opened in downtown Los Angeles, which has enabled us to take on many more customers for both web hosting and now wireless internet access.</div>
          </div>

          <div className="content">
            <div>If you are located in Los Angeles, you may be within our area of coverage.  We have wireless plans starting at $39.95/month, which is similar to most cable/dsl prices, and it's <strong>fast</strong>. It's up to 30 times faster than DSL!</div>
            <div>Please <a href="/contact/sales">contact a sales technician</a> to arrange for a free site survey!</div>
          </div>
        </ContentBlock>

        <div id="links">
          <Image alt="One Park Plaza, our office building" src="/pic1.gif" height={136} width={213} />

          <strong>Quick Links</strong>
                  
          <ul>
            <li><a href="/services/wireless/pricing">Wireless Internet Pricing</a></li>
            <li><a href="/services/hosting/pricing">Web Hosting Pricing</a></li>
            <li><a href="/services/colocation/pricing">Server Co-Location Pricing</a></li>
            <li><a href="/services/dedicated/pricing">Dedicated Server Pricing</a></li>
            <li><a href="/services/storage/pricing">Offsite/Redundant Data Storage Pricing</a></li>
            <li><a href="#">Custom Software Development</a></li>
          </ul>
        </div>

        <div id="price-buttons">
          <a href="/services/hosting">
            <Image alt="Small Office: $19.95" src="/price-tags_01.gif" height={81} width={172} />
          </a>

          <a href="/services/hosting">
            <Image alt="Office Solution: $39.95" src="/price-tags_02.gif" height={78} width={172} />
          </a>

          <a href="/services/wireless/pricing">
            <Image alt="Complete Office: $99.95" src="/price-tags_03.gif" height={82} width={172} />
          </a>
        </div>
      </div>
    </>
  )
}
