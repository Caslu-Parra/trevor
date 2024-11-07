import React, { useState } from 'react';
import DatePicker from "./DatePicker";
import InputText from "./InputText";
import Range from "./range";
import ComboBox from "./ComboBox";
import CheckBox from "./CheckBox";
import Observacao from "./Observacao";
import './DatePicker.css';
import './CheckBox.css';
import { getGeminiResponse } from '../../endPoints/geminiClient';
import { saveRoteiro, saveHistorico } from '../../endPoints/saveClient';

export default function Forms() {
    const [step, setStep] = useState(1); // Controla qual pergunta está sendo exibida
    const [cityName, setCityName] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [tripType, setTripType] = useState('');
    const [travelWithKids, setTravelWithKids] = useState(false);
    const [travelAlone, setTravelAlone] = useState(false);
    const [travelWithPets, setTravelWithPets] = useState(false);
    const [budget, setBudget] = useState(5000);  // Estado para o range de dinheiro
    const [obsViagem, setObsViagem] = useState(''); // Estado para observações da viagem

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
        
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Coletar todas as informações do formulário em uma variável local
        const formData = {
            cityName,
            departureDate,
            returnDate,
            tripType,
            travelWithKids,
            travelAlone,
            travelWithPets,
            budget,
            obsViagem
        };

        const prompt = `Quero que voce me gere 5 roteiros de viagem para: ${formData.cityName}. 
                A viagem será do tipo ${formData.tripType} e ocorrera entre os dias ${formData.departureDate} e ${formData.returnDate}. 
                Estarei viajando ${formData.travelAlone ? 'sozinho' : 'com companhia'}, 
                ${formData.travelWithKids ? 'com crianças' : 'sem crianças'}, 
                ${formData.travelWithPets ? 'com animais de estimação' : 'sem animais de estimação'}. 
                Pretendo gastar até ${formData.budget} por pessoa. E tenho as seguintes observacoes: ${formData.obsViagem || 'sem observacoes'}`;
    
        console.log('Prompt montado:', prompt); // Adiciona este console.log para validar o prompt
    
        try {
            // Obter a resposta do Gemini em uma variável local
            const geminiResponse = await getGeminiResponse(prompt);
            console.log('Resposta do Gemini:', geminiResponse);

            // Exibir as informações coletadas e a resposta do Gemini no console
            console.log('Informações do formulário:', formData);
            console.log('Resposta do Gemini:', geminiResponse.text);
        } catch (error) {
            console.error('Erro ao processar a requisição:', error);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="container">

                    {/* Step 1: Qual seu destino? */}
                    {step === 1 && (
                        <div>
                            <div className="row">
                                <div className="col-12">
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
                                    <DatePicker id='dataPartida' value={departureDate} onChange={(e) => setDepartureDate(e.target.value)}>
                                        Quando você irá viajar?
                                    </DatePicker>
                                </div>
                                <div className="col-6">
                                    <DatePicker id="dataVolta" value={returnDate} onChange={(e) => setReturnDate(e.target.value)}>
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
                                <div className="col-12">
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
                                <div className="col-12">
                                    <div className="checkbox-container ">
                                        <CheckBox
                                            id="viajandoComCrianca"
                                            label="Estou viajando com criança"
                                            checked={travelWithKids}
                                            onChange={(checked) => setTravelWithKids(checked)}
                                        />
                                        
                                        <CheckBox
                                            id="viajandoSozinho"
                                            label="Estou viajando sozinho"
                                            checked={travelAlone}
                                            onChange={(checked) => setTravelAlone(checked)}
                                        />
                                        
                                        <CheckBox
                                            id="viajandoComPets"
                                            label="Viajando com animais de estimação"
                                            checked={travelWithPets}
                                            onChange={(checked) => setTravelWithPets(checked)}
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
                                <div className="col-12">
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
                                <div className="col-12">
                                    <Observacao
                                        value={obsViagem}
                                        onChange={(e) => setObsViagem(e.target.value)}
                                    />
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