## 2024-04-06 - Form Accessibility and Interaction Feedback
**Learning:** Next.js client forms often lack native accessible label-to-input association without explicit `id` and `htmlFor` props. Additionally, handling async fetch requests without a submitting state can lead to user confusion or multiple identical submissions.
**Action:** Always verify that input elements have an `id` that matches the `htmlFor` of their label, and implement a loading state during form submission to provide immediate visual feedback by disabling the submit button.
