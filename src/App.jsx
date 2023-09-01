import { useState, useEffect } from 'react';

function dateFormatChange(date) {
  if (date) {
    const output = date.split('/');
    const days = output[0];
    const months = output[1];
    const years = output[2];
    return months + '/' + days + '/' + years;
  } else {
    return 'not a valid date';
  }
}

function App() {
  const [fooCampaigns, setFooCampaigns] = useState([]);

  useEffect(() => {
    fetch('./server/campaigns.json')
      .then((res) => res.json())
      .then((data) => setFooCampaigns(data));
    fetch('./server/results.json')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const campaignList = fooCampaigns.map((campaign) => (
    <li key={campaign.id}>
      {campaign.title} | start date:
      {campaign.startdate ? campaign.startdate : 'Invalid Date'} | end date:{' '}
      {dateFormatChange(campaign.enddate) ? campaign.enddate : 'Invalid Date'} |
      Total Impressions {campaign.totalImpressions} | Total Responses{' '}
      {campaign.totalResponse}
    </li>
  ));

  const TotalImpressionsAddUp = () => {
    return (
      <p>
        Total Impressions for all campaigns:{' '}
        {fooCampaigns.reduce(
          (accImp, campaign) =>
            accImp +
            (campaign.totalImpressions ? campaign.totalImpressions : 0),
          0,
        )}
      </p>
    );
  };

  const TotalResponsesAddUp = () => {
    return (
      <p>
        Total Responses for all campaigns:{' '}
        {fooCampaigns.reduce(
          (accImp, campaign) =>
            accImp + (campaign.totalResponse ? campaign.totalResponse : 0),
          0,
        )}
      </p>
    );
  };

  return (
    <>
      <h1>Code Clan - event</h1>
      <ul>{campaignList}</ul>
      <TotalImpressionsAddUp />
      <TotalResponsesAddUp />
    </>
  );
}

export default App;
