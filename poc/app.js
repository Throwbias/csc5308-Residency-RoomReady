/* RoomReady booking frontend (no backend) */
const STORAGE_KEY = 'roomready_bookings_v1';

const bookingsList = document.getElementById('bookings-list');
const bookingModal = document.getElementById('booking-modal');
const bookingForm = document.getElementById('booking-form');
const cancelBtn = document.getElementById('cancel-btn');
const toggleFiltersBtn = document.getElementById('toggle-filters');
const filtersPanel = document.getElementById('filters-panel');
const searchInput = document.getElementById('room-search');

let bookings = [];

function loadBookings() {
    try {
        bookings = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (e) { bookings = []; }
}

function saveBookings() { localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings)); }

function initRoomControls() {
    const cards = Array.from(document.querySelectorAll('.room-card'));
    cards.forEach((card, idx) => {
        const id = card.getAttribute('data-room-id') || String(idx+1);
        card.dataset.roomId = id;

        // create book button area
        let body = card.querySelector('.room-card__body');
        if (!body) return;

        let actions = card.querySelector('.room-card__actions');
        if (!actions) {
            actions = document.createElement('div');
            actions.className = 'room-card__actions';
            body.appendChild(actions);
        }

        const statusEl = card.querySelector('.room-card__status');
        const statusText = statusEl ? statusEl.textContent.trim().toLowerCase() : 'available';
        const nextAvailable = card.dataset.roomNext || '';
        const isBooked = bookings.some(b => String(b.roomId) === String(id));

        const bookBtn = document.createElement('button');
        bookBtn.className = 'btn book-btn';
        if (isBooked) {
            bookBtn.textContent = 'Booked';
            bookBtn.disabled = true;
            bookBtn.classList.add('btn-disabled');
        } else if (statusText.includes('available')) {
            bookBtn.textContent = 'Book Room';
            bookBtn.classList.add('btn-secondary');
        } else {
            bookBtn.textContent = nextAvailable ? 'Unavailable' : 'Request';
            bookBtn.classList.add('btn-outline');
            bookBtn.disabled = true;
        }

        bookBtn.addEventListener('click', () => {
            if (!bookBtn.disabled) openBookingModal(card);
        });
        actions.appendChild(bookBtn);
    });
}

function applyFilters() {
    const term = (searchInput?.value || '').toLowerCase().trim();
    const activeChip = filtersPanel?.querySelector('.filter-chip.active');
    const filter = activeChip ? activeChip.dataset.filter : 'all';

    document.querySelectorAll('.room-card').forEach(card => {
        const title = (card.querySelector('h2')?.innerText || '').toLowerCase();
        const desc = (card.querySelector('p')?.innerText || '').toLowerCase();
        let visible = true;

        if (term) {
            visible = title.includes(term) || desc.includes(term);
        }

        if (visible && filter && filter !== 'all') {
            if (filter === 'quiet') visible = title.includes('quiet') || desc.includes('quiet') || desc.includes('silent');
            if (filter === 'group') visible = title.includes('group') || desc.includes('group') || desc.includes('table');
            if (filter === 'presentation') visible = title.includes('presentation') || desc.includes('projector') || desc.includes('presentation');
        }

        card.style.display = visible ? '' : 'none';
    });
}

function openBookingModal(card) {
    const id = card.dataset.roomId;
    const title = card.querySelector('h2') ? card.querySelector('h2').innerText : 'Room';
    const location = card.dataset.roomLocation || '';
    const capacity = card.dataset.roomCapacity || '';
    const features = (card.dataset.roomFeatures || '')
        .split(',')
        .map(feature => feature.trim())
        .filter(Boolean);

    document.getElementById('selected-room-name').innerText = `Booking: ${title}`;
    document.getElementById('room-id-input').value = id;
    document.getElementById('booking-room-meta').textContent = [location, capacity ? `${capacity} seats` : '']
        .filter(Boolean)
        .join(' · ');
    document.getElementById('booking-room-features').innerHTML = features
        .map(feature => `<span class="feature-chip">${feature}</span>`)
        .join('');

    bookingModal.classList.remove('hidden');
    bookingModal.setAttribute('aria-hidden', 'false');
}

function closeBookingModal() {
    bookingForm.reset();
    const roomMeta = document.getElementById('booking-room-meta');
    const roomFeatures = document.getElementById('booking-room-features');
    if (roomMeta) roomMeta.textContent = '';
    if (roomFeatures) roomFeatures.innerHTML = '';
    bookingModal.classList.add('hidden');
    bookingModal.setAttribute('aria-hidden', 'true');
}

function renderBookingsList() {
    bookingsList.innerHTML = '';
    if (bookings.length === 0) {
        bookingsList.innerHTML = '<p>No bookings yet.</p>';
        return;
    }

    bookings.forEach(b => {
        const item = document.createElement('div');
        item.className = 'booking-item';
        item.innerHTML = `
            <div>
                <div class="meta"><strong>${b.roomName}</strong> — ${b.reserver}</div>
                <div class="meta">${b.date} @ ${b.time}</div>
            </div>
            <div class="actions">
                <button class="btn btn-outline cancel-booking" data-id="${b.id}">Cancel</button>
            </div>
        `;
        bookingsList.appendChild(item);
    });

    // attach cancel handlers
    Array.from(bookingsList.querySelectorAll('.cancel-booking')).forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.id;
            const bookingToRemove = bookings.find(x => String(x.id) === String(id));
            bookings = bookings.filter(x => String(x.id) !== String(id));
            saveBookings();
            renderBookingsList();
            refreshRoomBadges();
            // re-enable book button for that room
            if (bookingToRemove) {
                const bookBtn = document.querySelector(`.room-card[data-room-id="${bookingToRemove.roomId}"] .book-btn`);
                if (bookBtn) { bookBtn.disabled = false; bookBtn.textContent = 'Book Room'; bookBtn.classList.remove('btn-disabled'); }
            }
        });
    });
}

function updateAvailableCount() {
    const cards = Array.from(document.querySelectorAll('.room-card'));
    let count = 0;
    cards.forEach(card => {
        const statusEl = card.querySelector('.room-card__status');
        const text = statusEl ? statusEl.textContent.trim().toLowerCase() : '';
        if (text.includes('available')) count++;
    });
    const el = document.getElementById('available-count');
    if (el) el.textContent = String(count);
}

function refreshRoomBadges() {
    const cards = Array.from(document.querySelectorAll('.room-card'));
    cards.forEach(card => {
        const id = card.dataset.roomId;
        const statusEl = card.querySelector('.room-card__status');
        const booked = bookings.find(b => String(b.roomId) === String(id));
        const roomStatus = card.dataset.roomStatus || 'available';
        const nextAvailable = card.dataset.roomNext || '';
        const bookBtn = card.querySelector('.room-card__actions .book-btn');

        if (statusEl) {
            if (booked) {
                statusEl.textContent = 'Booked';
                statusEl.className = 'room-card__status badge badge-warning';
            } else if (roomStatus === 'available') {
                statusEl.textContent = 'Available now';
                statusEl.className = 'room-card__status badge badge-success';
            } else if (roomStatus === 'occupied' || roomStatus === 'unavailable') {
                statusEl.textContent = nextAvailable ? 'Unavailable' : 'Occupied';
                statusEl.className = 'room-card__status badge badge-danger';
            }
        }

        if (bookBtn) {
            if (booked) {
                bookBtn.textContent = 'Booked';
                bookBtn.disabled = true;
                bookBtn.classList.add('btn-disabled');
                bookBtn.classList.remove('btn-secondary', 'btn-outline');
            } else if (roomStatus === 'available') {
                bookBtn.textContent = 'Book Room';
                bookBtn.disabled = false;
                bookBtn.classList.remove('btn-disabled', 'btn-outline');
                bookBtn.classList.add('btn-secondary');
            } else {
                bookBtn.textContent = 'Unavailable';
                bookBtn.disabled = true;
                bookBtn.classList.remove('btn-secondary');
                bookBtn.classList.add('btn-outline', 'btn-disabled');
            }
        }
    });
    updateAvailableCount();
}

bookingForm && bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const roomId = document.getElementById('room-id-input').value;
    const reserver = document.getElementById('reserver-name').value.trim();
    const date = document.getElementById('booking-date').value;
    const time = document.getElementById('booking-time').value;
    const roomCard = document.querySelector(`.room-card[data-room-id="${roomId}"]`);
    const roomName = roomCard ? (roomCard.querySelector('h2')?.innerText || `Room ${roomId}`) : `Room ${roomId}`;

    const booking = { id: Date.now(), roomId, roomName, reserver, date, time, createdAt: new Date().toISOString() };
    bookings.push(booking);
    saveBookings();
    closeBookingModal();
    renderBookingsList();
    refreshRoomBadges();
    // disable the book button for this room
    const bookBtn = document.querySelector(`.room-card[data-room-id="${roomId}"] .book-btn`);
    if (bookBtn) { bookBtn.disabled = true; bookBtn.textContent = 'Booked'; bookBtn.classList.add('btn-disabled'); }
});

cancelBtn && cancelBtn.addEventListener('click', closeBookingModal);

// filter toggle
toggleFiltersBtn && toggleFiltersBtn.addEventListener('click', () => {
    if (!filtersPanel) return;
    filtersPanel.classList.toggle('open');
});

// filter chip clicks
if (filtersPanel) {
    Array.from(filtersPanel.querySelectorAll('.filter-chip')).forEach(chip => {
        chip.addEventListener('click', (e) => {
            filtersPanel.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            applyFilters();
        });
    });
}

// search
searchInput && searchInput.addEventListener('input', () => applyFilters());

// initialize
loadBookings();
initRoomControls();
renderBookingsList();
refreshRoomBadges();