# RoomReady Product Backlog v1.0

**Project:** RoomReady: Study Room Reservation System
**Version:** 1.0
**Date:** June 13, 2026
**Team:** Aaron Graf, Dr. Valerie Ann Haywood, and Aaron Tobias

---

## Epic 1: Room Availability Dashboard

### US-001: View Study Room Dashboard

**User Story:** As a library patron, I want to view a dashboard of study rooms so that I can quickly see which rooms are available.

**Priority:** Must Have
**Story Points:** 3

**Acceptance Criteria:**

1. The dashboard displays multiple public library study rooms.
2. Each room card includes a room name or number.
3. The dashboard loads in a modern web browser.

---

### US-002: View Available or Reserved Status

**User Story:** As a library patron, I want each room to show an Available or Reserved status so that I know which rooms I can choose.

**Priority:** Must Have
**Story Points:** 3

**Acceptance Criteria:**

1. Available rooms display an Available label.
2. Reserved rooms display a Reserved label.
3. Status labels are visually easy to identify.

---

### US-003: Identify Unavailable Rooms

**User Story:** As a library patron, I want reserved rooms to be unavailable for selection so that I do not accidentally reserve a room already in use.

**Priority:** Must Have
**Story Points:** 2

**Acceptance Criteria:**

1. Reserved rooms cannot be selected.
2. Reserved rooms do not route to the reservation form.
3. The interface clearly shows that reserved rooms are unavailable.

---

### US-004: View Room Status as Library Staff

**User Story:** As a library staff member, I want the dashboard to show current room status so that I can answer patron questions quickly.

**Priority:** Should Have
**Story Points:** 2

**Acceptance Criteria:**

1. Staff can view the same room status dashboard.
2. Room statuses are visible without opening another screen.
3. The dashboard reduces the need to manually check rooms.

---

## Epic 2: Patron Reservation Flow

### US-005: Select an Available Room

**User Story:** As a library patron, I want to select an available room so that I can begin the reservation process.

**Priority:** Must Have
**Story Points:** 3

**Acceptance Criteria:**

1. Available rooms include a Reserve option.
2. Selecting a room opens the reservation form.
3. The selected room information carries into the form.

---

### US-006: Enter Reservation Details

**User Story:** As a library patron, I want to enter basic reservation details so that the library knows who reserved the room.

**Priority:** Must Have
**Story Points:** 3

**Acceptance Criteria:**

1. The form includes basic patron information fields.
2. Required fields are clearly marked.
3. The form can be submitted after required information is entered.

---

### US-007: Submit Reservation

**User Story:** As a library patron, I want to submit my reservation so that the room is held for my use.

**Priority:** Must Have
**Story Points:** 3

**Acceptance Criteria:**

1. The Submit button completes the reservation flow.
2. The system processes the reservation using simulated frontend data.
3. The patron receives confirmation after submission.

---

### US-008: Receive Reservation Confirmation

**User Story:** As a library patron, I want to see a confirmation message so that I know my reservation was completed successfully.

**Priority:** Must Have
**Story Points:** 2

**Acceptance Criteria:**

1. A confirmation message appears after submission.
2. The confirmation identifies the selected room.
3. The patron can return to the dashboard after confirmation.

---

## Epic 3: Prototype State Management and Demo Readiness

### US-009: Update Room Status After Reservation

**User Story:** As a library patron, I want the reserved room status to update after submission so that I can see that my reservation was captured.

**Priority:** Must Have
**Story Points:** 5

**Acceptance Criteria:**

1. The selected room changes from Available to Reserved.
2. The updated status appears on the dashboard.
3. The change is visible during the live demo.

---

### US-010: Use Simulated Frontend Data

**User Story:** As an engineering team member, I want the prototype to use simulated frontend data so that we can demonstrate the workflow without a production backend.

**Priority:** Must Have
**Story Points:** 3

**Acceptance Criteria:**

1. Room data is stored in the frontend prototype.
2. Reservation state changes without a production database.
3. The team can explain how simulated state supports the POC.

---

### US-011: Provide Prototype Run Instructions

**User Story:** As an engineering team member, I want simple run instructions so that faculty can understand how the prototype launches.

**Priority:** Should Have
**Story Points:** 2

**Acceptance Criteria:**

1. `/poc/README.md` includes setup instructions.
2. Instructions explain how to start or open the prototype.
3. Instructions describe the demo flow.

---

### US-012: Prepare Repeatable Demo Flow

**User Story:** As a faculty evaluator, I want the demo flow to be clear and repeatable so that I can evaluate the proof of concept.

**Priority:** Must Have
**Story Points:** 3

**Acceptance Criteria:**

1. The demo starts at the dashboard.
2. The demo shows room selection, form submission, and status update.
3. The team can repeat the flow during presentation or Q&A.

---

## Backlog Summary

| Epic                                                  | Story IDs                      | Total Stories |
| ----------------------------------------------------- | ------------------------------ | ------------: |
| Epic 1: Room Availability Dashboard                   | US-001, US-002, US-003, US-004 |             4 |
| Epic 2: Patron Reservation Flow                       | US-005, US-006, US-007, US-008 |             4 |
| Epic 3: Prototype State Management and Demo Readiness | US-009, US-010, US-011, US-012 |             4 |

**Total User Stories:** 12
**Total Story Points:** 34

---

## MoSCoW Priority Summary

| Priority               | Story IDs                                                                                                                               |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Must Have              | US-001, US-002, US-003, US-005, US-006, US-007, US-008, US-009, US-010, US-012                                                          |
| Should Have            | US-004, US-011                                                                                                                          |
| Could Have             | None for Sprint 0 POC                                                                                                                   |
| Won't Have This Sprint | Authentication, future scheduling, recurring reservations, production database, email cancellation links, library-wide event scheduling |
