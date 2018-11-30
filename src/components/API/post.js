import axios from 'axios'

export async function postData(url,updateData){
    let status = ""
    console.log(url)
    await axios.post(url,updateData,{ headers: { Authorization: localStorage.getItem("token") } })
        .then((res) => {
            console.log("URL post > ",url)
            console.log("updateData > ",updateData)
            console.log("GET STATUS > ",res.data.status)
            status = res.data.status
            // newproduct.data = res.data
        })
        .catch((error) => {
            console.log(error)
        })
    return  status
}