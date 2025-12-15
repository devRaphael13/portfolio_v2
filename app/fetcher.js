export default function fetcher(url, setData, setLoading) {
    console.log(url)
    fetch(url,  { method: "GET", mode: "cors", headers: { "Content-Type": "application/json" }})
    .then((res) => res.json())
    .then((data) => {
        setData(data)
        setLoading(false)
    })
}