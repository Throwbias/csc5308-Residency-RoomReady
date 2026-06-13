# RoomReady - Proof of Concept (POC)

This directory contains the frontend prototype for RoomReady. The current POC focuses on browsing rooms, viewing room metadata, filtering/searching room cards, and booking via browser-local persistence.

## Technical Stack
* [cite_start]**Frontend:** HTML5, CSS3 [cite: 193]
* [cite_start]**Logic & State:** Vanilla JavaScript (ES6) [cite: 193]
* [cite_start]**Persistence:** `localStorage` (simulated frontend data; no production backend) [cite: 193]

## The Demo Flow
During the live demo, we will showcase the current prototype flow:
1. Open `index.html` or `roomready.html` to view the active RoomReady dashboard.
2. The page displays room cards with status badges, capacity, location, description, and feature chips.
3. Use search and filters to narrow rooms by keyword or room type.
4. Click the "Book Room" button on an available room to open the reservation modal.
5. Submit the booking form and see the booking saved to `localStorage`, the footer booking list update, and the room status immediately change to `Booked`.

## Local Setup & Run Instructions

Because this is a pure frontend prototype, there are no dependencies to install, no build steps, and no servers to configure.

**1. Navigate to the POC directory:**
\`\`\`bash
cd poc
\`\`\`

**2. Run the application:**
Open `index.html` or `roomready.html` directly in any modern web browser.

*Optional:* In VS Code, right-click the HTML file and choose **"Open with Live Server"** for a local preview that automatically refreshes on save.

## Notes
* The prototype is static and uses hardcoded room cards plus browser-local storage for bookings.
* `poc/styles.css` and the old `index.html` have been archived to `poc/legacy/` and are not used by the current prototype.
* `poc/roomready.css` is the active stylesheet used by the HTML pages.