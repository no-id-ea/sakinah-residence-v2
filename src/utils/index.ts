const BASE_URL = "https://cms.sakinahresidence.com/wp-json/wp/v2/promos";

export async function getPosts() {
  const postsRes = await fetch(BASE_URL);
  const posts = await postsRes.json();
  return posts;
}

export async function getPost(slug: string) {
  const posts = await getPosts();
  const postArray = posts.filter((post: any) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}