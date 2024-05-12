document.addEventListener('DOMContentLoaded', () => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then(response => response.json())
      .then(data => {
        // Sort data based on Points in descending order
        data.sort((a, b) => b.Points - a.Points);
  
        const tableBody = document.querySelector('#ipl-table tbody');
  
        // Populate table with sorted data
        data.forEach((team, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${index + 1}</td>
            <td>${team.Team}</td>
            <td>${team.Matches}</td>
            <td>${team.Won}</td>
            <td>${team.Lost}</td>
            <td>${team.Tied}</td>
            <td>${team.NRR}</td>
            <td>${team.Points}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  