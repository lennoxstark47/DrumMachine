import React, { useEffect } from 'react';
// import './App.css';

const synths = [
	{
		id: 'Roland B01',
		url:
			'https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20B%20Line%2001.mp3',
		kString: 'Q',
		keyCode: 81,
	},
	{
		id: 'Roland C01',
		url:
			'https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20C%20Line%2004.mp3',
		kString: 'W',
		keyCode: 87,
	},
	{
		id: 'Roland D11',
		url:
			'https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20D%20Line%2011.mp3',
		kString: 'E',
		keyCode: 69,
	},
	{
		id: 'Roland D13',
		url:
			'https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20D%20Line%2013.mp3',
		kString: 'A',
		keyCode: 65,
	},
	{
		id: 'Blip 01',
		url:
			'https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20E%20Blip%2001.mp3',
		kString: 'S',
		keyCode: 83,
	},
	{
		id: 'Blip 10',
		url:
			'https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20E%20Blip%2010.mp3',
		kString: 'D',
		keyCode: 68,
	},
	{
		id: 'Blip 17',
		url:
			'https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20E%20Blip%2017.mp3',
		kString: 'Z',
		keyCode: 90,
	},
	{
		id: 'Blip 29',
		url:
			'https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20E%20Blip%2029.mp3',
		kString: 'X',
		keyCode: 88,
	},
	{
		id: 'Roland F01',
		url:
			'https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20F%20Line%2001.mp3',
		kString: 'C',
		keyCode: 67,
	},
];

const DrumSounds = (props) => {
	function playSound(e) {
		document.getElementById(props.kString).play();
		document.getElementById('display').innerText =
			props.display;
	}

	useEffect(() => {
		window.addEventListener('keydown', handler);
		return () => {
			window.removeEventListener(
				'keydown',
				handler
			);
		};
	});

	const handler = (e) => {
		if (e.keyCode === props.keyCode) {
			playSound();
		}
	};
	return (
		<div
			className='drum-pad'
			id={props.audioId}
			onClick={playSound}>
			<p>{props.kString}</p>
			<audio
				id={props.kString}
				src={props.audioUrl}
				className='clip'></audio>
		</div>
	);
};

const InnerContainer = () => {
	let innerContainer = synths.map(
		(item, index, array) => {
			return (
				<div className='btn btn-secondary p-4 m-4'>
					<DrumSounds
						audioId={array[index].id}
						audioUrl={array[index].url}
						keyCode={array[index].keyCode}
						kString={array[index].kString}
						display={array[index].id}
						key={index}
					/>
				</div>
			);
		}
	);

	return (
		<div>
			{/* <div className='grid-container'> */}
			{innerContainer}
			{/* </div> */}
		</div>
	);
};

function App() {
	return (
		<div
			id='drum-machine'
			className='bg-info min-vh-100 text-white'>
			<div className='text-center'>
				<h1 className='title'>Drum Machine</h1>
				<div id='display'>
					Drum Machine in React ^16.8 w Hooks
				</div>
				<InnerContainer />
				<p style={{ fontFamily: 'Rajdhani' }}>
					by त्विसम{' '}
				</p>
			</div>
		</div>
	);
}

export default App;

/* const DrumPad = (props) => {

  const playAudio = (e) =>{
    document.getElementById(this.props.key).play();
  };

  useEffect( () => {
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    }
  });

  function handler(e){
    if( e.keyCode === props.keyCode){
      this.audio.play();
      this.audio.currentTime = 0;
      
    }}

    return (
      <div id={props.audioId} className='drum-pad' onClick={() => this.audio.play() }>
        <audio className='clip' id={props.key} src={props.url}></audio>
      </div>
    )

  }


const DrumDisplay = () => {
  let drumDisplay = synths.map( (item, index) => {
    return (
      <DrumPad 
        key={item.key}
        keyCode={item.keyCode}
        audioId={item.id}
        audioUrl={item.url}
       /> 
    )})
    return(
      <div>{drumDisplay}</div>
    )
}

const DrumMachine = () => {
  const [idText, setIdText] = useState('Press or click a keyboard')
  
  return (
      <div id="drum-machine"  >
          <div id="display" >
              <p>{idText}</p>
          </div>
          <div className="drum-machine" >
            <DrumDisplay />
          </div>

          
      </div>
  )
}


function App() {
  
  return (
    <div className="App" >
      
      <h1 className="title">Drum Machine</h1>
      <DrumMachine />
    </div>
  );
}

export default App; */
