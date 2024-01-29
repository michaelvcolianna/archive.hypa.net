import Card from '@/app/card'
import ContentBlock from '@/app/content-block'
import PageHeading from '@/app/page-heading'

const SupportText = ({ isAlt = false }) => (
  <>
    Login to your {isAlt ? 'account' : 'billing'} control panel and access the support center from there. Or <a href="/contact/support">email support</a>.
  </>
)

export default function Support() {
  const viewMyBillsUrl = 'https://viewmybills.com'

  return (
    <>
      <PageHeading title="Support" image="support" />

      <div id="support" className="grid">
        <ContentBlock classes="cards">
          <Card heading="Hosting" image="/service_hosting.gif" link="https://controlpanel.hypa.net" isAlt={true}><SupportText isAlt={true} /></Card>
          <Card heading="Wireless Access" image="/service_wireless.gif" link={viewMyBillsUrl} isAlt={true}><SupportText /></Card>
          <Card heading="Server Colocation" image="/service_colocation.gif" link={viewMyBillsUrl} isAlt={true}><SupportText /></Card>
          <Card heading="Dedicated Servers" image="/service_dedicated.gif" link={viewMyBillsUrl} isAlt={true}><SupportText /></Card>
        </ContentBlock>
      </div>
    </>
  )
}
