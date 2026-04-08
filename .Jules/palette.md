# Palette's Journal

## 2024-04-08 - Init
**Learning:** Initializing journal to track CRITICAL UX/accessibility learnings.
**Action:** Use this file to record important insights.

## 2024-04-08 - Form Loading States and Accessibility
**Learning:** Found that the export inquiry form lacked a loading state on the submit button, allowing potential duplicate submissions. Also, form fields lacked programmatic association with labels via `id`/`htmlFor`, impacting screen reader accessibility and click target sizes.
**Action:** Always implement `isSubmitting` states on asynchronous forms with visual feedback (button disabled + text change), and ensure strict `<label htmlFor="id">` to `<input id="id">` mapping for all custom forms. Added robust network error handling using `try...catch...finally` to ensure UI recovers if the request fails.
