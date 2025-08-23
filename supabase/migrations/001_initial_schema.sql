-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create user_profiles table
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable RLS on user_profiles
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- Create policy for user_profiles
CREATE POLICY "Users can view and edit their own profile" ON public.user_profiles
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Create content_items table
CREATE TABLE IF NOT EXISTS public.content_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  kind TEXT NOT NULL CHECK (kind IN ('book', 'video', 'article')),
  title TEXT NOT NULL,
  creators TEXT[] DEFAULT '{}' NOT NULL,
  url TEXT,
  date DATE,
  amazon_url TEXT,
  notebooklm_url TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 10),
  one_liner TEXT,
  business_memo JSONB DEFAULT '[]' NOT NULL,
  life_memo JSONB DEFAULT '[]' NOT NULL,
  tags TEXT[] DEFAULT '{}' NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('planned', 'in_progress', 'done')) DEFAULT 'planned',
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable RLS on content_items
ALTER TABLE public.content_items ENABLE ROW LEVEL SECURITY;

-- Create policies for content_items
CREATE POLICY "Users can view their own content items" ON public.content_items
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own content items" ON public.content_items
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own content items" ON public.content_items
  FOR UPDATE USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own content items" ON public.content_items
  FOR DELETE USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS content_items_user_id_idx ON public.content_items(user_id);
CREATE INDEX IF NOT EXISTS content_items_created_at_idx ON public.content_items(created_at DESC);
CREATE INDEX IF NOT EXISTS content_items_status_idx ON public.content_items(status);
CREATE INDEX IF NOT EXISTS content_items_kind_idx ON public.content_items(kind);

-- Function to automatically set updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_content_items_updated_at BEFORE UPDATE ON public.content_items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON public.user_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name, avatar_url)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'avatar_url');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create user profile on signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();