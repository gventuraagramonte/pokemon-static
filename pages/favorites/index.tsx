import { useEffect, useState } from "react"
import { Layout } from "@/components/layouts/Layout"
import { FavoritePokemons, NoFavorites } from "@/components/ui"
import { localFavorites } from "@/utils"


const Favorites = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons())
    }, [])

    return (
        <Layout title="Pokemons - Favoritos">
            {
                favoritePokemons.length === 0
                    ? (<NoFavorites />)
                    : (<FavoritePokemons pokemons={favoritePokemons} />)
            }

        </Layout>
    )
}

export default Favorites