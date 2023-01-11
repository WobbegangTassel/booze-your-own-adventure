import React, { useEffect, useState } from 'react'

function AtTheBar() {
  return (
    <div>
      <p>You are at the bar!</p>
      <iframe
        src="https://giphy.com/embed/3oKGz6J5SxUhyP2sms"
        width="480"
        height="322"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>

      <button>What happens next?!</button>
    </div>
  )
}

export default AtTheBar
