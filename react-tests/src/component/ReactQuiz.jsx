import { useEffect, useReducer } from 'react';

const ACTIONS = {

}
const reducer = (state, action) => {
    switch (action.type) {

        case 'dataReceived':
            return {
                ...state,
                questions: action.payload,
                status: 'ready'
            };

        case 'dataFailed':
            return {
                ...state,
                status: 'error'
            }

        case 'start':
            return {
                ...state, status:
                    'active',
                index: 0
            }

        case 'newAnswer':
            const question = state.questions.at(state.index);
            return {
                ...state,
                answer: action.payload,
                points: action.payload === question.correctOption
                    ? state.points + question.points : state.points,
            }

        case 'nextQuestion':
            return { ...state, 
                index: state.index + 1, 
                answer: null }

            case 'finished': 
            return { 
                ...state, 
                status: 'finished',
            }

            case 'restart':
                return {
                    ...state, 
                    status: 'ready',
                    points: 0,
                    answer: null,
                    index: 0,
                    secondsRemaining: 10,
                }
                // return {
                    //     ...state, questios: state.questions, status: 'ready'
                    // }
                    case 'tick': 
                if (state.status !== 'active') return state;

                    if (state.secondsRemaining <= 1) {
                        return {
                            ...state, 
                            status: 'finished',
                            secondsRemaining: 0
                        };
                    }
                    return {
                        ...state,
                        secondsRemaining: state.secondsRemaining - 1, 
                        // status: state.secondsRemaining === 0 ? 'finished' : state.status,
                    };

                    default: throw new Error('Action unknown')
    }
}

export default function ReactQuiz() {
    const [state, dispatch] = useReducer(reducer, {
        questions: [],
        //loading, error, ready, active, finished
        status: 'loading',
        index: 0,
        answer: null,
        points: 0,
        secondsRemaining: 900,
    })
    const { questions, status, index, answer, points, secondsRemaining } = state;
    const currentQuestion = questions[index];
    const hasAnswered = answer !== null;

const totalPoints = questions.reduce((acc, question) => acc + question.points, 0);
    console.log(totalPoints)
    const percentage = (points/totalPoints) * 100;

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const res = await fetch('/question.json')
                const data = await res.json();
                dispatch({ type: 'dataReceived', payload: data.questions })
                console.log(data.questions);
            } catch (error) {
                dispatch({ type: 'dataFailed' })
                console.error("Error fetching questions:", error);
            }
        }

        fetchQuestions()
    }, []);

    function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(secs).padStart(2, '0');

    return `${paddedMinutes}:${paddedSeconds}`;
}


    useEffect(() => {
        if(status !== 'active') return;

        const id  = setInterval(() => {
            dispatch({ type: 'tick' })
        }, 1000);
        
        return () => clearInterval(id)
    }, [status])

    return (
        <div>
            <main>
                {status === 'loading' ? <p>Loading...</p> : null}
                {status === 'error' ? <p>Something went wrong!!</p> : null}
                {status === 'ready' ? (
                    <>
                        <h1>Welcome to the React Quiz!</h1>
                        <p>{questions.length} questions to test your React mastery</p>
                        <button
                            className='bg-blue-500 text-white p-2 rounded-lg'
                            onClick={(() => dispatch({ type: 'start' }))}>
                            Let's start!
                        </button>
                    </>
                ) : null}



            </main>
            {status === 'active' && currentQuestion && (
                <section className="questions">

                    <section className="">
                        <progress
                        value={index + Number(answer !== null)} 
                        className=''
                        max={15}
                        />
                        <div className='flex justify-between items-center ps-6'>
                        <p>Question <strong>
                            {index + 1}/{questions.length}
                            </strong>
                            </p>
                        <p>
                            <strong>
                                {points}/{totalPoints } 
                                </strong>
                                points
                            </p>
                        </div>
                    </section>

                    <h2>{currentQuestion.question}</h2>
                    <ul className='flex flex-col gap-2 text-white rounded-3xl justify-center items-center '>
                        {currentQuestion.options.map((option, index) => (
                            <button
                                className={`btn-option ${index === answer ? 'bg-green-900 rounded-3xl p-4' : 'bg-slate-600 p-4 rounded-3xl w-48 mt-5'} 
                                ${hasAnswered ? index === currentQuestion.correctOption ? 'text-white bg-slate-600' : 'text-black' : ''}`}
                                key={option}
                                disabled={answer !== null}
                                onClick={(() => dispatch({ type: 'newAnswer', payload: index }))}
                            >
                                {option}
                            </button>
                        ))}
                    </ul>
                    <button
                        className='bg-sky-800 rounded-3xl p-4 text-white'
                        onClick={(e) => dispatch({type: 'finished'})}
                    >Submit Answer</button>
            {hasAnswered ?
                <button onClick={(e) => dispatch({ type: 'nextQuestion' })}>
                    Next Question
                </button>
                : null}
            <button onClick={(e) => dispatch({type: 'restart'})}>Restart</button>
                </section>
            )}
            <footer>

            {status === 'active' ? <div> {formatTime(secondsRemaining)}</div> : null}
            </footer>

            {status === 'finished' ? (
                <>
                <p>You scored <strong> {points} </strong>out of <strong> 
                    {totalPoints}</strong> ({Math.ceil(percentage)}%)
                    </p>
                    <button onClick={(e) => dispatch({type: 'restart'})}>Restart</button>
                </>
            ) : null}
        </div>
    )
}