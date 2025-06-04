let currentRank = 'all';
let currentDays = 1;
let currentSortField = 'win_rate';

const rankMap = {
    'ALL RANKS': 'all',
    'EPIC': 'epic',
    'MYTHIC': 'mythic',
    'LEGEND': 'legend',
    'MYTHICAL HONOR': 'honor',
    'MYTHIC GLORY': 'glory'
};

const daysMap = {
    'PAST 1 DAY': 1,
    'PAST 3 DAYS': 3,
    'PAST 7 DAYS': 7,
    'PAST 15 DAYS': 15,
    'PAST 30 DAYS': 30
};

const sortMap = {
    'BY PICK RATE': 'pick_rate',
    'BY BAN RATE': 'ban_rate',
    'BY WIN RATE': 'win_rate'
};

const rankings = document.getElementById('rankings');
const rankingsTable = document.getElementById('tables');
let heroRankings = {};
let heroData = {};

async function getHeroRankings() {
    showLoader();
    const url = `https://corsproxy.io/?https://mlbb-stats.ridwaanhall.com/api/hero-rank?days=${currentDays}&rank=${currentRank}&size=10&index=0&sort_field=${currentSortField}&sort_order=desc`;
    const response = await fetch(url);
    const data = await response.json();
    heroRankings = data.data.records;
    await displayTop3();
    await displayTop10();
}

async function getHeroData(heroID) {
    const url = `https://corsproxy.io/?https://mlbb-stats.ridwaanhall.com/api/hero-detail/` + heroID;
    const response = await fetch(url);
    const data = await response.json();
    return data.data.records[0].data;
}

async function displayTop3() {
    const rank1 = heroRankings[0].data.main_hero.data.name;
    const rank2 = heroRankings[1].data.main_hero.data.name;
    const rank3 = heroRankings[2].data.main_hero.data.name;

    const heroID1 = heroRankings[0].data.main_heroid;
    const heroID2 = heroRankings[1].data.main_heroid;
    const heroID3 = heroRankings[2].data.main_heroid;

    const heroData1 = await getHeroData(heroID1);
    const heroData2 = await getHeroData(heroID2);
    const heroData3 = await getHeroData(heroID3);

    const bodyIcon1 = heroData1.head_big;
    const bodyIcon2 = heroData2.head_big;
    const bodyIcon3 = heroData3.head_big;

    rankings.innerHTML = `
        <div class="ranked-hero rank-2">
            <p class="display-4">2ND</p>
            <p class="name">${rank2.toUpperCase()}</p>
            <img class="hero-icon" src="${bodyIcon2}">
            <img class="gradient" src="assets/img/gradient.png">
        </div>
        <div class="ranked-hero rank-1">
            <p class="display-2">1ST</p>
            <p class="name">${rank1.toUpperCase()}</p>
            <img class="hero-icon" src="${bodyIcon1}">
            <img class="gradient" src="assets/img/gradient.png">
        </div>
        <div class="ranked-hero rank-3">
            <p class="display-4">3RD</p>
            <p class="name">${rank3.toUpperCase()}</p>
            <img class="hero-icon" src="${bodyIcon3}">
            <img class="gradient" src="assets/img/gradient.png">
        </div> 
    `;
}

async function displayTop10() {

    rankingsTable.innerHTML = '';

    heroRankings.forEach((heroRanking, index) => {
        const heroName = heroRanking.data.main_hero.data.name;
        const heroIcon = heroRanking.data.main_hero.data.head;
        const pickRate = (heroRanking.data.main_hero_appearance_rate * 100).toFixed(2);
        const winRate = (heroRanking.data.main_hero_win_rate * 100).toFixed(2);
        const banRate = (heroRanking.data.main_hero_ban_rate * 100).toFixed(2);
        const counteringHeroes = heroRanking.data.sub_hero;

        let counteringImgs = '';
        counteringHeroes.forEach(counter => {
            const headImg = counter.hero?.data?.head;
            if (headImg) {
                counteringImgs += `<img src="${headImg}" width="24">`;
            }
        });

        rankingsTable.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td class="text-start">
                    <img src="${heroIcon}" alt="${heroName}" width="24">
                    <strong>${heroName}</strong>
                </td>
                <td>${pickRate}%</td>
                <td>${winRate}%</td>
                <td class="d-none d-lg-block">${banRate}%</td>
                <td class="d-none d-lg-table-cell">
                    ${counteringImgs}
                </td>
            </tr>`;
    });
}

const filters = document.getElementById('filters');

filters.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const txt = btn.textContent.trim().toUpperCase();

        if (rankMap[txt]) {
            currentRank = rankMap[txt];
            setActiveButton(btn);
        } else if (daysMap[txt]) {
            currentDays = daysMap[txt];
            setActiveButton(btn);
        } else if (sortMap[txt]) {
            currentSortField = sortMap[txt];
            setActiveButton(btn);
        } else {
            return;
        }

        getHeroRankings();
    });
});

function setActiveButton(clickedBtn) {
    const siblings = clickedBtn.parentElement.querySelectorAll('.btn');
    siblings.forEach(b => b.classList.remove('active'));
    clickedBtn.classList.add('active');
}

function showLoader() {
    rankings.innerHTML = `
        <div class="loader-wrapper d-flex justify-content-center align-items-center">
            <div class="loader"></div>
        </div>
    `;

    rankingsTable.innerHTML = `
        <div class="loader-wrapper d-flex justify-content-center align-items-center text-center" style="height:700px">
            <div class="loader"></div>
        </div>
    `;
}

getHeroRankings();

