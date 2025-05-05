export type Release = {
  id: number;
  name: string;
  tag_name: string;
  body: string;
  html_url: string;
  created_at: string;
};

export const fetchGithubReleases = async (): Promise<Release[]> => {
  try {
    const res = await fetch(
      'https://api.github.com/repos/Warcraft-3-Risk/wc3-risk-system/releases',
      {
        headers: {
          Accept: 'application/vnd.github+json',
        },
      },
    );

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data: Release[] = await res.json();

    return data.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );
  } catch (err) {
    console.error('Failed to fetch releases:', err);
    return [];
  }
};
