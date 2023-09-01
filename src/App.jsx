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

function App() {
  const campaignList = fooCampaigns.map((campaign) => (
    <tr key={campaign.id}>
      <th className="th-title-campaign table-title table-element-padding">{campaign.title}</th>
      <th className="th-title-data table-title text-center">{campaign.startdate ? campaign.startdate : 'Invalid Date'}</th>
      <th className="th-title-data table-title text-center">{campaign.enddate ? campaign.enddate : 'Invalid Date'} </th>
      <th className="th-title-data table-title text-center">{campaign.totalImpressions}</th>
      <th className="th-title-data table-title text-center">{campaign.totalResponse}</th>
    </tr>
  ));

  return (
    <>
      <main >
        <nav className="navbar-style"></nav>
        <body className="body-style">
          <h1 className="home-page-title">List of Campaigns</h1>
          <table>
            <tr>
              <th className="th-title-campaign table-title table-bold table-element-padding table-title-background">Campaign</th>
              <th className="th-title-data table-title table-bold text-center table-title-background">Start Date</th>
              <th className="th-title-data table-title table-bold text-center table-title-background">End Date</th>
              <th className="th-title-data table-title table-bold text-center table-title-background">Impressions</th>
              <th className="th-title-data table-title table-bold text-center table-title-background">Responses</th>
            </tr>
            {campaignList}
            </table>
        </body>
      </main>
    </>
  );
}

export default App;
