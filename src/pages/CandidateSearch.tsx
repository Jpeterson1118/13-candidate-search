import { useState, useRef, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate>({} as Candidate)

  const candidatesArray = useRef<Candidate[]>([])
  
  const nextCandidate = async () => {
    const next: Candidate | undefined = candidatesArray.current.pop()

    if (next) {
      const userData = await searchGithubUser(next.login)
      setCandidate(userData)
      console.log(userData)
    }
  }

  useEffect(() => {
    const getCandidates = async () => {
      const candidates: Candidate[] = await searchGithub()

      candidatesArray.current = [...candidates]

      await nextCandidate()
    }
    getCandidates()
  }, [])
  
  
  const saveCandidate = async () => {
    const savedCandiates: Candidate[] = JSON.parse(localStorage.getItem('Candidates') || '[]')

    savedCandiates.push(candidate)

    localStorage.setItem('Candidates', JSON.stringify(savedCandiates))

    nextCandidate()
  }

  return (
    <>
      <h1>Candidate Search</h1>

      {candidatesArray.current.length > 0 ? (
        <div className='card'>
          <div className='image-box'>
            <img src={candidate.avatar_url} alt={`User image for ${candidate.login}`} />
          </div>
          <div className='candidate-data'>
            {candidate.name ? (<h2>{candidate.name}</h2>) : (<h2>No Name provided</h2>)}
            <p>{candidate.login}</p>
            {candidate.email ? (<p>{candidate.email}</p>) : (<p>No Email Provided</p>)}
            {candidate.company ? (<p>{candidate.company}</p>) : (<p>No Data Available</p>)}
            {candidate.bio ? (<p>{candidate.bio}</p>) : (<p>No Biography Provided</p>)}
          </div>
          <div className='buttons-div'>
            <button className='red left' onClick={nextCandidate}>-</button>
            <button className='green right' onClick={saveCandidate}>+</button>
          </div>
        </div>
      ) : (
        <p>No candiates to dsiplay</p>
      )}

    </>
  )
}

export default CandidateSearch