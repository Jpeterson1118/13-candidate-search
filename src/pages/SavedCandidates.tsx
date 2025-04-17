import { useEffect, useState } from "react";
import Candidate from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([])

  useEffect(() => {
    const selectedCandidates: Candidate[] = JSON.parse(localStorage.getItem('Candidates') || '[]')

    setCandidates(selectedCandidates)
  }, [])

  const rejectCandidate = (id: number) => {
    const updated = candidates.filter(candidate => candidate.id !== id)

    localStorage.setItem('Candidates', JSON.stringify(updated))

    setCandidates(updated)
  }

  return (
    <>
      <h1>Potential Candidates</h1>

      {candidates.length > 0 ? (
        <table className="table">
          <thead>
            <tr><th>Image</th> <th>Name</th> <th>Location</th> <th>Email</th> <th>Company</th> <th>Bio</th> <th>Reject</th></tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              (<tr>
                <td className="center"><img className="candidate-image" src={candidate.avatar_url} alt="candidate avatar" /></td>
                <td><p>{candidate.login}</p> {candidate.name ? (<p>({candidate.name})</p>) : (<p></p>)}</td>
                {candidate.location ? (<td>{candidate.location}</td>) : (<td>No Location Given</td>)}
                {candidate.email ? (<td>{candidate.email}</td>) : (<td><p>Data Unavilable</p></td>)}
                {candidate.company ? (<td>{candidate.company}</td>) : (<td>Company Not Provided</td>)}
                {candidate.bio ? (<td className="bio-box">{candidate.bio}</td>) : (<td>No Biography Provided</td>)}
                <td className="center"><button className="reject-button red" onClick={() => rejectCandidate(candidate.id)}>--</button></td>
              </tr>
              )
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Candidates Selected</p>
      )}
    </>
  );
};

export default SavedCandidates;
