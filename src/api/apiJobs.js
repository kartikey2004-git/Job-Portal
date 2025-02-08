import supabaseClient from "@/utils/supabase";

export async function getJobs(token, { location, company_id, searchQuery }) {
  const supabase = await supabaseClient(token);

  let query = supabase
    .from("jobs")
    .select("*,company:companies(name,logo_url),saved: saved_jobs(id)");

  if (location) {
    // The column to filter on
    // Match only rows where column is equal to value.
    // To check if the value of column is NULL, you should use .is() instead.

    query = query.eq("location", location);
  }

  if (company_id) {
    query = query.eq("company_id", company_id);
  }

  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}`);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching Jobs", error);
    return null;
  }
  return data;
}

export async function saveJob(token, { alreadySaved }, saveData) {
  const supabase = await supabaseClient(token);

  if (alreadySaved) {
    const { data, error: deleteError } = await supabase
      .from("saved_jobs")
      .delete()
      .eq("job_id", saveData.job_id);

    if (deleteError) {
      console.error("Error fetching Jobs", deleteError);
      return null;
    }
    return data;
  } else {
    const { data, error: InsertError } = await supabase
      .from("saved_jobs")
      .insert([saveData])
      .select();

    if (InsertError) {
      console.error("Error fetching Jobs", InsertError);
      return null;
    }
    return data;
  }
}

export async function getSingleJob(token, { job_id }) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase
    .from("jobs")
    .select("*,company:companies(name,logo_url),applications:applications(*)")
    .eq("id", job_id)
    .single();

  if (error) {
    console.error("Error fetching Job", error);
    return null;
  }
  return data;
}

export async function updateHiringStatus(token, { job_id }, isOpen) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase
    .from("jobs")
    .update({isOpen})
    .eq("id", job_id)
    .select()

  if (error) {
    console.error("Error Updating Job", error);
    return null;
  }
  return data;
}
