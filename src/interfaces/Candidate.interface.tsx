export default interface Candidate {
    login: string,
    id: number,
    avatar_url: string,
    html_url: string,
    name: string,
    company: string,
    bio?: string,
    location: string,
    email: string,
}
