import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function StoryPage({ storyData, setStoryData }) {
  // console.log({storyData})
  let navigate = useNavigate()

  //getting id of current story segment from previous page
  // const { id, setId } = useParams()

  //use that id for fetch request
  //destructure response to get story words and new choices and new choice ids
  
  //write event handlers for buttons
  const updateStory = async (storyId) =>{
    await fetch(`/api/story/${storyId}`)
      .then(res => res.json())
      .then((data) => {
      const {
        id,
        prompt,
        choice_a,
        choice_b,
        choice_a_id,
        choice_b_id,
      } = data;
      console.log({data});
      setStoryData({
        id,
        prompt,
        choice_a,
        choice_b,
        choice_a_id,
        choice_b_id,
      })
    })
    .catch(err => console.log('Equipment api fetch ERROR: ', err));
  };

  useEffect( () => {
    updateStory(storyData.id);
  }, [])

  function handleClick(choice) {
    updateStory(choice);
    // navigate('/go')
  }

  return (
    <div className="flex flex-col justify-center">
      <p className="self-center">
        {/* As the sun set over the ocean, a group of pirates set out on a quest for
        treasure. They sailed through turbulent waters, dodging deadly storms
        and outwitting rival gangs. After months at sea, they finally reached
        the fabled island where the treasure was said to be hidden, and the
        pirates eagerly set off to find it. Should they stick together or split
        up into groups? */}
        {storyData.prompt}
      </p>
      <button
        className="rounded-lg shadow-md w-80 bg-sky-700 text-white m-2 self-center"
        type=""
        onClick={() => {
          handleClick(storyData.choice_a_id)
        }}
      >
        {storyData.choice_a}
      </button>
      <button
        className="rounded-lg shadow-md w-80 bg-sky-700 text-white m-2  self-center"
        type=""
        onClick={() => {
          handleClick(storyData.choice_b_id)
        }}
      >
        {storyData.choice_b}
      </button>
    </div>
  )
}
export default StoryPage
