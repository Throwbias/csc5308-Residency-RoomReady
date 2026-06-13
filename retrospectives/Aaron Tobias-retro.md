1. What was the hardest decision your team made today, and how did you resolve it?
The hardest part of the sprint was navigating how to handle our repository structure when we ran into a massive fatal: refusing to merge unrelated histories Git error. We had conflicting local and remote states, compounded by nested folders and binary merge conflicts with our image assets. We had to decide whether to painstakingly untangle the existing local folder or start fresh. We resolved it by choosing the safest path: backing up our newly written ADR and UML files, cloning a fresh repository, and pushing the new deliverables from a clean slate.

2. How did using AI tools change your workflow? What did you have to be careful about?
AI tools were incredibly useful for immediate technical troubleshooting. When we hit the Git merge conflicts and binary file warnings, the AI provided exact, step-by-step terminal commands to resolve the |MERGING state safely. However, we had to be careful not to blindly copy-paste commands without understanding what they did to our file tree. We had to verify the current state of our directory using commands like ls -la before executing the AI's solutions.

3. What would you build next if you had two more hours on the POC?
I would add persistent form validation and a "Cancel Booking" feature that updates the UI immediately. While our localStorage setup works great for the happy path, spending two hours adding edge-case handling (like preventing users from booking a room in the past) would make the prototype feel much more robust.

4. How does today connect to what you will be doing in Weeks 1–4 of the semester?
Today highlighted the reality of collaborative engineering: writing code is only half the battle; managing version control and integrating with a team is the other half. The Git troubleshooting we did today perfectly mirrors the continuous integration and version control challenges we will face in Weeks 1-4 as our codebase scales.