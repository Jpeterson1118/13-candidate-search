// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate{
    Name: string
    location?: string
    email?: string
    company?: string
    bio?: string
    rejected: boolean
}
