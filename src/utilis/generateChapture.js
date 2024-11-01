export const generateChapture = (length) => {
    // Validate the input length
    if (!Number.isInteger(length) || length <= 0) {
        throw new Error('Length must be a positive integer');
    }

    return Math.random().toString(36).substr(2, length);
}
