# RoomReady: Study Room Reservation System - SRS Document

**Authors:** Aaron Graf, Dr. Valerie Ann Haywood, and Aaron Tobias
**Course:** MCS 5308: Software Engineering
**Institution:** College of Arts and Sciences, Concordia University Texas
**Instructor:** Dr. Moody Amakobe
**Version:** 1.0
**Date:** June 13, 2026

---

## Purpose

This document is intended for the RoomReady engineering team and project faculty. It defines the functional and non-functional requirements for the RoomReady Proof of Concept (POC), supporting architectural decisions, development prioritization, and project scope management for the 5-hour Saturday build and Sunday presentation.

## Scope

RoomReady is a kiosk-style web application designed for public library patrons to identify and reserve currently available study rooms.

**In-Scope:** Current room availability display, room selection, reservation form submission, confirmation messaging, and immediate status updates from Available to Reserved using simulated frontend data.

**Out-of-Scope:** User authentication, long-term calendar management, recurring reservations, physical room access control, payment processing, production database integration, and full library event scheduling.

---

## Definitions and Abbreviations

| Term/Abbreviation      | Definition                                                                                                        |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------- |
| FR/NFR                 | Functional Requirement / Non-Functional Requirement                                                               |
| SRS                    | Software Requirements Specification                                                                               |
| RTM                    | Requirements Traceability Matrix                                                                                  |
| POC                    | Proof of Concept                                                                                                  |
| Patron                 | A public library user who wants to reserve a study room.                                                          |
| Availability Dashboard | The main screen that displays each study room and its current Available or Reserved status.                       |
| Simulated Data         | Mock room data stored in the frontend prototype to demonstrate reservation behavior without a production backend. |

**Table 1.** Defines the technical terminology and acronyms used throughout this Software Requirements Specification.

---

## References

Graf, A., Haywood, V. A., & Tobias, A. (2026, June 13). *RoomReady: Study Room Reservation System - Vision Document v1.0*. Concordia University Texas.

Perera, D., Hilley, W., & Nykolaiszyn, J. M. (2024). Enhancing study room reservations at the Oklahoma State University Libraries: A case study on user interface development. *Journal of Access Services, 21*(1), 53–66. Retrieved from https://doi-org.concordia.idm.oclc.org/10.1080/15367967.2024.2316709

Sommerville, I. (2016). *Software engineering* (10th ed.). Pearson.

Stonebraker, I. (2016). Special libraries and YouCanBook.Me: Easy consultation scheduling through an online booking system. *Public Services Quarterly, 12*(4), 334–338. Retrieved from https://doi-org.concordia.idm.oclc.org/10.1080/15228959.2016.1229148

Wei Xuan. (2021). Implementation of a secure room booking system at the University of Manitoba Libraries. *International Journal of Librarianship, 6*(2), 63–72. Retrieved from https://doi-org.concordia.idm.oclc.org/10.23974/ijol.2021.vol6.2.194

---

## Overall Description

### Product Overview

RoomReady is a user-friendly kiosk-style web application that helps public library patrons view current study room availability and reserve an open room through a simple walk-up process. For the proof of concept, the system uses a frontend-only prototype with simulated room data to demonstrate the core reservation workflow. When a patron submits a reservation, the selected room status updates from Available to Reserved in the interface, showing how the system would reduce staff interruptions and make room availability easier to understand.

### Stakeholder Analysis

| Stakeholder               | Role                                                    | Interest in the System                                                            | Constraints / Needs                                                                                   |
| ------------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Library Patrons           | Primary users who reserve study rooms.                  | Easily reserve a study room without staff mediation.                              | Need a simple, fast, and understandable interface.                                                    |
| Library Staff             | Staff who assist patrons and monitor room usage.        | Reduce administrative time spent on manual room questions and scheduling support. | Need clear visibility into room status.                                                               |
| Engineering Team          | Student development team building the proof of concept. | Build a functional POC within the 5-hour Saturday sprint.                         | Limited to a 3-person team, free-tier tools, and a time-boxed build window.                           |
| Library Event Coordinator | Staff member or manager responsible for space planning. | Understand room demand and avoid conflicts with library events or workshops.      | Needs future visibility in later versions, though full event scheduling is out of scope for this POC. |

**Table 2.** Identifies the key individuals and groups influenced by RoomReady, along with their specific interests in the system’s functionality.

---

## Referenced User Stories

| ID     | User Story                                                                                                                                               | Priority  | Story Points |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------ |
| US-001 | As a library patron, I want to view a dashboard of study rooms so that I can quickly see which rooms are available.                                      | Must Have | 3            |
| US-002 | As a library patron, I want to select an available room so that I can begin the reservation process.                                                     | Must Have | 3            |
| US-003 | As a library patron, I want to enter basic reservation details so that the library knows who reserved the room.                                          | Must Have | 3            |
| US-004 | As a library patron, I want to receive confirmation and see the room status update so that I know my reservation was completed.                          | Must Have | 5            |
| US-005 | As an engineering team member, I want the prototype to use simulated frontend data so that we can demonstrate the workflow without a production backend. | Must Have | 3            |

**Table 3.** Lists the user stories referenced by the functional requirements and requirements traceability matrix.

---

## Functional Requirements

### Room Availability and Reservation Flow

| ID     | Requirement                                                                                                    | Priority    | Related Story |
| ------ | -------------------------------------------------------------------------------------------------------------- | ----------- | ------------- |
| FR-001 | The system shall display a dashboard listing public library study rooms.                                       | Must Have   | US-001        |
| FR-002 | The system shall show each study room with a current status of Available or Reserved.                          | Must Have   | US-001        |
| FR-003 | The system shall allow patrons to select a room marked Available.                                              | Must Have   | US-002        |
| FR-004 | The system shall prevent patrons from selecting a room marked Reserved.                                        | Must Have   | US-002        |
| FR-005 | The system shall display a reservation form for the selected available room.                                   | Must Have   | US-003        |
| FR-006 | The system shall require the patron to enter basic reservation details before submitting the form.             | Must Have   | US-003        |
| FR-007 | The system shall display a confirmation message after successful submission.                                   | Must Have   | US-004        |
| FR-008 | The system shall update the selected room status from Available to Reserved after submission.                  | Must Have   | US-004        |
| FR-009 | The system shall route the patron back to the dashboard after the reservation is completed.                    | Should Have | US-004        |
| FR-010 | The system shall use simulated frontend data to demonstrate room status changes without a production database. | Must Have   | US-005        |

**Table 4.** Lists the functional requirements for the RoomReady proof of concept.

---

## Non-Functional Requirements

| ID      | Category           | Requirement                                                                                                    | Measurement                                                                                 |
| ------- | ------------------ | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| NFR-001 | Performance        | The dashboard shall display room availability and update room status without noticeable delay during the demo. | Status change appears immediately after form submission and return to the dashboard.        |
| NFR-002 | Security / Privacy | The prototype shall avoid collecting sensitive personal information beyond basic reservation details.          | No password, payment information, or library account authentication is required in the POC. |
| NFR-003 | Usability          | A first-time patron shall be able to complete the reservation flow with minimal instruction.                   | Reservation flow can be completed in under 3 minutes during the live demo.                  |
| NFR-004 | Reliability        | The prototype shall remain usable in a modern web browser for the Sunday presentation.                         | The app launches successfully from the `/poc` folder before the live demo.                  |

**Table 5.** Defines the measurable quality attributes of RoomReady for a public library proof-of-concept environment.

---

## Requirements Traceability Matrix

| Requirement ID | Requirement Summary                  | User Story IDs | Status  |
| -------------- | ------------------------------------ | -------------- | ------- |
| FR-001         | Display study room dashboard.        | US-001         | Planned |
| FR-002         | Show Available/Reserved status.      | US-001         | Planned |
| FR-003         | Select an available room.            | US-002         | Planned |
| FR-004         | Prevent selection of reserved rooms. | US-002         | Planned |
| FR-005         | Display reservation form.            | US-003         | Planned |
| FR-006         | Submit basic reservation details.    | US-003         | Planned |
| FR-007         | Show confirmation message.           | US-004         | Planned |
| FR-008         | Update room status to Reserved.      | US-004         | Planned |
| FR-009         | Route patron back to dashboard.      | US-004         | Planned |
| FR-010         | Use simulated frontend data.         | US-005         | Planned |

**Table 6.** Maps functional requirements to related user stories to show alignment between the product backlog and the RoomReady proof of concept.

---

## Ethical Use of AI

The team used AI tools, including Gemini, ChatGPT, and Grammarly, to support brainstorming, document structure, frontend scaffolding, writing clarity, and troubleshooting during the sprint.

**Technical Guidance and Troubleshooting:** AI tools were used to support environment setup, clarify frontend prototype decisions, and troubleshoot implementation issues during the RoomReady project.

**Structural and Technical Writing:** AI tools helped outline project artifacts and draft sections such as the SRS, success criteria, and requirements traceability matrix, ensuring alignment with professional software engineering standards.

**Documentation Standards:** AI tools were used to support clear headings, readable tables, and consistent formatting.

**Editing and Clarity:** Grammarly and AI-supported revision were used to review grammar, tone, and readability so the final deliverables meet graduate-level communication standards.

Graf, Haywood, and Tobias made all final decisions on the system’s architecture, selected features, scope, and governance to ensure the RoomReady system aligns with the goals of the MCS 5308 course.
