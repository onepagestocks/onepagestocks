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


// Fetch latest sectoral report
fetch('./indices/index.json')
  .then(response => response.json())
  .then(data => {
    const reportCard = document.getElementById('sectoral-report');
    const latest = data.latest;
    if (latest) {
      const link = document.createElement('a');
      link.href = `./sectoral/${latest}`;
      link.textContent = 'View Latest Sectoral Report →';
      reportCard.appendChild(link);
    } else {
      reportCard.innerHTML += '<p>No report found.</p>';
    }
  })
  .catch(error => {
    console.error('Error loading sectoral report:', error);
  });


