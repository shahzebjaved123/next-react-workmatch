/*
 Please write a component that contains a toggle button.
 When clicking the button it should show or hide a text below the button.
 The title of the page should change between 'shown' and 'hidden'. Hint: the title can be set with document.title = 'some string'.

  You can view your results on http://localhost:3000/toggle
*/

import { Button, HorizontalLine, Paragraph } from "@styleGuide";
import { useState } from "react";

export const Toggle = () => {

  const [showText, setShowText] = useState<boolean>(true) // can be used for global state, if needed. 

  const handleClick = () => {
    setShowText(!showText)
    document.title = showText ? 'hidden' : 'shown'
  }

  return (
    <div>
      <Button onClick={handleClick}>Toggle Button</Button>
      <HorizontalLine />
      {showText && 'show and hide'}
    </div>
  )
}

