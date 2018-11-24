import axios from 'axios'

export default async function getData(url) {
    let newproduct = {
        data: []
    }
    await axios.get(url, { headers: { Authorization: localStorage.getItem("token") } })
        .then((res) => {
            newproduct.data = res.data.data
            console.log(newproduct)
        })
        .catch((error) => {
            console.log(error)
        })
    return newproduct
}