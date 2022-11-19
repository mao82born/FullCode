import jwt from 'jsonwebtoken';

//Oculta contraseña del login
export const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '30d',
        }
    );
};

//Verifica que el usuario está autenticado
export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
        jwt.verify(
            token,
            process.env.JWT_SECRET || 'somethingsecret',
            (err, decode) => {
                if (err) {
                    res.status(401).send({ message: 'Token erroneo.' });
                } else {
                    req.user = decode;
                    next();
                }
            }
        );
    } else {
        res.status(401).send({ message: 'No hay Token' });
    }
};

//Verifica si el usuario es administrador
export const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).send({ message: 'Token erroneo.' });
    }
};
