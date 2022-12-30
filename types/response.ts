interface APIResponse {
    success: boolean,
    message: string,
    error?: string,
    data: object
}

export default APIResponse