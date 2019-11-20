import React from 'react';
import Pokemon from './Pokemon';
import pokemons from "./data";
import Summary from "./Summary";


class App extends  React.Component { //react.comp bir kütüphanedir. dahil edince istediğin componente ayırmayı sağlar.
    constructor(props){
        super(props);  //hazır gelir. kütüphaneden dolayı.
        this.state = {
            selectedPokemon: false
        };

        this.onPokemonClick = this.onPokemonClick.bind(this);
    }

    onPokemonClick(id){
        const selectedPokemon = pokemons.find((pokemon) => {
            return pokemon.id === id;
        });
        this.setState({  //find dan sonra tıkladığımız id ile data.js deki id birbirine eşitleniyor.o id bizim pokemonumuz oluyor. set işaret etmek.
            selectedPokemon
        });
    }

    render(){ 
        return (
            <div className="App">
                {this.state.selectedPokemon && <Summary {...this.state.selectedPokemon}/>} 
                {
                    pokemons.map((item) => {
                        return <Pokemon {...item} onPokemonClick={this.onPokemonClick} key={item.id}/>
                    })
                }
            </div>
        );
    }
}
//yukarda {...this.state.selectedPokemon}/>} kısmı bütün pokemonları seçer. map ile hepsini yazdırdık.
export default App;
