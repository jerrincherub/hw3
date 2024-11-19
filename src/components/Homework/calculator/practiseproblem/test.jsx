import { useEffect, useState } from "react"


export default function SearchApi() {
    const [search, setSearch] = useState('')
    const [user, setUser] = useState([])
    const [favorites, setFavorites] = useState([])
    const getuser = () => {

        fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=i0nyAkvKajfFcvLbGWWxvmA4T2YZd3ud")
            .then((res) => {
                return res.json()
            })
            .then((resJson) => {
                setUser(resJson.response.docs)



            })
    }
    console.log(user)
    useEffect(() => {
        getuser()
    }, [])
    const searchquery = user.filter(obj =>
        obj.abstract.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <input
                type="text"
                value={search}
                placeholder="Search here"
                onChange={(event) => {
                    setSearch(event.target.value)
                }} />
            <button onClick={searchquery}>Search</button>
            {searchquery.map((obj, index) => {
                return (
                    <div
                        style={{
                            backgroundColor: "#f2f2f2",
                            margin: 10,
                            borderRadius: 10,
                            padding: 5,
                        }}
                    >
                        {index + 1}.{obj.abstract}
                        <button style={{
                            color: "red",
                            padding: 5,
                            margin: 5
                        }} onClick={() => {
                            const deletedlist = searchquery.splice(index, 1)[0]
                            setUser(user)
                            setFavorites([...favorites, deletedlist])

                        }}>Save</button>

                    </div>



                )
            })}
            <h1>Favorite list</h1>
            {favorites.map((obj, index) => {
                return (
                    <div
                        style={{
                            backgroundColor: "#f2f2f2",
                            margin: 10,
                            borderRadius: 10,
                            padding: 5,
                        }}
                    >
                        {index + 1}.{obj.abstract}
                    </div>
                )
            })}
        </div>
    )
}