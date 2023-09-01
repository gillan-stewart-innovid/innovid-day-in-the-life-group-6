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
    <li key={campaign.id}>
      {campaign.title} |
      Status: {campaign.startdate ? campaign.startdate : 'Invalid Date'} |
      start date: {campaign.startdate ? campaign.startdate : 'Invalid Date'} |
      end date:{' '}  {campaign.enddate ? campaign.enddate : 'Invalid Date'} |
      Total Impressions {campaign.totalImpressions} |
      Total Responses {campaign.totalResponse}
    </li>
  ));

  return (
    <>
      <nav>
      </nav>
      <body className="body-style">
        <h1 className="home-page-title">Code Clan - event</h1>
        <ul>{campaignList}</ul>
      </body>
    </>
  );
}

export default App;
