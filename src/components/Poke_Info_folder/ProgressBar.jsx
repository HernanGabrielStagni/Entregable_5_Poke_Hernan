import React from 'react'

const ProgressBar = ({progress}) => {

  const Parent__container  = {
		
		height: '23px',
		width: '100%',
		backgroundColor: '#fcefef',
		borderRadius: 40,
		marginTop: 10,
		marginBottom: 10,
		marginLeft:0,
		marginRight: 0,
    padding: 1
	}

  const Child__progress = {
		height: '100%',
		width: `${progress}%`,
		// maxWidth: '100%',
		background: 'linear-gradient(90deg, #FCD676 -2.25%, #E6901E 133.18%)',
	    borderRadius: 5,
		textAlign: 'right'
	}
    return (
    <div style={Parent__container}>
      <div style={Child__progress}>
        ProgressBar
      </div>
     
    </div>
  )
}

export default ProgressBar