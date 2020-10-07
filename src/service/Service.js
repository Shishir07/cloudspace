export default {


    getProducts : () => {
        return request({
                           url: "/v1/products",
                           method: 'GET'
                       });
    },

    saveToWishList: ({user,product}) => {
        return request({
                           url: "/v1/wishList",
                           method: 'POST',
                           body: JSON.stringify({ productId: product })
                       });
    },
    login : (username,password) => {
        return request({
                           url: "/login",
                           method: 'POST',
                           body: JSON.stringify({ username: username,password: password })
                       });
    },
    getServers : () => {
        return request({
                           url: "/computeEngine/instances",
                           method: 'GET'
                       });
    }


}


const request = (options) => {
    const headers = new Headers({
                                    'Content-Type': 'application/json',
                                })

    if(localStorage.getItem('cloudspace-auth-token')) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('cloudspace-auth-token'))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
            .then(helpers.isError)
};

const helpers = {


    isError : async (response) => {
        let data = response.json();
        if (response.ok){
            return data
        }
        throw new Error({
                            message : (response.message)? response.message : 'Something went wrong', // add proper error messages
                            data
                        })


    }


}