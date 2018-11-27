import axios from 'axios'

export async function getData(url){
    let newproduct = {
        data : []
    }
    await axios.get(url, { headers: { Authorization: localStorage.getItem("token") } })
        .then((res) => {
            newproduct.data = res.data
        })
        .catch((error) => {
            console.log(error)
        })
    return  newproduct
}