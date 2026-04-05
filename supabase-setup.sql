-- =============================================
-- PARCOURKIFF — Script de création Supabase
-- =============================================
-- Exécute ce script dans l'éditeur SQL de Supabase
-- (Dashboard > SQL Editor > New Query)

-- 1. Table des élèves
CREATE TABLE IF NOT EXISTS students (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT,
  classe TEXT, -- "Terminale", "Première", etc.
  filiere TEXT, -- "Générale", "Techno", "Pro"
  specialites TEXT[], -- ["Maths", "NSI", "Physique"]
  pack TEXT, -- "essentiel", "premium", "integral"
  paid BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Table des résultats QCM
CREATE TABLE IF NOT EXISTS qcm_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  answers JSONB NOT NULL, -- Les réponses au QCM
  ai_result TEXT NOT NULL, -- La réponse de l'IA
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Table des recherches parcours
CREATE TABLE IF NOT EXISTS parcours_searches (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  query TEXT NOT NULL, -- Ce que l'élève a tapé
  ai_result TEXT NOT NULL, -- La réponse de l'IA
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Table des lettres de motivation
CREATE TABLE IF NOT EXISTS lettres (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  formation TEXT NOT NULL,
  pourquoi TEXT,
  experiences TEXT,
  qualites TEXT,
  projet TEXT,
  ai_draft TEXT, -- Le brouillon généré par l'IA
  final_version TEXT, -- La version finale (après relecture)
  status TEXT DEFAULT 'draft', -- "draft", "reviewed", "finalized"
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Table des appels alumni
CREATE TABLE IF NOT EXISTS alumni_calls (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  alumni_name TEXT,
  alumni_formation TEXT,
  scheduled_at TIMESTAMPTZ,
  completed BOOLEAN DEFAULT FALSE,
  notes TEXT, -- Notes post-appel
  rating INTEGER, -- Note de 1 à 5
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Table des alumni / mentors
CREATE TABLE IF NOT EXISTS alumni (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  formation TEXT NOT NULL, -- "Sciences Po Paris", "PASS Lyon", etc.
  annee TEXT, -- "L2", "M1", "Diplômé 2024"
  domaines TEXT[], -- ["Droit", "Sciences politiques"]
  bio TEXT,
  disponible BOOLEAN DEFAULT TRUE,
  tarif_appel DECIMAL(5,2) DEFAULT 20.00,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- SÉCURITÉ (Row Level Security)
-- =============================================

-- Active RLS sur toutes les tables
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE qcm_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE parcours_searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE lettres ENABLE ROW LEVEL SECURITY;
ALTER TABLE alumni_calls ENABLE ROW LEVEL SECURITY;
ALTER TABLE alumni ENABLE ROW LEVEL SECURITY;

-- Les élèves ne voient que leurs propres données
CREATE POLICY "Students see own data" ON students
  FOR ALL USING (auth.uid() = id);

CREATE POLICY "QCM results own data" ON qcm_results
  FOR ALL USING (student_id = auth.uid());

CREATE POLICY "Parcours searches own data" ON parcours_searches
  FOR ALL USING (student_id = auth.uid());

CREATE POLICY "Lettres own data" ON lettres
  FOR ALL USING (student_id = auth.uid());

CREATE POLICY "Alumni calls own data" ON alumni_calls
  FOR ALL USING (student_id = auth.uid());

-- Les alumni sont visibles par tous (lecture seule)
CREATE POLICY "Alumni public read" ON alumni
  FOR SELECT USING (true);
