import React from 'react';

class Pokemon extends React.Component {   // Standart böyle yazmalıyız.
    constructor(props){ //props: bir componentten başka bir comp e veri aktarımını sağlar.
        super(props);
        this.state = {
            color: "pink" //arka planını değştirdik. bir karakterin bulunduğu kısım component olur.
        };
    }

    render(){
        return <ul
            onClick={() => {
                if(!this.props.isSummary){ //ÖNEMLİ: summary.js de  <Pokemon {...this.props} isSummary={true}></Pokemon> burada bütün elemanlar var. !this olan kısım ilk elemanı gösterir. ona tıklanınca bi şey yapma geri kalanı için aşağıdaki komutu çalıştır.
                    this.props.onPokemonClick(this.props.id);
                    //console.log("jfdskvv"); buda ilk resim dışında çalışıyor. buradan anla
                }
            }}
            style={{background:this.state.color, padding:"15px", margin: "10px"}}>
            <li>{this.props.name}</li>
            <li>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} //$ yazınca işlemlerden geliyo id.
                />
            </li>
        </ul>
    }
}
export default Pokemon;
