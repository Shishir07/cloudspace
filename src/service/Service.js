export default {

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
    },
    getServerDetails : (instance) => {
        return request({
            url: "/computeEngine/instances/"+instance,
            method: 'GET'
        });
    },
    stopServers: (instance) => {
        return request({
            url: "/computeEngine/instances/"+instance+"/stop",
            method: 'POST'
        });
    },
    deleteServers: (instance) => {
        return request({
            url: "/computeEngine/instances/"+instance,
            method: 'DELETE'
        });
    },
    startServers: (instance) => {
        return request({
            url: "/computeEngine/instances/"+instance+"/start",
            method: 'POST'
        });
    },



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