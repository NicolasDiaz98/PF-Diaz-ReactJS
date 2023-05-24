// const products = [
//     {
//         id: '1',
//         name: 'Guante Nike',
//         price: 3000,
//         category: 'guantes',
//         img: 'https://f.fcdn.app/imgs/fca640/www.lacancha.uy/lcanuy/04f4/original/catalogo/CQ7795_010_1/2000-2000/guantes-futbol-nike-gk-match-jr-guantes-futbol-nike-gk-match-jr.jpg',
//         stock: 10,
//         description: 'Guante golero adulto Nike'
//     },
//     {id: '2', name: 'Guante Reusch', price: 3000, category: 'guantes', img: 'https://f.fcdn.app/imgs/fca640/www.lacancha.uy/lcanuy/04f4/original/catalogo/CQ7795_010_1/2000-2000/guantes-futbol-nike-gk-match-jr-guantes-futbol-nike-gk-match-jr.jpg', stock: 10, description: 'Guante golero adulto Nike'},
//     {id: '3', name: 'Guante SP', price: 3000, category: 'guantes', img: 'https://f.fcdn.app/imgs/fca640/www.lacancha.uy/lcanuy/04f4/original/catalogo/CQ7795_010_1/2000-2000/guantes-futbol-nike-gk-match-jr-guantes-futbol-nike-gk-match-jr.jpg', stock: 10, description: 'Guante golero adulto Nike'},
//     {id: '4', name: 'Guante SP', price: 3000, category: 'novedades', img: 'https://f.fcdn.app/imgs/fca640/www.lacancha.uy/lcanuy/04f4/original/catalogo/CQ7795_010_1/2000-2000/guantes-futbol-nike-gk-match-jr-guantes-futbol-nike-gk-match-jr.jpg', stock: 10, description: 'Guante golero adulto Nike'},
//     {id: '5', name: 'Guante SP', price: 3000, category: 'novedades', img: 'https://f.fcdn.app/imgs/fca640/www.lacancha.uy/lcanuy/04f4/original/catalogo/CQ7795_010_1/2000-2000/guantes-futbol-nike-gk-match-jr-guantes-futbol-nike-gk-match-jr.jpg', stock: 10, description: 'Guante golero adulto Nike'},
//     {id: '6', name: 'Guante SP', price: 3000, category: 'novedades', img: 'https://f.fcdn.app/imgs/fca640/www.lacancha.uy/lcanuy/04f4/original/catalogo/CQ7795_010_1/2000-2000/guantes-futbol-nike-gk-match-jr-guantes-futbol-nike-gk-match-jr.jpg', stock: 10, description: 'Guante golero adulto Nike'},
//     {id: '7', name: 'Guante SP', price: 3000, category: 'ofertas', img: 'https://f.fcdn.app/imgs/fca640/www.lacancha.uy/lcanuy/04f4/original/catalogo/CQ7795_010_1/2000-2000/guantes-futbol-nike-gk-match-jr-guantes-futbol-nike-gk-match-jr.jpg', stock: 10, description: 'Guante golero adulto Nike'},
//     {id: '8', name: 'Guante SP', price: 3000, category: 'ofertas', img: 'https://f.fcdn.app/imgs/fca640/www.lacancha.uy/lcanuy/04f4/original/catalogo/CQ7795_010_1/2000-2000/guantes-futbol-nike-gk-match-jr-guantes-futbol-nike-gk-match-jr.jpg', stock: 10, description: 'Guante golero adulto Nike'},
//     {id: '9', name: 'Guante SP', price: 3000, category: 'ofertas', img: 'https://f.fcdn.app/imgs/fca640/www.lacancha.uy/lcanuy/04f4/original/catalogo/CQ7795_010_1/2000-2000/guantes-futbol-nike-gk-match-jr-guantes-futbol-nike-gk-match-jr.jpg', stock: 10, description: 'Guante golero adulto Nike'},
//     {id: '10', name: 'Guante SP', price: 3000, category: 'ofertas', img: 'https://f.fcdn.app/imgs/fca640/www.lacancha.uy/lcanuy/04f4/original/catalogo/CQ7795_010_1/2000-2000/guantes-futbol-nike-gk-match-jr-guantes-futbol-nike-gk-match-jr.jpg', stock: 10, description: 'Guante golero adulto Nike'}
// ]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}