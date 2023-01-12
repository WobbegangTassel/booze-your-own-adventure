import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function StoryPage({ storyData, setStoryData }) {
  let navigate = useNavigate()

  //getting id of current story segment from previous page
  // const { id, setId } = useParams()

  //use that id for fetch request
  //destructure response to get story words and new choices and new choice ids

  //write event handlers for buttons

  useEffect(() => {
    const getData = async () => {
      const {
        prompt,
        choice_a,
        choice_b,
        choice_a_id,
        choice_b_id,
      } = await fetch(`/api/story/${storyData.id}`) //or fetch from some other API, maybe google maps...
    }
    getData()
    setStoryData({
      prompt,
      choice_a,
      choice_b,
      choice_a_id,
      choice_b_id,
    })
  }, [])

  function handleClick(choice) {
    setStoryData(choice)
    navigate('/go')
  }

  return (
    <div className="flex flex-col ">
      <p>
        As the sun set over the ocean, a group of pirates set out on a quest for
        treasure. They sailed through turbulent waters, dodging deadly storms
        and outwitting rival gangs. After months at sea, they finally reached
        the fabled island where the treasure was said to be hidden, and the
        pirates eagerly set off to find it. Should they stick together or split
        up into groups?
        {prompt}
      </p>
      <button
        className=""
        type=""
        onClick={() => {
          handleClick(storyData.choice_a_id)
        }}
      >
        Choice A
      </button>
      <button
        className=""
        type=""
        onClick={() => {
          handleClick(storyData.choice_b_id)
        }}
      >
        Choice B
      </button>
    </div>
  )
}
export default StoryPage
