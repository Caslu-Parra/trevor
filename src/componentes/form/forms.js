import DatePicker from "./DatePicker";
import InputText from "./InputText";
import Range from "./Range"; 
import ComboBox from "./ComboBox";
import CheckBox from "./CheckBox";
import React, { useState } from 'react';

export default function Forms() {
    const [cityName, setCityName] = useState('');
    const [days, setDays] = useState('');
    const [tripType, setTripType] = useState('');
    const [travelWithKids, setTravelWithKids] = useState(false);
    const [travelAlone, setTravelAlone] = useState(false);
    const [travelWithPets, setTravelWithPets] = useState(false);
    const [budget, setBudget] = useState(5000);  // Estado para o range de dinheiro

    const tripOptions = [
        "Paisagens Naturais",
        "Gastronomia",
        "Arquitetura",
        "Cultura e Artes",
        "Vida Noturna",
        "Pontos Turísticos Gerais"
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            cityName,
            days,
            tripType,
            travelWithKids,
            travelAlone,
            travelWithPets,
            budget
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="container">

                    <div className="row">
                        <div className="col-6">
                            <InputText
                                id="destino"
                                value={cityName}
                                onChange={(e) => setCityName(e.target.value)}
                                required
                            >
                                Paris, Roma, Barcelona, Londres
                            </InputText>
                        </div>
                        <div className="col-6">
                            <ComboBox
                                id="tipoViagem"
                                label="Tipo de Viagem:"
                                options={tripOptions}
                                value={tripType}
                                onChange={(e) => setTripType(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <br></br>
                    <CheckBox
                        id="viajandoComCrianca"
                        label="Viajando com Criança."
                        checked={travelWithKids}
                        onChange={(e) => setTravelWithKids(e.target.checked)}
                    />

                    <CheckBox
                        id="viajandoSozinho"
                        label="Viajando Sozinho."
                        checked={travelAlone}
                        onChange={(e) => setTravelAlone(e.target.checked)}
                    />

                    <CheckBox
                        id="viajandoComPets"
                        label="Viajando com Animais de Estimação."
                        checked={travelWithPets}
                        onChange={(e) => setTravelWithPets(e.target.checked)}
                    />
                <br></br>
                    <Range
                        id="moneyRange"
                        min="0"
                        max="10000"
                        step="100"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)} 
                    />
                </div>
            </div>
        </form>
    );
}