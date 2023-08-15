import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { useState } from 'react'
import { Filter } from '@/components/Filter'
import { PodcastList } from '@/components/PodcastList'


export default function Home({ podcast }) {

  const [searchTerm, setSearchTerm] = useState('')

  //Filtrar los podcasts basados en el input
  const filteredPodcasts = podcast.feed.entry.filter(podcast => {
    return podcast['im:name'] ? podcast['im:name'].label.toLowerCase().includes(searchTerm.toLowerCase()) : false;
  })

  return (
    <Layout
      title='Podcasts'
      description='Podcasts'
      data-cy='layout'
    >
      <Head>
        <title>Podcast App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='p-6' data-cy='main-page'>
        <Filter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredPodcasts={filteredPodcasts}
          data-cy='filter'
        />
        {/* Pintaremos los podcast en pantalla */}
        <PodcastList
          filteredPodcasts={filteredPodcasts}
          data-cy='podcast-list'
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const limit = 100;
  const res = await fetch(`https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1320/json`)
  const podcasts = await res.json()
  // console.log(podcasts);
  return {
    props: {
      podcast: podcasts
    }
  }
}


