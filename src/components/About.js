import React, { useEffect } from 'react'
import { useContext} from 'react';
import noteContext from '../context/notes/noteContext';

const About = () => {
  const a = useContext(noteContext)
  useEffect(() => {

    a.update();
        // eslint-disable-next-line
  }, [])
  
  return (
    <div>
      this is About {a.state.name} and she is in {a.state.class}
    </div>
  )
}

export default About
