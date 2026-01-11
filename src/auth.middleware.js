export const authMiddleware = async (req, res, next) => {
    const authHeader = req.header.authorization
    if (!authHeader) {
        return res.status(401).json({message: 'Unauthorized'})
    }
    next()
}