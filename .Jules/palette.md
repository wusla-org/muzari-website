## 2024-04-11 - Form Associations and Submit Feedback
**Learning:** This app's custom input components/shells (`input-shell`, `button-primary`) often lack built-in label associations (`htmlFor`/`id`) and submission feedback (disabling buttons or showing loading text), relying on the consuming components to implement them.
**Action:** Always check newly added forms or inputs in this repository for explicit `htmlFor` to `id` mappings and interactive loading states on submit buttons to ensure accessibility and clear user feedback.
