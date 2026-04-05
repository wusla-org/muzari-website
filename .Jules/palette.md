## 2026-04-05 - Adding Accessible Forms
**Learning:** Found multiple instances where form labels were lacking `htmlFor` attributes and inputs missing `id` attributes. I also found that form submission lacks state to prevent multiple submissions, or give users visual feedback that the form is processing.
**Action:** Always add explicit associations via `htmlFor` and `id` to pair labels and inputs. Also add `disabled` state UI and functional feedback during async form submission.
