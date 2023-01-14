import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom'

function StoryPage({ storyData, setStoryData, setChoice }) {
  // console.log({storyData})
  let navigate = useNavigate()
  // let endpoint = "/go";
  //getting id of current story segment from previous page
  // const { id, setId } = useParams()

  //use that id for fetch request
  //destructure response to get story words and new choices and new choice ids

  //write event handlers for buttons
  const updateStory = async (storyId) => {
    await fetch(`/api/story/${storyId}`)
      .then((res) => res.json())
      .then((data) => {
        const {
          id,
          prompt,
          choice_a,
          choice_b,
          choice_a_id,
          choice_b_id,
        } = data
        console.log({ data })

        setStoryData({
          id,
          prompt,
          choice_a,
          choice_b,
          choice_a_id,
          choice_b_id,
        })
      })
      .catch((err) => console.log('Equipment api fetch ERROR: ', err))
  }

  useEffect(() => {
    updateStory(storyData.id)
  }, [])

  function handleClick(selection_id, selection_text) {
    updateStory(selection_id)
    setChoice(selection_text)
    console.log(selection_text)

    navigate('/go')
  }

  if (storyData.choice_a === 'End of story') {
    return (
      <div className="flex flex-col justify-center align-middle">
        <p className="self-center justify-center p-2 m-5 flex-shrink-0 text-4xl font-body text-brown-dark">
          {storyData.prompt}
        </p>
        <h3 className="self-center p-2 py-12 font-display text-6xl flex-shrink-0">
          {storyData.choice_a}.
        </h3>

        <button className="p-3 flex-shrink-0 self-center my-6 w-96 text-2xl min-w-min font-button text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
          onClick={()=> {window.location.reload()}}
        >
          <Link to="/home">Start a new adventure!</Link>
        </button>
        <Outlet />
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center align-middle m-12">
      <div className="shadow-2xl rounded-xl text-6xl bg-brown-light text-brown-dark font-display border-double border-4 border-light-blue-500 p-10 mt-20">
        <p className="self-center justify-center p-2 m-5 max-w-3xl flex-shrink-0 text-4xl font-body text-brown-dark">
          {storyData.prompt}
        </p>
      </div>
      <div className="m-20"></div>
      <button
        className="p-3 flex-shrink-0 self-center my-6 w-96 text-2xl min-w-min font-button text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
        type=""
        onClick={() => {
          handleClick(storyData.choice_a_id, storyData.choice_a)
        }}
      >
        {storyData.choice_a}
      </button>
      <button
        className="p-3 flex-shrink-0 self-center my-6 w-96 text-2xl min-w-min font-button text-blue-light rounded-lg bg-brown  hover:bg-brown-light hover:text-brown-dark"
        type=""
        onClick={() => {
          handleClick(storyData.choice_b_id, storyData.choice_b)
        }}
      >
        {storyData.choice_b}
      </button>
    </div>
  )
}
export default StoryPage
