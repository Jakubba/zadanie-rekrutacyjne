import { getStoryblokApi } from '@storyblok/react';

const fetchTourPage = async (slug: string) => {
  const client = getStoryblokApi();
  const { data } = await client.get(`cdn/stories/home/${slug}`, {
    version: 'draft',
  });
  return data.story;
};

interface Props {
  params: { slug: string };
}

const HomePage = async ({ params }: Props) => {
  const story = await fetchTourPage(params.slug);

  return (
    <div>
      <h1>Storyblok Content:</h1>
      <pre>{JSON.stringify(story, null, 2)}</pre>
    </div>
  );
};

export default HomePage;
