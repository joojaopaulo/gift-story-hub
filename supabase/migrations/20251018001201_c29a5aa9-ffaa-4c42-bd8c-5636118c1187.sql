-- Add INSERT policy for profiles table to allow users to create their own profile
-- This makes the RLS policy set complete while maintaining security
CREATE POLICY "Users can insert own profile"
ON public.profiles
FOR INSERT
WITH CHECK (auth.uid() = id);

-- Add DELETE policy for profiles table restricted to owners only
-- This allows administrative deletion while preventing unauthorized deletions
CREATE POLICY "Owners can delete profiles"
ON public.profiles
FOR DELETE
USING (has_role(auth.uid(), 'owner'::app_role));