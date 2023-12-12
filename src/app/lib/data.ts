export async function fetchProjectsData (sort: string) {
    const res = await fetch(`https://api.github.com/users/ghpm99/repos?sort=${sort}`)
    const data = await res.json()
    return data
}