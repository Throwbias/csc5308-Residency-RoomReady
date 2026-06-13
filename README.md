# RoomReady - Proof of Concept (Option A)

This directory contains the frontend prototype for RoomReady. The current POC focuses on browsing rooms, viewing room metadata, filtering/searching room cards, and booking via browser-local persistence.

## The Demo Flow
During the demo, we will showcase the current prototype flow:
1. Open `poc/index.html` or `poc/roomready.html` to view the active RoomReady demo.
2. The page displays room cards with status badges, capacity, location, description, and feature chips.
3. Use search and filters to narrow rooms by keyword or room type.
4. Click the book button on an available room to open the booking modal.
5. Submit the booking form and see the booking saved to `localStorage`, the footer booking list update, and the room status change to `Booked`.

## Technical Stack
* **Frontend:** HTML5, CSS3
* **Logic & State:** Vanilla JavaScript (ES6)
* **Persistence:** `localStorage`

## Current Files
* `poc/roomready.html` — active entry page for the prototype
* `poc/roomready.css` — active stylesheet for the prototype
* `poc/app.js` — booking logic, filters/search, persistence, and UI updates
* `poc/legacy/` — archived legacy prototype files, including the former `index.html`

## Local Setup & Run Instructions

Because this is a pure frontend prototype, there are no dependencies to install or servers to configure.

**1. Navigate to the POC directory:**
\`\`\`bash
cd poc
\`\`\`

**2. Run the application:**
Open `poc/index.html` or `poc/roomready.html` in a browser.

*Optional:* In VS Code, right-click the HTML file and choose **"Open with Live Server"** for a local preview.

## Notes
* The prototype is static and uses hardcoded room cards plus browser-local storage for bookings.
* `poc/styles.css` has been archived to `poc/legacy/` and is not used by the current prototype.
* `poc/roomready.css` is the active stylesheet used by both HTML pages.