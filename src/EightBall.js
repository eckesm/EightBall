import { useState } from 'react';
import './EightBall.css';

const answers_array = [
	{ msg: 'It is certain.', color: 'green' },
	{ msg: 'It is decidedly so.', color: 'green' },
	{ msg: 'Without a doubt.', color: 'green' },
	{ msg: 'Yes - definitely.', color: 'green' },
	{ msg: 'You may rely on it.', color: 'green' },
	{ msg: 'As I see it, yes.', color: 'green' },
	{ msg: 'Most likely.', color: 'green' },
	{ msg: 'Outlook good.', color: 'green' },
	{ msg: 'Yes.', color: 'green' },
	{ msg: 'Signs point to yes.', color: 'goldenrod' },
	{ msg: 'Reply hazy, try again.', color: 'goldenrod' },
	{ msg: 'Ask again later.', color: 'goldenrod' },
	{ msg: 'Better not tell you now.', color: 'goldenrod' },
	{ msg: 'Cannot predict now.', color: 'goldenrod' },
	{ msg: 'Concentrate and ask again.', color: 'goldenrod' },
	{ msg: "Don't count on it.", color: 'red' },
	{ msg: 'My reply is no.', color: 'red' },
	{ msg: 'My sources say no.', color: 'red' },
	{ msg: 'Outlook not so good.', color: 'red' },
	{ msg: 'Very doubtful.', color: 'red' }
];

const EightBall = ({ answers = answers_array }) => {
	const updateBall = () => {
		const randomAnswer = Math.floor(Math.random() * answers.length);
		const newColor=answers[randomAnswer]['color']
    setColor(newColor);
		setMessage(answers[randomAnswer]['msg']);
    if (newColor==='green'){
      setGreenCount(greenCount+1)
    }
    if (newColor==='goldenrod'){
      setGoldenrodCount(goldenrodCount+1)
    }
    if (newColor==='red'){
      setRedCount(redCount+1)
    }
	};
  const resetBall=()=>{
    setColor('black')
    setMessage('Think of a Question.')
    setGreenCount(0)
    setGoldenrodCount(0)
    setRedCount(0)
  }
	const [ color, setColor ] = useState('black');
	const [ message, setMessage ] = useState('Think of a Question.');
	const [ greenCount, setGreenCount ] = useState(0);
	const [ goldenrodCount, setGoldenrodCount ] = useState(0);
	const [ redCount, setRedCount ] = useState(0);
	return (
    <>
      <div className="EightBall" style={{ backgroundColor: color }} onClick={updateBall}>
        <span className="EightBall-message">{message}</span>
      </div>
      <button className="EightBall-reset" onClick={resetBall}>Reset Eight Ball</button>
      <div className="EightBall-colorCount">
          <p>Green: {greenCount}</p>
          <p>Goldenrod: {goldenrodCount}</p>
          <p>Red: {redCount}</p>
      </div>
    </>
	);
};

export default EightBall;
