<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep homeowner services in shared service data and individual public routes; render detailed service copy, price guides, gallery slots and FAQs through the shared service-page layout so all service pages stay consistent. Preserve legacy public URLs so existing links remain valid. Use labelled photo placeholders when no verified service photo exists rather than misrepresenting another job.
- Use one shared quote form and validated multipart contact endpoint; store enquiries and photos privately with server-only privileged access because submissions contain personal information.
- Send quote notifications through the existing Resend integration with a fixed recipient, customer Reply-To and validated image attachments; only confirm success after the provider returns an email ID.
- Keep unconfirmed project measurements, suburbs and build times explicitly unknown; separate sample reviews from genuine reviews to avoid misleading visitors.
- Use the shared pageHead helper for leaf metadata and business JSON-LD; derive service FAQ JSON-LD from the displayed FAQ data to prevent mismatched answers.
- Render bundled job photos through JobPhoto with desktop/mobile WebP variants and intrinsic dimensions; keep hero photos eager and below-the-fold photos lazy to reduce mobile downloads without changing layout.
