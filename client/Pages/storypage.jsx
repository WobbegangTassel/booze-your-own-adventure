import React, { useEffect, useState } from "react";

function StoryPage() {

  const buttonClickHandler = (e)=> {
    const showSomething = async () => {
     await fetch("/test") //ask server to serve up all tamas from db
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        // setStoryState
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    }

    showSomething();

  }


  return (
    <div>
      <p>
        As the sun set over the ocean, a group of pirates set out on a quest for
        treasure. They sailed through turbulent waters, dodging deadly storms
        and outwitting rival gangs. After months at sea, they finally reached
        the fabled island where the treasure was said to be hidden, and the
        pirates eagerly set off to find it. Should they stick together or split
        up into groups?
      </p>
      <button onClick={buttonClickHandler}>Choice A</button>
      <button>Choice B</button>
    </div>
  );
}
export default StoryPage;
