import dayjs from "dayjs";

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
  return months + '/' + days + '/' + years
}

function App() {
  const campaignList = fooCampaigns.map((campaign) => (
    <li key={campaign.id}>

      {campaign.title} | start date: {campaign.startdate ? campaign.startdate : 'Invalid Date'} | end date:{' '}
      {campaign.enddate ? campaign.enddate : 'Invalid Date'} | Total Impressions {campaign.totalImpressions} | Total

      Responses {campaign.totalResponse}
    </li>
    </li>
  ));


  const totalImpressionsAddUp = <p>Total Impressions for all campaigns: {fooCampaigns.reduce((accImp, campaign) => ( accImp + (campaign.totalImpressions ? campaign.totalImpressions : 0)),0)}</p>
  const totalResponsesAddUp = <p>Total Responses for all campaigns: {fooCampaigns.reduce((accImp, campaign) => ( accImp + (campaign.totalResponse ? campaign.totalResponse : 0)),0)}</p>
  

  return (
    <>
      <h1>Code Clan - event</h1>
      <ul>{campaignList}</ul>
      <p>{totalImpressionsAddUp}</p>
      <p>{totalResponsesAddUp}</p>
    </>
  );
}

export default App;
