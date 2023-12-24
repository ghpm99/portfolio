'use server'

import { cache } from 'react'

export const fetchUserData = cache(async () => {
    const res = await fetch('https://api.github.com/users/ghpm99')
    const data = await res.json()
    return data
})

export const fetchProjectsData = cache(async (sort: string) => {
    const res = await fetch(`https://api.github.com/users/ghpm99/repos?sort=${sort}`)
    const data = await res.json()
    return data
})
