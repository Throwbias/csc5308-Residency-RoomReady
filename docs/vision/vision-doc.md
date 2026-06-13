# RoomReady: Study Room Reservation System - Vision Document v1.0

**Authors:** Aaron Graf, Dr. Valerie Ann Haywood, and Aaron Tobias
**Course:** MCS 5308: Software Engineering
**Institution:** College of Arts and Sciences, Concordia University Texas
**Instructor:** Dr. Moody Amakobe
**Version:** 1.0
**Date:** June 13, 2026

---

## Problem Statement

Many public library patrons need quiet rooms for studying, tutoring, remote work, small meetings, or focused collaboration, but study rooms can be difficult to access when demand is high and availability is unclear. At Round Rock Public Library, patrons must follow room policies such as library card eligibility, room capacity limits, advance reservation limits, and weekly reservation limits. The library has two youth study rooms on the second floor and six adult study rooms on the third floor, with each room accommodating up to four people.

When patrons cannot quickly determine which rooms are available, they may lose valuable study time, interrupt staff for help, or become frustrated when rooms are already reserved. Library staff also spend time answering room availability questions, explaining policies, managing borrowed items such as HDMI cables, and helping patrons navigate reservation rules. RoomReady addresses this problem by simplifying the immediate room availability and reservation experience through a kiosk-style web interface.

---

## Target Users

| User Type                 | Description                                                                                        | Primary Goal                                                  | Technical Level | Usage Frequency |
| ------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | --------------- | --------------- |
| Library Patrons           | Public library users who need a quiet room for studying, tutoring, remote work, or small meetings. | Quickly see which study rooms are available and reserve one.  | Low-Moderate    | Daily           |
| Library Staff             | Staff who assist patrons and monitor room usage during library hours.                              | View current room status and help patrons reserve open rooms. | Low-Moderate    | Daily           |
| Library Event Coordinator | Library manager or coordinator responsible for understanding room demand and space usage.          | Monitor room status and identify patterns in study room use.  | Moderate        | Weekly/Monthly  |

**Table 1.** RoomReady Target User Profiles: Goals, Technical Proficiency, and Interaction Frequency.

---

## Proposed Solution

RoomReady is a kiosk-style web application that helps public library patrons quickly identify and reserve available study rooms. The proof of concept demonstrates a simple end-to-end flow: a patron views room availability, selects an available room, submits a reservation form, and sees the room status update from Available to Reserved.

For this version, RoomReady focuses on the core user experience rather than full production scheduling. The system does not attempt to manage future date/time reservations, recurring bookings, patron authentication, check-ins, automated email cancellation links, or library-wide event scheduling. By focusing on a clear, touch-friendly kiosk interface, RoomReady reduces navigation friction and helps patrons complete the reservation process with minimal staff intervention.

---

## Key Features

| # | Key Feature                       | Description                                                                                   |
| - | --------------------------------- | --------------------------------------------------------------------------------------------- |
| 1 | Study Room Availability Dashboard | Displays public library study rooms with a clear Available or Reserved status.                |
| 2 | Room Selection                    | Allows patrons to select a room marked Available.                                             |
| 3 | Reservation Form                  | Collects basic reservation details for the selected study room.                               |
| 4 | Visible Status Update             | Updates the selected room from Available to Reserved after the reservation form is submitted. |
| 5 | Reservation Confirmation          | Displays a clear confirmation message so the patron knows the reservation was completed.      |

**Table 2.** RoomReady System Capabilities and Functionality Overview.

---

## Success Criteria

| # | Success Criterion                                                                                                  | How It Will Be Verified                                             |
| - | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| 1 | A patron can view a list of public library study rooms and clearly identify which rooms are Available or Reserved. | Demonstrated on the main dashboard during the live POC walkthrough. |
| 2 | A patron can select an Available room and navigate to the reservation form.                                        | Demonstrated during the end-to-end demo flow.                       |
| 3 | A patron can submit basic reservation details through the form.                                                    | Verified through form submission during the live demo.              |
| 4 | After submission, the selected room visibly changes from Available to Reserved.                                    | Demonstrated when the prototype returns to the dashboard.           |
| 5 | The POC can run locally using the setup instructions in `/poc/README.md`.                                          | Verified by launching the prototype before the Sunday presentation. |

**Table 3.** Measurable Performance Benchmarks and Quality Assurance Metrics.

---

## Constraints

| Category   | Description                                                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Constraint | **Timeline:** The Proof of Concept must be designed, built, documented, and submitted within the 5-hour Saturday sprint session.                                    |
| Constraint | **Team Size:** The project is limited to a 3-person engineering team with assigned roles: Product Owner, Architect, and Dev Lead.                                   |
| Constraint | **Technology Scope:** The POC must demonstrate a single end-to-end user flow. For this version, the team chose a frontend-only prototype using simulated data.      |
| Assumption | **Technical Environment:** The POC will run in a standard modern web browser.                                                                                       |
| Assumption | **Tool Proficiency:** Team members may use AI coding assistants to accelerate development while maintaining full understanding of all committed code and documents. |
| Constraint | **Version Control:** Project artifacts and code must be maintained in GitHub using the required repository structure and Conventional Commits where possible.       |

**Table 4.** RoomReady Project Guardrails: Structural Constraints and Environmental Assumptions.

---

## Out of Scope

To keep the proof of concept feasible and reliable within the sprint timeframe, the following items are excluded from the current version:

**Future Date and Time Reservations:** RoomReady will show only current availability in the POC. It will not include calendar scheduling, one-hour time blocks, or future booking windows.

**Check-In Workflow:** The system will not require patrons to check in after reserving a room.

**Authentication:** Patrons will not need to create accounts, log in, or validate a library card in the prototype.

**Recurring Reservations:** The system will not support repeating reservations.

**Room Capacity Matching:** The prototype will not filter rooms by group size, party size, or seating capacity.

**Self-Service Cancellation:** The prototype will not send confirmation emails or provide cancellation links.

**Payment Processing:** The system will not handle payments or fees.

**Native Mobile Application:** RoomReady will be built as a responsive web/kiosk prototype, not a native iOS or Android app.

**Full Production Backend:** The prototype will use mock data or local frontend state rather than a production database.

**Library-Wide Event Scheduling:** RoomReady will focus only on study room availability and immediate reservation behavior. It will not manage workshops, meeting rooms, public programming, or full library event calendars in this version.

---

## Ethical Use of AI

The team used AI tools to support brainstorming, document structure, frontend scaffolding, and troubleshooting during the sprint. All final project decisions, scope choices, code commits, and presentation explanations were reviewed and owned by the team. The team is prepared to explain the purpose and behavior of all code included in the RoomReady proof of concept.

---

## References

City of Round Rock. (n.d.). *Reserve a study room*. Round Rock Public Library. Retrieved June 13, 2026, from https://www.roundrocktexas.gov/city-departments/library-home/how-do-i/reserve-a-study-room/

Perera, D., Hilley, W., & Nykolaiszyn, J. M. (2024). Enhancing study room reservations at the Oklahoma State University Libraries: A case study on user interface development. *Journal of Access Services, 21*(1), 53–66. Retrieved from https://doi-org.concordia.idm.oclc.org/10.1080/15367967.2024.2316709

Sommerville, I. (2016). *Software engineering* (10th ed.). Pearson.

Stonebraker, I. (2016). Special libraries and YouCanBook.Me: Easy consultation scheduling through an online booking system. *Public Services Quarterly, 12*(4), 334–338. Retrieved from https://doi-org.concordia.idm.oclc.org/10.1080/15228959.2016.1229148

Wei Xuan. (2021). Implementation of a secure room booking system at the University of Manitoba Libraries. *International Journal of Librarianship, 6*(2), 63–72. Retrieved from https://doi-org.concordia.idm.oclc.org/10.23974/ijol.2021.vol6.2.194
