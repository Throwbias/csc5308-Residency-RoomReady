// Legacy backup of app.js
// 1. Mock Database (Local State)
let rooms = [
    { id: 1, name: 'Studio A', status: 'Available' },
    { id: 2, name: 'Studio B', status: 'Booked' },
    { id: 3, name: 'Conference Rm 1', status: 'Available' },
    { id: 4, name: 'Quiet Pod', status: 'Available' }
];

// 2. DOM Elements
const dashboardView = document.getElementById('dashboard-view');
const bookingView = document.getElementById('booking-view');
const roomGrid = document.getElementById('room-grid');
const bookingForm = document.getElementById('booking-form');
const cancelBtn = document.getElementById('cancel-btn');
const dateDisplay = document.getElementById('current-date-display');

// 3. Initialize Date 
function setHeaderDate() {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const yyyy = today.getFullYear();
    dateDisplay.innerText = `Date: ${mm}${dd}${yyyy}`;
}

// 4. Render the Dashboard
function renderRooms() {
    roomGrid.innerHTML = ''; // Clear existing
    
    rooms.forEach(room => {
        const card = document.createElement('div');
        card.className = `room-card ${room.status.toLowerCase()}`;
        
        card.innerHTML = `
            <h3>${room.name}</h3>
            <span class="status-badge">${room.status}</span>
        `;

        // Only allow clicking if the room is available
        if (room.status === 'Available') {
            card.onclick = () => openBookingForm(room);
        }

        roomGrid.appendChild(card);
    });
}

// 5. Navigation Logic
function openBookingForm(room) {
    document.getElementById('selected-room-name').innerText = `Booking: ${room.name}`;
    document.getElementById('room-id-input').value = room.id;
    
    dashboardView.classList.add('hidden');
    bookingView.classList.remove('hidden');
}

function closeBookingForm() {
    bookingForm.reset();
    bookingView.classList.add('hidden');
    dashboardView.classList.remove('hidden');
}

// 6. Handle the Reservation Submission
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    
    const roomId = parseInt(document.getElementById('room-id-input').value);
    
    // Find the room in our mock database and update it
    const roomIndex = rooms.findIndex(r => r.id === roomId);
    if (roomIndex !== -1) {
        rooms[roomIndex].status = 'Booked';
    }
    
    // Re-render and return to dashboard
    renderRooms();
    closeBookingForm();
});

cancelBtn.addEventListener('click', closeBookingForm);

// 7. Boot up the app
setHeaderDate();
renderRooms();
