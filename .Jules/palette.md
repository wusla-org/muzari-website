## 2024-04-10 - Form Accessibility and Interaction
**Learning:** Found that the main inquiry form had missing `htmlFor` mappings on labels and no visual feedback (loading state) upon submission. Without this, screen readers cannot properly associate labels with their inputs, and users may click submit multiple times if the network request is slow.
**Action:** Always ensure every `<label>` has a matching `htmlFor` pointing to an input's `id`. Always add an `isSubmitting` or similar disabled state with visual feedback for async submit buttons.
