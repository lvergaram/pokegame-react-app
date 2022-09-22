import { PlayerSelecctionForm,InitialPokemon } from "../Initial"

export const GameStartScreen = () => {
  return (
    <div>
        <h1>
            Bienvenido, Dime tu nombre y elige tu pokemon
        </h1>
        <PlayerSelecctionForm />
        <InitialPokemon />
    </div>
  )
}
