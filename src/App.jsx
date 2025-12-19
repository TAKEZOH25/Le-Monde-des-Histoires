import { useState } from 'react'
import Header from './components/Header'
import StoryCard from './components/StoryCard'
import stories from './data/stories.json'

function App() {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleOpenStory = (story) => {
    console.log("Opening story:", story.title);
    setSelectedStory(story);
  };

  return (
    <div className="min-h-screen bg-brand-pastel selection:bg-brand-pink selection:text-white pb-20">
      <Header />

      <main className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onClick={() => handleOpenStory(story)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
