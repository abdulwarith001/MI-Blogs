import jwt from "jsonwebtoken";

export const generateToken = (res, userId, role) => {
    const token = jwt.sign({ userId, role }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
    return token
}