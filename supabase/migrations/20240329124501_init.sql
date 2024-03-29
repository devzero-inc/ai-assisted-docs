create extension vector
with
  schema extensions;

create table if not exists embeddings (
  id uuid primary key default uuid_generate_v4(),
  content text,
  embedding vector(1536)
);

create or replace function vector_search(input_embedding vector(1536), match_threshold float, match_count int)
returns table (id uuid, content text, similarity float)
language plpgsql
as $$
#variable_conflict use_variable
begin
  return query
  select
    embeddings.id,
    embeddings.content,
    (embeddings.embedding <#> input_embedding) * -1 as similarity
  from embeddings
  where (embeddings.embedding <#> input_embedding) * -1 > match_threshold
  order by embeddings.embedding <#> input_embedding

  limit match_count;
end;
$$;