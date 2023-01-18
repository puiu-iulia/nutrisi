export interface User {
    email: string
    userId: string,
    userName: string | null
}

export interface AuthState {
    token: string | null
}
