import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StoryPage() {
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
      <Link to="/go/a">Choice A</Link>
      <button>Choice B</button>
    </div>
  );
}
export default StoryPage;
