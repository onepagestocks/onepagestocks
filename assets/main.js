fetch('./indices/index.json')
  .then(response => response.json())
  .then(reports => {
    const container = document.getElementById('reports-container');
    container.innerHTML = '';
    if (reports.length === 0) {
      container.innerHTML = '<p>No reports available yet.</p>';
      return;
    }

    const latest = reports[0];
    const dateMatch = latest.match(/(\d{4}-\d{2}-\d{2})/);
    const date = dateMatch ? dateMatch[1] : '';
    const latestCard = document.createElement('div');
    latestCard.className = 'card';
    latestCard.innerHTML = `
      <p>Check out the latest HTML report with visual analysis and insights.</p>
      <a href="./reports/${latest}">Latest Report → ${date}</a>
    `;
    container.appendChild(latestCard);

    const allReportsCard = document.createElement('div');
    allReportsCard.className = 'card';
    allReportsCard.innerHTML = `
      <a href="./reports/">View All Reports →</a>
    `;
    container.appendChild(allReportsCard);
  })
  .catch(error => {
    document.getElementById('reports-container').innerHTML = '<p>Error loading reports.</p>';
    console.error('Error fetching reports:', error);
  });
