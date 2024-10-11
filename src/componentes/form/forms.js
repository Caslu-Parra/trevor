import DatePicker from "./DatePicker";
import InputText from "./InputText";
import Range from "./range";
import ComboBox from "./ComboBox";
import CheckBox from "./CheckBox";
import React, { useState } from 'react';
import Observacao from "./Observacao";
import './DatePicker.css';
import './CheckBox.css';

export default function Forms() {
    const [step, setStep] = useState(1); // Controla qual pergunta está sendo exibida
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

    // Função para avançar para a próxima pergunta
    const nextStep = () => {
        if (step < 6) {
            setStep(step + 1);
        }
    };

    // Função para voltar para a pergunta anterior
    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    // Calcula a porcentagem do progresso
    const progressPercentage = ((step / 3) * 100).toFixed(2);


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

                    {/* Step 1: Qual seu destino? */}
                    {step === 1 && (
                        <div>
                            <div className="row">
                                <div className="col-6">
                                    <InputText
                                        id="destino"
                                        
                                        value={cityName}
                                        onChange={(e) => setCityName(e.target.value)}
                                        required
                                    >

                                        Insira seu destino
                                    </InputText>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-6">
                                    <DatePicker id='dataPartida'>
                                        Quando você irá viajar?
                                    </DatePicker>
                                </div>
                                <div className="col-6">
                                    <DatePicker id="dataVolta">
                                        Quando você irá voltar?
                                    </DatePicker>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Tipo de viagem */}
                    {step === 2 && (
                        <div>
                            <div className="row">
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
                            <div className="row">
                                <div className="col-6">
                                    <div className="checkbox-container ">
                                        <CheckBox
                                            id="viajandoComCrianca"
                                            label="Estou viajando sozinho"
                                            checked={travelWithKids}
                                            onChange={(e) => setTravelWithKids(e.target.checked)}
                                        />

                                        <CheckBox
                                            id="viajandoSozinho"
                                            label="Estou viajando com criança"
                                            checked={travelAlone}
                                            onChange={(e) => setTravelAlone(e.target.checked)}
                                        />
                                        <CheckBox
                                            id="viajandoComPets"
                                            label="Viajando com animais de estimação"
                                            checked={travelWithPets}
                                            onChange={(e) => setTravelWithPets(e.target.checked)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {/* Step 3: Quanto você pretende gastar? */}
                    {step === 3 && (
                        <div>
                            <div className="row">
                                <div className="col-6">
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
                            <div className="row">
                                <div className="col-6">
                                    <Observacao />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Botões de Navegação */}
                    <div className="row mt-4">
                        <div className="col-6">
                            {step > 1 && (
                                <button type="button" className="btn btn-secondary mx-2" onClick={prevStep}>
                                    Anterior
                                </button>
                            )}
                            {step < 3 && (
                                <button type="button" className="btn btn-primary mx-2" onClick={nextStep}>
                                    Próximo
                                </button>
                            )}
                            {step === 3 && (
                                <button type="submit" className="btn btn-success mx-2">
                                    Finalizar
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="progress mt-4">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${progressPercentage}%` }}
                            aria-valuenow={progressPercentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
