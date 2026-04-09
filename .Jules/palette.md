## 2024-04-09 - Added Loading State and Accessibility to InquiryForm
**Learning:** Adding a basic `try/finally` block to forms to reset `isSubmitting` status is necessary to ensure the form returns to an interactive state even on error.
**Action:** Always wrap API fetching logic in an async form handler in `try/catch/finally` blocks and use the `finally` to set `isSubmitting(false)`. Also linking labels using `htmlFor` matching the input `id` makes the form accessible.
