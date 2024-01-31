import ContentBlock from '@/app/content-block'
import PageHeading from '@/app/page-heading'

export default function HostingServices() {
  return (
    <>
      <PageHeading title="Hosting" image="hosting" />

      <div id="hosting">
        <ContentBlock title="Premium Web Hosting">
          <div id="hosting-details">
            <div id="hosting-text">
              <p>Hypa.NET's premium web hosting provides for nearly every office related internet need. Even our most basic hosting solution is enough for most small/medium businesses to enter the 21st century with electronic mail and a web site.</p>
              <p>Please contact a sales technician today for more information on our solutions.</p>
              <p>You may also check out our <a href="/services/hosting/pricing">latest pricing information</a></p>
            </div>

            <div id="hosting-starter">
              <img alt="Our starter office kit includes: 500 megabytes of disk space, 10 gigabytes of data transfer, 1 SQL database, email accounts for up to 200 employees, 1 year domain registration (.com, .net, .org only), 3 hours of training via phone for $19.995" src="/kit_starter.gif" />
            </div>

            <div id="hosting-solution">
              <img alt="Our complete office kit includes: 850 megabytes of disk space, 20 gigabytes of data transfer, 1 SQL database, email accounts for up to 200 employees, 1 year domain registration (.com, .net, .org only), 5 hours of training via phone for $39.95" src="/kit_solution1.gif" />
            </div>

            <div id="hosting-complete">
              <img alt="Our complete office kit includes: 850 megabytes of disk space, 20 gigabytes of data transfer, 1 SQL database, email accounts for up to 200 employees, 1 year domain registration (.com, .net, .org only), 3 hours of training via phone, 768 kilobits per second wireless access for $39.95" src="/kit_complete.gif" />
            </div>
          </div>
        </ContentBlock>
      </div>
    </>
  )
}
