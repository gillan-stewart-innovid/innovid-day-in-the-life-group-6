
import "./app.css";


const fooCampaigns = [
  {
    id: 16346145,
    title: "Campaign 1",
    startdate: "01/01/2023",
    enddate: "31/02/2023",
    totalImpressions: 1113,
    totalResponse: 11008,
  },
  {
    id: 16346146,
    title: "Campaign 2",
    startdate: "01/04/2023",
    enddate: "27/08/2023",
    totalImpressions: 1234551113,
    totalResponse: 55611008,
  },
  {
    id: 16346147,
    title: "Campaign 3",
    startdate: "09/09/2021",
    enddate: "31/10/2021",
    totalImpressions: 12133,
    totalResponse: 13408,
  },
];


function dateFormatChange(date){
  const output = date.split("/")
  const days = output[0]
  const months = output[1]
  const years = output[2]
  return months + '-' + days + '-' + years
}

function App() {
  const campaignList = fooCampaigns.map((campaign) => (
    <tr key={campaign.id} className="tr-data-style">
      <th className="th-title-campaign table-title table-element-padding"><a href="/" className="a-campaign">{campaign.title}</a></th>
      <th className="th-title-data table-title text-center">{campaign.startdate ? campaign.startdate : 'Invalid Date'}</th>
      <th className="th-title-data table-title text-center">{campaign.enddate ? campaign.enddate : 'Invalid Date'} </th>
      <th className="th-title-data table-title text-center">{campaign.totalImpressions}</th>
      <th className="th-title-data table-title text-center">{campaign.totalResponse}</th>
    </tr>
  ));


  const totalImpressionsAddUp = <p>Total Impressions for all campaigns: {fooCampaigns.reduce((accImp, campaign) => ( accImp + (campaign.totalImpressions ? campaign.totalImpressions : 0)),0)}</p>
  const totalResponsesAddUp = <p>Total Responses for all campaigns: {fooCampaigns.reduce((accImp, campaign) => ( accImp + (campaign.totalResponse ? campaign.totalResponse : 0)),0)}</p>
  

  return (
    <>
      <main >
        <nav className="navbar-style"></nav>
        <body className="body-style">
          <h1 className="home-page-title">List of Campaigns</h1>
          <table className="table-style">
            <tr className="tr-style">
              <th className="th-title-campaign table-title table-bold table-element-padding">Campaign</th>
              <th className="th-title-data table-title table-bold text-center">Start Date</th>
              <th className="th-title-data table-title table-bold text-center">End Date</th>
              <th className="th-title-data table-title table-bold text-center">Impressions</th>
              <th className="th-title-data table-title table-bold text-center">Responses</th>
            </tr>
            {campaignList}
            </table>
        </body>
      </main>
    </>
  );
}

export default App;
