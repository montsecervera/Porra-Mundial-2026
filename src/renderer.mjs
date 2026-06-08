import { DATA } from './data.mjs?v=fixture-check-20260608';

const $ = (selector) => document.querySelector(selector);
const byName = new Map(DATA.teams.map((team) => [team.name, team]));

const GROUP_ACCENTS = {
  A: '#57e37d',
  B: '#ff4268',
  C: '#ffad41',
  D: '#387cff',
  E: '#9b4cff',
  F: '#c5ff36',
  G: '#ff4d77',
  H: '#44d6c6',
  I: '#c64cff',
  J: '#52c9ee',
  K: '#ff8b28',
  L: '#62d4ff'
};

const FLAG_BY_SLUG = {
  alemania: 'de',
  arabia_saudi: 'sa',
  argelia: 'dz',
  argentina: 'ar',
  australia: 'au',
  austria: 'at',
  belgica: 'be',
  bosnia_y_herzegovina: 'ba',
  brasil: 'br',
  canada: 'ca',
  catar: 'qa',
  chequia: 'cz',
  colombia: 'co',
  costa_de_marfil: 'ci',
  croacia: 'hr',
  curazao: 'cw',
  ecuador: 'ec',
  eeuu: 'us',
  egipto: 'eg',
  escocia: 'gb-sct',
  espana: 'es',
  francia: 'fr',
  ghana: 'gh',
  haiti: 'ht',
  inglaterra: 'gb-eng',
  irak: 'iq',
  iran: 'ir',
  cabo_verde: 'cv',
  islas_del_cabo_verde: 'cv',
  japon: 'jp',
  jordania: 'jo',
  marruecos: 'ma',
  mexico: 'mx',
  noruega: 'no',
  nueva_zelanda: 'nz',
  paises_bajos: 'nl',
  panama: 'pa',
  paraguay: 'py',
  portugal: 'pt',
  rd_congo: 'cd',
  corea: 'kr',
  rep_de_corea: 'kr',
  senegal: 'sn',
  sudafrica: 'za',
  suecia: 'se',
  suiza: 'ch',
  tunez: 'tn',
  turquia: 'tr',
  uruguay: 'uy',
  uzbekistan: 'uz'
};

const ROUNDS = [
  {
    mount: 'r32Left',
    matches: [
      { no: 'M74', a: '1E', b: '3A/B/C/D/F' },
      { no: 'M77', a: '1I', b: '3C/D/F/G/H' },
      { no: 'M73', a: '2A', b: '2B' },
      { no: 'M75', a: '1F', b: '2C' },
      { no: 'M76', a: '1C', b: '2F' },
      { no: 'M78', a: '2E', b: '2I' },
      { no: 'M79', a: '1A', b: '3C/E/F/H/I' },
      { no: 'M80', a: '1L', b: '3E/H/I/J/K' }
    ]
  },
  {
    mount: 'qfLeft',
    matches: [
      { no: 'M89', a: 'G74', b: 'G77' },
      { no: 'M90', a: 'G73', b: 'G75' },
      { no: 'M91', a: 'G76', b: 'G78' },
      { no: 'M92', a: 'G79', b: 'G80' }
    ]
  },
  {
    mount: 'sfLeft',
    matches: [
      { no: 'M97', a: 'G89', b: 'G90' },
      { no: 'M99', a: 'G91', b: 'G92' }
    ]
  },
  {
    mount: 'semiFinalsCenter',
    matches: [
      { no: 'M101', a: 'G97', b: 'G98' },
      { no: 'M102', a: 'G99', b: 'G100' }
    ]
  },
  {
    mount: 'finalMatch',
    matches: [
      { no: 'M104', a: 'G101', b: 'G102' }
    ]
  },
  {
    mount: 'sfRight',
    matches: [
      { no: 'M98', a: 'G93', b: 'G94' },
      { no: 'M100', a: 'G95', b: 'G96' }
    ]
  },
  {
    mount: 'qfRight',
    matches: [
      { no: 'M93', a: 'G83', b: 'G84' },
      { no: 'M94', a: 'G81', b: 'G82' },
      { no: 'M95', a: 'G86', b: 'G88' },
      { no: 'M96', a: 'G85', b: 'G87' }
    ]
  },
  {
    mount: 'r32Right',
    matches: [
      { no: 'M83', a: '2K', b: '2L' },
      { no: 'M84', a: '1H', b: '2J' },
      { no: 'M81', a: '1D', b: '3B/E/F/I/J' },
      { no: 'M82', a: '1G', b: '3A/E/H/I/J' },
      { no: 'M86', a: '1J', b: '2H' },
      { no: 'M88', a: '2D', b: '2G' },
      { no: 'M85', a: '1B', b: '3E/F/G/I/J' },
      { no: 'M87', a: '1K', b: '3D/E/I/J/L' }
    ]
  }
];

const R32_MATCH_NOS = new Set(['M73', 'M74', 'M75', 'M76', 'M77', 'M78', 'M79', 'M80', 'M81', 'M82', 'M83', 'M84', 'M85', 'M86', 'M87', 'M88']);

const FLOW_EDGES = [
  ['M74', 'M89'], ['M77', 'M89'],
  ['M73', 'M90'], ['M75', 'M90'],
  ['M76', 'M91'], ['M78', 'M91'],
  ['M79', 'M92'], ['M80', 'M92'],
  ['M83', 'M93'], ['M84', 'M93'],
  ['M81', 'M94'], ['M82', 'M94'],
  ['M86', 'M95'], ['M88', 'M95'],
  ['M85', 'M96'], ['M87', 'M96'],
  ['M89', 'M97'], ['M90', 'M97'],
  ['M93', 'M98'], ['M94', 'M98'],
  ['M91', 'M99'], ['M92', 'M99'],
  ['M95', 'M100'], ['M96', 'M100']
];

const CENTRAL_FLOW_EDGES = [
  ['M97', 'M101'], ['M98', 'M101'],
  ['M99', 'M102'], ['M100', 'M102']
];

const state = {
  slots: new Map(),
  groupOrder: new Map(DATA.groups.map((group) => [group.id, [...group.teams]])),
  simulationReady: false,
  activeTab: 'bracket',
  potSelections: new Map()
};

const pointerDrag = {
  team: '',
  ghost: null,
  active: false
};

function lookup(name) {
  return byName.get(name) || { name };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function slugify(name) {
  return String(name)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function flagMarkup(name) {
  const team = lookup(name);
  const code = FLAG_BY_SLUG[slugify(team.name)];
  if (!code) return '<span class="flag missing-flag"></span>';
  return `<img class="flag" src="flags/${code}.svg" alt="Bandera de ${escapeHtml(team.name)}" loading="lazy" draggable="false" />`;
}

function teamToken(name, extraClass = '') {
  const team = lookup(name);
  return `<div class="team-token ${extraClass}" draggable="true" data-team="${escapeHtml(team.name)}">
    ${flagMarkup(team.name)}
    <strong>${escapeHtml(team.name)}</strong>
  </div>`;
}

function filledTeamToken(name, extraClass = '') {
  const team = lookup(name);
  const isPotSelection = [...state.potSelections.values()].includes(team.name);
  const selectedClass = isPotSelection ? ' pot-selected' : '';
  return `<div class="slot-filled-team ${extraClass}${selectedClass}" draggable="true" data-team="${escapeHtml(team.name)}">
    ${flagMarkup(team.name)}
    <strong>${escapeHtml(team.name)}</strong>
  </div>`;
}

function groupCard(group) {
  const accent = GROUP_ACCENTS[group.id] || '#27d3ff';
  const teams = state.groupOrder.get(group.id) || group.teams;
  const rows = teams.map((name, rowIndex) => `
    <div class="group-row reorder-zone" data-group-id="${group.id}" data-row-index="${rowIndex}">
      <span class="seed">${rowIndex + 1}</span>
      ${teamToken(name)}
    </div>`).join('');

  return `<article class="group-card" style="--group-accent: ${accent}">
    <div class="group-letter">${group.id}</div>
    <div class="group-list">
      <h4>${escapeHtml(group.name)}</h4>
      ${rows}
    </div>
  </article>`;
}

function slotMarkup(slotId, sourceLabel) {
  const teamName = state.slots.get(slotId);
  const isWinnerSlot = /^G\d+$/.test(sourceLabel);
  const isR32Slot = /^m(?:7[3-9]|8[0-8])-[ab]$/.test(slotId);
  return `<div class="bracket-slot drop-zone ${teamName ? 'filled' : ''} ${isWinnerSlot ? 'winner-slot' : ''}" data-slot-id="${slotId}" data-source-label="${escapeHtml(sourceLabel)}" data-r32-slot="${isR32Slot ? 'true' : 'false'}">
    ${teamName
      ? filledTeamToken(teamName)
      : `<span class="slot-ref">${escapeHtml(displaySourceLabel(sourceLabel))}</span>${isWinnerSlot ? '' : '<span class="slot-empty">Suelta equipo</span>'}`}
  </div>`;
}

function displaySourceLabel(sourceLabel) {
  if (/^G\d+$/.test(sourceLabel)) return `Gana M${sourceLabel.slice(1)}`;
  return sourceLabel;
}

function matchCard(match) {
  const matchId = match.no.toLowerCase();
  return `<article class="match-card" data-match-no="${escapeHtml(match.no)}">
    <header>${escapeHtml(match.no)}</header>
    ${slotMarkup(`${matchId}-a`, match.a)}
    ${slotMarkup(`${matchId}-b`, match.b)}
  </article>`;
}

function renderGroups() {
  const leftGroups = DATA.groups.slice(0, 6);
  const rightGroups = DATA.groups.slice(6);
  $('#groupsLeft').innerHTML = leftGroups.map(groupCard).join('');
  $('#groupsRight').innerHTML = rightGroups.map(groupCard).join('');
}

function renderRounds() {
  ROUNDS.forEach((round) => {
    const matches = round.matches.map(matchCard).join('');
    $(`#${round.mount}`).innerHTML = matches;
  });
  $('#championSlot').innerHTML = state.slots.get('champion')
    ? `<span>Campeon</span>${filledTeamToken(state.slots.get('champion'), 'champion-team')}`
    : '<span>Campeon</span><strong>Suelta equipo</strong>';
  $('#championSlot').classList.toggle('filled', state.slots.has('champion'));
}

function renderTabs() {
  document.querySelectorAll('.app-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.tab === state.activeTab);
  });
  document.querySelectorAll('.tab-toolbar').forEach((toolbar) => {
    toolbar.classList.toggle('active', toolbar.dataset.toolbar === state.activeTab);
  });
}

function renderPotControls() {
  const target = $('#potControls');
  if (!target) return;
  target.innerHTML = DATA.pots.map((pot) => {
    const selected = state.potSelections.get(String(pot.id)) || '';
    const options = [
      `<option value="">Selecciona equipo</option>`,
      ...pot.teams.map((teamName) => `<option value="${escapeHtml(teamName)}" ${selected === teamName ? 'selected' : ''}>${escapeHtml(teamName)}</option>`)
    ].join('');
    return `<label class="pot-picker">
      <span>Bombo ${pot.id}</span>
      <select data-pot-id="${pot.id}">
        ${options}
      </select>
    </label>`;
  }).join('');
}

function render() {
  renderTabs();
  renderPotControls();
  renderGroups();
  renderRounds();
  renderSimulationResults();
  attachInteractions();
  requestAnimationFrame(renderFlowLines);
}

function readPayload(event) {
  const raw = event.dataTransfer.getData('application/json');
  if (raw) {
    try { return JSON.parse(raw); } catch { /* continue */ }
  }
  const team = event.dataTransfer.getData('text/plain');
  return team ? { team } : null;
}

function groupIdsForSeed(sourceLabel) {
  if (/^[12][A-L]$/.test(sourceLabel)) return [sourceLabel[1]];
  if (/^3[A-L](?:\/[A-L])*$/.test(sourceLabel)) return sourceLabel.slice(1).split('/');
  return [];
}

function teamsInMatch(matchNo) {
  const matchId = `m${matchNo}`;
  return [`${matchId}-a`, `${matchId}-b`]
    .map((slotId) => state.slots.get(slotId))
    .filter(Boolean);
}

function canTeamGoInSlot(slotId, sourceLabel, teamName) {
  const team = lookup(teamName);
  const winnerSource = sourceLabel.match(/^G(\d+)$/);
  if (winnerSource) {
    return teamsInMatch(winnerSource[1]).includes(team.name);
  }

  const allowedGroups = groupIdsForSeed(sourceLabel);
  if (!allowedGroups.length) return true;
  return allowedGroups.includes(team.group);
}

function rejectDrop(zone) {
  zone.classList.remove('drag-over');
  zone.classList.add('drop-rejected');
  window.setTimeout(() => zone.classList.remove('drop-rejected'), 700);
}

function setSlot(slotId, teamName) {
  if (!slotId || !teamName) return;
  state.simulationReady = false;
  state.slots.set(slotId, lookup(teamName).name);
  render();
}

function moveTeamInGroup(teamName, groupId, targetIndex) {
  const groupTeams = state.groupOrder.get(groupId);
  if (!groupTeams || !groupTeams.includes(teamName)) return;
  const currentIndex = groupTeams.indexOf(teamName);
  const nextOrder = [...groupTeams];
  nextOrder.splice(currentIndex, 1);
  nextOrder.splice(targetIndex, 0, teamName);
  state.groupOrder.set(groupId, nextOrder);
  state.simulationReady = false;
  render();
}

function groupStanding(groupId, position) {
  return state.groupOrder.get(groupId)?.[position - 1] || '';
}

function thirdCandidates(seedLabel) {
  return seedLabel.replace(/^3/, '').split('/').filter(Boolean);
}

function buildThirdAssignments() {
  const available = DATA.groups.map((group) => group.id);
  const assignments = new Map();
  const thirdMatches = ROUNDS
    .find((round) => round.mount === 'r32Left').matches
    .concat(ROUNDS.find((round) => round.mount === 'r32Right').matches)
    .flatMap((match) => [match.a, match.b])
    .filter((seed) => seed.startsWith('3'));

  thirdMatches.forEach((seed) => {
    const candidates = thirdCandidates(seed);
    const chosen = available.find((groupId) => candidates.includes(groupId));
    if (!chosen) return;
    assignments.set(seed, chosen);
    available.splice(available.indexOf(chosen), 1);
  });

  return assignments;
}

function resolveGroupSeed(seed, thirdAssignments) {
  if (/^[12][A-L]$/.test(seed)) {
    return { team: groupStanding(seed[1], Number(seed[0])), seed };
  }
  if (seed.startsWith('3')) {
    const groupId = thirdAssignments.get(seed);
    return { team: groupId ? groupStanding(groupId, 3) : '', seed: groupId ? `3${groupId}` : seed };
  }
  return { team: '', seed };
}

function fillMatch(match, entryA, entryB) {
  const matchId = match.no.toLowerCase();
  if (entryA.team) state.slots.set(`${matchId}-a`, entryA.team);
  if (entryB.team) state.slots.set(`${matchId}-b`, entryB.team);
}

function clearR32Slots() {
  R32_MATCH_NOS.forEach((matchNo) => {
    const matchId = matchNo.toLowerCase();
    state.slots.delete(`${matchId}-a`);
    state.slots.delete(`${matchId}-b`);
  });
}

function fillFirstRoundFromGroups() {
  const thirdAssignments = buildThirdAssignments();
  clearR32Slots();
  ROUNDS
    .filter((round) => round.mount === 'r32Left' || round.mount === 'r32Right')
    .flatMap((round) => round.matches)
    .forEach((match) => {
      fillMatch(
        match,
        resolveGroupSeed(match.a, thirdAssignments),
        resolveGroupSeed(match.b, thirdAssignments)
      );
    });
}

function allMatches() {
  return ROUNDS.flatMap((round) => round.matches);
}

function selectedPotForTeam(teamName) {
  for (const [potId, selectedTeam] of state.potSelections.entries()) {
    if (selectedTeam === teamName) return Number(potId);
  }
  return 0;
}

function winnerSortValue(teamName) {
  const team = lookup(teamName);
  const selectedPot = selectedPotForTeam(team.name);
  const groupPosition = groupPositionForTeam(team.name);
  return {
    selectedRank: selectedPot ? 0 : 1,
    pot: selectedPot || team.pot || 99,
    groupPosition: groupPosition.position || 99,
    name: team.name
  };
}

function compareWinnerCandidates(teamA, teamB) {
  const a = winnerSortValue(teamA);
  const b = winnerSortValue(teamB);
  return a.selectedRank - b.selectedRank
    || a.pot - b.pot
    || a.groupPosition - b.groupPosition
    || a.name.localeCompare(b.name, 'es');
}

function chooseWinner(teamA, teamB) {
  if (!teamA) return teamB || '';
  if (!teamB) return teamA;
  return compareWinnerCandidates(teamA, teamB) <= 0 ? teamA : teamB;
}

function placeWinnerInNextRound(matchNo, winner) {
  if (!winner) return;
  const sourceLabel = `G${matchNo}`;
  allMatches().forEach((match) => {
    const matchId = match.no.toLowerCase();
    if (match.a === sourceLabel) state.slots.set(`${matchId}-a`, winner);
    if (match.b === sourceLabel) state.slots.set(`${matchId}-b`, winner);
  });
  if (String(matchNo) === '104') state.slots.set('champion', winner);
}

function fillCompleteBracketFromCurrentSlots() {
  allMatches()
    .map((match) => Number(match.no.slice(1)))
    .sort((a, b) => a - b)
    .forEach((matchNo) => {
      const [teamA, teamB] = teamsInMatch(matchNo);
      placeWinnerInNextRound(matchNo, chooseWinner(teamA, teamB));
    });
}

function simulateFullBracket() {
  fillFirstRoundFromGroups();
  state.simulationReady = false;
  render();
}

function syncPotSelectionsFromControls() {
  document.querySelectorAll('#potControls select[data-pot-id]').forEach((select) => {
    if (select.value) {
      state.potSelections.set(select.dataset.potId, select.value);
    } else {
      state.potSelections.delete(select.dataset.potId);
    }
  });
}

function generatePotBracket() {
  syncPotSelectionsFromControls();
  state.slots.clear();
  fillFirstRoundFromGroups();
  fillCompleteBracketFromCurrentSlots();
  state.simulationReady = false;
  render();
  requestAnimationFrame(() => {
    $('.worldcup-board')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function slotStage(slotId) {
  if (slotId === 'champion') return { rank: 6, label: 'Campeon' };
  const match = String(slotId).match(/^m(\d+)-[ab]$/i);
  if (!match) return { rank: 0, label: 'Sin fase' };
  const matchNo = Number(match[1]);
  if (matchNo === 104) return { rank: 5, label: 'Final' };
  if (matchNo === 101 || matchNo === 102) return { rank: 4, label: 'Semifinales' };
  if (matchNo >= 97 && matchNo <= 100) return { rank: 3, label: 'Cuartos' };
  if (matchNo >= 89 && matchNo <= 96) return { rank: 2, label: 'Octavos' };
  if (matchNo >= 73 && matchNo <= 88) return { rank: 1, label: 'Ronda de 32' };
  return { rank: 0, label: 'Sin fase' };
}

function buildTeamDepthsFromUserSlots() {
  const depths = new Map();
  for (const [slotId, teamName] of state.slots.entries()) {
    const team = lookup(teamName);
    const stage = slotStage(slotId);
    const current = depths.get(team.name);
    if (!current || stage.rank > current.rank) {
      depths.set(team.name, {
        team,
        rank: stage.rank,
        label: stage.label
      });
    }
  }
  return depths;
}

function groupPositionForTeam(teamName) {
  for (const [groupId, teams] of state.groupOrder.entries()) {
    const index = teams.indexOf(teamName);
    if (index >= 0) return { groupId, position: index + 1 };
  }
  return { groupId: '', position: 99 };
}

function pickRecommendationsByPot() {
  const depths = buildTeamDepthsFromUserSlots();
  return DATA.pots.map((pot) => {
    const candidates = pot.teams
      .map((name) => {
        const team = lookup(name);
        const depth = depths.get(team.name);
        return depth ? {
          team,
          rank: depth.rank,
          stage: depth.label
        } : null;
      })
      .filter(Boolean)
      .sort((a, b) => b.rank - a.rank || a.team.name.localeCompare(b.team.name, 'es'));
    return {
      pot: pot.id,
      team: candidates[0]?.team || null,
      stage: candidates[0]?.stage || '',
      fromBracket: Boolean(candidates[0]),
      alternatives: candidates.slice(1, 3).map((candidate) => candidate.team.name),
    };
  });
}

function selectionCard(item) {
  return `<article class="selection-card filled ${item.fromBracket ? 'from-bracket' : 'from-groups'}">
    <span>Bombo ${item.pot}</span>
    ${flagMarkup(item.team.name)}
    <strong>${escapeHtml(item.team.name)}</strong>
  </article>`;
}

function emptySelectionCard(pot) {
  return `<article class="selection-card empty">
    <span>Bombo ${pot.id}</span>
    <div class="empty-selection-mark"></div>
    <strong>Sin equipo</strong>
  </article>`;
}

function simulationInstructions() {
  return `<div class="simulation-help">
    <h3>Cómo funciona</h3>
    <p>Rellena manualmente los cruces del cuadro arrastrando equipos desde los grupos. Cuando tengas tu camino decidido, pulsa <b>Simular bombos</b> y aquí aparecerá qué selección conviene elegir en cada bombo según los equipos que hayas colocado.</p>
    <div class="simulation-help-steps">
      <span>1. Arrastra equipos al cuadro</span>
      <span>2. Completa los cruces</span>
      <span>3. Pulsa Simular bombos</span>
      <span>4. Revisa los bombos</span>
    </div>
  </div>`;
}

function simulationHeader() {
  return `<div class="simulation-title">
    <h2>Tus Selecciones</h2>
    <button id="simulateBoard" class="simulate-btn" type="button">Simular bombos</button>
  </div>`;
}

function renderSimulationResults() {
  const target = $('#simulationResults');
  if (!target) return;
  if (state.activeTab === 'pots') {
    target.hidden = true;
    target.innerHTML = '';
    return;
  }
  if (!state.simulationReady) {
    target.hidden = false;
    target.innerHTML = `<div class="simulation-card">
      ${simulationHeader()}
      ${simulationInstructions()}
    </div>`;
    return;
  }

  const recommendations = pickRecommendationsByPot();
  const hasAnyPick = recommendations.some((item) => item.team);
  target.hidden = false;
  target.innerHTML = `<div class="simulation-card">
    ${simulationHeader()}
    ${hasAnyPick
      ? `<div class="simulation-picks">
          ${recommendations.map((item) => item.team ? selectionCard(item) : emptySelectionCard({ id: item.pot })).join('')}
        </div>`
      : simulationInstructions()}
  </div>`;
}

function simulateBoard() {
  state.simulationReady = true;
  render();
  requestAnimationFrame(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });
}

function connectionPoint(sourceRect, targetRect) {
  const sourceCenterX = sourceRect.left + sourceRect.width / 2;
  const targetCenterX = targetRect.left + targetRect.width / 2;
  const fromRight = sourceCenterX <= targetCenterX;
  const rowDelta = Math.abs((sourceRect.top + sourceRect.height / 2) - (targetRect.top + targetRect.height / 2));
  return {
    from: {
      x: fromRight ? sourceRect.right : sourceRect.left,
      y: sourceRect.top + sourceRect.height / 2
    },
    to: {
      x: fromRight ? targetRect.left : targetRect.right,
      y: targetRect.top + targetRect.height / 2
    },
    fromRight,
    rowDelta
  };
}

function pathBetween(from, to) {
  const midX = (from.x + to.x) / 2;
  return `M ${from.x} ${from.y} L ${midX} ${from.y} L ${midX} ${to.y} L ${to.x} ${to.y}`;
}

function bracketPath(sourceRects, targetRect) {
  if (!sourceRects.length || !targetRect) return '';
  const sourceCenterX = sourceRects.reduce((total, rect) => total + rect.left + rect.width / 2, 0) / sourceRects.length;
  const targetCenterX = targetRect.left + targetRect.width / 2;
  const fromRight = sourceCenterX <= targetCenterX;
  const sourcePoints = sourceRects
    .map((rect) => ({
      x: fromRight ? rect.right : rect.left,
      y: rect.top + rect.height / 2
    }))
    .sort((a, b) => a.y - b.y);
  const targetPoint = {
    x: fromRight ? targetRect.left : targetRect.right,
    y: targetRect.top + targetRect.height / 2
  };
  const exitX = fromRight
    ? Math.max(...sourcePoints.map((point) => point.x))
    : Math.min(...sourcePoints.map((point) => point.x));
  const enterX = targetPoint.x;
  const midX = (exitX + enterX) / 2;

  if (sourcePoints.length === 1) {
    return pathBetween(sourcePoints[0], targetPoint);
  }

  const top = sourcePoints[0];
  const bottom = sourcePoints[sourcePoints.length - 1];
  const midY = (top.y + bottom.y) / 2;
  const d = [
    ...sourcePoints.map((point) => `M ${point.x} ${point.y} L ${midX} ${point.y}`),
    `M ${midX} ${top.y} L ${midX} ${bottom.y}`,
    `M ${midX} ${midY} L ${midX} ${targetPoint.y} L ${targetPoint.x} ${targetPoint.y}`
  ];
  return d.join(' ');
}

function finalForkPath(sourceRects, targetRect) {
  if (sourceRects.length < 2 || !targetRect) return '';
  const sources = [...sourceRects].sort((a, b) => a.left - b.left);
  const sourcePoints = sources.map((rect) => ({
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height
  }));
  const joinY = Math.min(...sourcePoints.map((point) => point.y)) + 18;
  const left = sourcePoints[0];
  const right = sourcePoints[sourcePoints.length - 1];
  const midX = (left.x + right.x) / 2;
  const targetTop = {
    x: targetRect.left + targetRect.width / 2,
    y: targetRect.top
  };

  return [
    `M ${left.x} ${left.y} L ${left.x} ${joinY}`,
    `M ${right.x} ${right.y} L ${right.x} ${joinY}`,
    `M ${left.x} ${joinY} L ${right.x} ${joinY}`,
    `M ${midX} ${joinY} L ${targetTop.x} ${joinY} L ${targetTop.x} ${targetTop.y}`
  ].join(' ');
}

function isReadableConnector(sourceRects, targetRect, boardRect) {
  if (!sourceRects.length || !targetRect || !boardRect) return false;
  const spanLeft = Math.min(targetRect.left, ...sourceRects.map((rect) => rect.left));
  const spanRight = Math.max(targetRect.right, ...sourceRects.map((rect) => rect.right));
  const xSpan = spanRight - spanLeft;
  if (xSpan > Math.max(330, boardRect.width * 0.30)) return false;

  const sourceCenterX = sourceRects.reduce((total, rect) => total + rect.left + rect.width / 2, 0) / sourceRects.length;
  const targetCenterX = targetRect.left + targetRect.width / 2;
  const sourceCenterY = sourceRects.reduce((total, rect) => total + rect.top + rect.height / 2, 0) / sourceRects.length;
  const targetCenterY = targetRect.top + targetRect.height / 2;
  const xDistance = Math.abs(sourceCenterX - targetCenterX);
  const yDistance = Math.abs(sourceCenterY - targetCenterY);
  const maxLocalDistance = Math.max(260, boardRect.width * 0.18);
  const maxDiagonalDistance = Math.max(340, boardRect.width * 0.24);
  if (xDistance > maxDiagonalDistance) return false;
  if (xDistance > maxLocalDistance && yDistance > 140) return false;
  return true;
}

function renderFlowLines() {
  const svg = $('#flowLines');
  const board = $('.worldcup-board');
  if (!svg || !board) return;
  const boardRect = board.getBoundingClientRect();
  svg.setAttribute('viewBox', `0 0 ${boardRect.width} ${boardRect.height}`);
  svg.setAttribute('width', boardRect.width);
  svg.setAttribute('height', boardRect.height);

  const rectFromElement = (element) => {
    if (!element) return null;
    const rect = element.getBoundingClientRect();
    return {
      left: rect.left - boardRect.left,
      right: rect.right - boardRect.left,
      top: rect.top - boardRect.top,
      bottom: rect.bottom - boardRect.top,
      width: rect.width,
      height: rect.height
    };
  };

  const rectFor = (id) => rectFromElement(id === 'champion'
    ? $('#championSlot')
    : document.querySelector(`[data-match-no="${id}"]`));

  const incomingByTarget = FLOW_EDGES.reduce((targets, [fromId, toId]) => {
    if (!targets.has(toId)) targets.set(toId, []);
    targets.get(toId).push(fromId);
    return targets;
  }, new Map());

  const paths = [...incomingByTarget.entries()].map(([toId, fromIds]) => {
    const target = rectFor(toId);
    const sources = fromIds.map(rectFor).filter(Boolean);
    if (!target || sources.length === 0) return '';
    if (!isReadableConnector(sources, target, boardRect)) {
      return sources
        .filter((source) => isReadableConnector([source], target, boardRect))
        .map((source) => {
          const points = connectionPoint(source, target);
          return `<path class="flow-path is-faded" d="${pathBetween(points.from, points.to)}"></path>`;
        })
        .join('');
    }
    const tallJoin = sources.length > 1 && Math.abs(sources[0].top - sources[sources.length - 1].top) > 240;
    const faded = tallJoin ? ' is-faded' : '';
    return `<path class="flow-path${faded}" d="${bracketPath(sources, target)}"></path>`;
  }).join('');

  const centralPaths = CENTRAL_FLOW_EDGES.map(([fromId, toId]) => {
    const source = rectFor(fromId);
    const target = rectFor(toId);
    if (!source || !target) return '';
    const points = connectionPoint(source, target);
    return `<path class="flow-path central-flow" d="${pathBetween(points.from, points.to)}"></path>`;
  }).join('');

  const finalSources = ['M101', 'M102'].map(rectFor).filter(Boolean);
  const finalTarget = rectFor('M104');
  const finalPath = finalSources.length === 2 && finalTarget
    ? `<path class="flow-path central-flow final-flow" d="${finalForkPath(finalSources, finalTarget)}"></path>`
    : '';

  svg.innerHTML = `<defs>
    <marker id="flowArrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 0 L 8 4 L 0 8 z"></path>
    </marker>
  </defs>${paths}${centralPaths}${finalPath}`;
}

function moveGhost(event) {
  if (!pointerDrag.ghost) return;
  pointerDrag.ghost.style.transform = `translate(${event.clientX + 12}px, ${event.clientY + 12}px)`;
}

function stopPointerDrag(event) {
  if (!pointerDrag.active) return;
  const teamName = pointerDrag.team;
  const ghost = pointerDrag.ghost;
  pointerDrag.active = false;
  pointerDrag.team = '';
  pointerDrag.ghost = null;
  ghost?.remove();
  document.body.classList.remove('is-pointer-dragging');

  const target = document.elementFromPoint(event.clientX, event.clientY);
  const reorderTarget = target?.closest('.reorder-zone');
  if (reorderTarget && teamName) {
    moveTeamInGroup(teamName, reorderTarget.dataset.groupId, Number(reorderTarget.dataset.rowIndex));
    return;
  }

  const dropTarget = target?.closest('.drop-zone');
  if (dropTarget && teamName) {
    if (!canTeamGoInSlot(dropTarget.dataset.slotId, dropTarget.dataset.sourceLabel || '', teamName)) {
      rejectDrop(dropTarget);
      return;
    }
    setSlot(dropTarget.dataset.slotId, teamName);
  }
}

function startPointerDrag(event, teamName) {
  if (event.button !== undefined && event.button !== 0) return;
  event.preventDefault();
  pointerDrag.active = true;
  pointerDrag.team = teamName;
  pointerDrag.ghost = document.createElement('div');
  pointerDrag.ghost.className = 'drag-ghost';
  pointerDrag.ghost.textContent = lookup(teamName).name;
  document.body.append(pointerDrag.ghost);
  document.body.classList.add('is-pointer-dragging');
  moveGhost(event);
}

function attachInteractions() {
  document.querySelectorAll('.team-token, .slot-filled-team').forEach((card) => {
    card.addEventListener('pointerdown', (event) => startPointerDrag(event, card.dataset.team));
    card.addEventListener('dragstart', (event) => {
      const payload = { team: card.dataset.team };
      event.dataTransfer.setData('application/json', JSON.stringify(payload));
      event.dataTransfer.setData('text/plain', payload.team);
      event.dataTransfer.effectAllowed = 'copy';
      card.classList.add('dragging');
    });
    card.addEventListener('dragend', () => card.classList.remove('dragging'));
  });

  document.querySelectorAll('.drop-zone, .reorder-zone').forEach((zone) => {
    zone.addEventListener('dragover', (event) => {
      event.preventDefault();
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', (event) => {
      event.preventDefault();
      zone.classList.remove('drag-over');
      const payload = readPayload(event);
      if (!payload?.team) return;
      if (zone.classList.contains('reorder-zone')) {
        moveTeamInGroup(payload.team, zone.dataset.groupId, Number(zone.dataset.rowIndex));
      } else {
        if (!canTeamGoInSlot(zone.dataset.slotId, zone.dataset.sourceLabel || '', payload.team)) {
          rejectDrop(zone);
          return;
        }
        setSlot(zone.dataset.slotId, payload.team);
      }
    });
  });
}

document.addEventListener('pointermove', (event) => {
  if (pointerDrag.active) moveGhost(event);
});

document.addEventListener('pointerup', stopPointerDrag);

function resetBoard() {
  state.slots.clear();
  state.groupOrder = new Map(DATA.groups.map((group) => [group.id, [...group.teams]]));
  state.simulationReady = false;
  state.potSelections.clear();
  render();
}

$('#resetBoard').addEventListener('click', resetBoard);
$('#resetPotMode').addEventListener('click', resetBoard);

$('#simulateFullBracket').addEventListener('click', simulateFullBracket);
$('#generatePotBracket').addEventListener('click', generatePotBracket);

document.querySelectorAll('.app-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    state.activeTab = tab.dataset.tab || 'bracket';
    render();
  });
});

$('#potControls').addEventListener('change', (event) => {
  const select = event.target.closest('select[data-pot-id]');
  if (!select) return;
  const potId = select.dataset.potId;
  if (select.value) {
    state.potSelections.set(potId, select.value);
  } else {
    state.potSelections.delete(potId);
  }
  render();
});

document.addEventListener('click', (event) => {
  if (event.target.closest('#simulateBoard')) simulateBoard();
});

render();
