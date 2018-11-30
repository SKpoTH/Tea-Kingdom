import axios from 'axios'

export async function getData(url){
    let newproduct = {
        data : [],
        status : ""
    }
    await axios.get(url, { headers: { Authorization: localStorage.getItem("token") } })
        .then((res) => {
            newproduct.data = res.data.data,
            newproduct.status = res.data.status
            console.log("API GET RES >> ",res)
        })
        .catch((error) => {
            console.log(error)
        })
    console.log("API GET PRODUCT >> ",newproduct)
    return  newproduct
}