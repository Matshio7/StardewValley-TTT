/* Allgemeine JS-Funktionen */
document.addEventListener('DOMContentLoaded', () => {
    const profitForm = document.getElementById('profit-form');
    if (profitForm) {
        profitForm.addEventListener('submit', e => {
            e.preventDefault();
            const price = parseFloat(document.getElementById('cropPrice').value);
            const qty = parseFloat(document.getElementById('cropQty').value);
            const result = price * qty;
            document.getElementById('profit-result').textContent = `Gewinn: ${result}g`;
        });
    }

    const priceForm = document.getElementById('price-form');
    if (priceForm) {
        priceForm.addEventListener('submit', e => {
            e.preventDefault();
            const buy = parseFloat(document.getElementById('buyPrice').value);
            const sell = parseFloat(document.getElementById('sellPrice').value);
            const qty = parseFloat(document.getElementById('quantity').value);
            const result = (sell - buy) * qty;
            document.getElementById('price-result').textContent = `Gewinn: ${result}g`;
        });
    }

    const upgradeForm = document.getElementById('upgrade-form');
    if (upgradeForm) {
        upgradeForm.addEventListener('submit', e => {
            e.preventDefault();
            const level = document.getElementById('toolLevel').value;
            let cost = 0;
            if (level === '1') cost = 2000;
            if (level === '2') cost = 5000;
            if (level === '3') cost = 10000;
            document.getElementById('upgrade-result').textContent = `Kosten: ${cost}g`;
        });
    }

    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        const list = document.getElementById('comment-list');
        commentForm.addEventListener('submit', e => {
            e.preventDefault();
            const name = document.getElementById('comment-name').value;
            const text = document.getElementById('comment-text').value;
            const li = document.createElement('li');
            li.textContent = `${name}: ${text}`;
            list.appendChild(li);
            commentForm.reset();
        });
    }

    // Leaflet Map initialisieren
    if (document.getElementById('worldmap')) {
        const map = L.map('worldmap').setView([0,0], 2);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap'
        }).addTo(map);
    }

    // Sections einblenden
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.classList.add('hidden'));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(sec => observer.observe(sec));
});
