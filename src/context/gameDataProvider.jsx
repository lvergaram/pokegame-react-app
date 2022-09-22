import { createContext, useState } from 'react'

//import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers'

  

const GameDataContext = createContext()
  
const GameDataProvider = ({children}) => {

	const [playerData, setPlayerData] = useState({
		isNameSelected:false,
		playerId:1,
		playerName:"",
		pokemonsOwned:[],
	})



    return(

        <GameDataContext.Provider value={{
	         //aqui van las funciones y lo que quieras hacer accesible
	         hola:"hola mundo",
			playerData,
			setPlayerData
         }}  
         >
            {children}
        </GameDataContext.Provider>
    )
}

  

export {
    GameDataProvider
}

export default GameDataContext