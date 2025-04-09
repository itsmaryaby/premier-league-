const teams = [
  { club: 'Liverpool', mp: 31, w: 22, d: 7, l: 2, gf: 72, ga: 30, gd: 42, pts: 73, last5: ['win','win','win','win','loss'] },
  { club: 'Arsenal', mp: 31, w: 17, d: 11, l: 3, gf: 56, ga: 26, gd: 30, pts: 62, last5: ['draw','win','win','draw','win'] },
  { club: 'Nottm Forest', mp: 31, w: 17, d: 6, l: 8, gf: 51, ga: 37, gd: 14, pts: 57, last5: ['win','win','win','win','loss'] },
  { club: 'Chelsea', mp: 31, w: 15, d: 8, l: 8, gf: 54, ga: 37, gd: 17, pts: 53, last5: ['loss','draw','win','win','draw'] },
  { club: 'Newcastle', mp: 30, w: 16, d: 5, l: 9, gf: 52, ga: 39, gd: 13, pts: 53, last5: ['win','win','draw','win','win'] },
  { club: 'Man City', mp: 31, w: 15, d: 7, l: 9, gf: 57, ga: 40, gd: 17, pts: 52, last5: ['win','draw','win','draw','draw'] },
  { club: 'Aston Villa', mp: 31, w: 14, d: 9, l: 8, gf: 46, ga: 50, gd: -4, pts: 51, last5: ['loss','win','loss','draw','win'] },
  { club: 'Fulham', mp: 31, w: 13, d: 9, l: 9, gf: 47, ga: 42, gd: 5, pts: 48, last5: ['loss','draw','win','loss','win'] },
  { club: 'Brighton', mp: 31, w: 12, d: 11, l: 8, gf: 52, ga: 47, gd: 5, pts: 47, last5: ['win','draw','win','draw','loss'] },
  { club: 'Bournemouth', mp: 31, w: 12, d: 9, l: 10, gf: 51, ga: 41, gd: 10, pts: 45, last5: ['loss','draw','draw','win','draw'] },
];

const tbody = document.getElementById('table-body');

teams.forEach(team => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${team.club}</td>
    <td>${team.mp}</td>
    <td>${team.w}</td>
    <td>${team.d}</td>
    <td>${team.l}</td>
    <td>${team.gf}</td>
    <td>${team.ga}</td>
    <td>${team.gd}</td>
    <td>${team.pts}</td>
    <td>${team.last5.map(result => {
      if (result === 'win') return '<span class="result-icon win">✅</span>';
      if (result === 'loss') return '<span class="result-icon loss">❌</span>';
      return '<span class="result-icon draw">○</span>';
    }).join('')}</td>
  `;
  tbody.appendChild(row);
});
