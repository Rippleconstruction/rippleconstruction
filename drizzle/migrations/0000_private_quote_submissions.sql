CREATE TABLE public.quote_submissions (
 id uuid PRIMARY KEY,
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL,
 phone text NOT NULL,
 email text NOT NULL,
 suburb text NOT NULL,
 job_type text NOT NULL,
 approximate_size text NOT NULL DEFAULT '',
 message text NOT NULL,
 timeframe text NOT NULL,
 photo_paths text[] NOT NULL DEFAULT '{}',
 email_status text NOT NULL DEFAULT 'pending',
 email_id text
);
GRANT ALL ON public.quote_submissions TO service_role;
REVOKE ALL ON public.quote_submissions FROM anon, authenticated;
ALTER TABLE public.quote_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service may manage quote submissions" ON public.quote_submissions FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "Service may manage private quote photos" ON storage.objects FOR ALL TO service_role USING (bucket_id = 'quote-photos') WITH CHECK (bucket_id = 'quote-photos');