import DatePicker from "./DatePicker";
import InputText from "./InputText";
import Range from "./range";

export default function Forms() {
    return (
        <form>
            <div className="form-group">
                <div className="container">
                    <div className="row col-12">
                        <InputText id="destino" placeholder="Nome">Qual seu destino?</InputText>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <DatePicker id="dataIda">Quando você irá viajar?</DatePicker>
                        </div>
                        <div className="col-6">
                            <DatePicker id="dataVolta">Quando você irá voltar?</DatePicker>
                        </div>
                    </div>
                    <br />
                    <InputText id="qtdPessoas" placeholder="Quantidade de pessoas">Quantas pessoas vão viajar?</InputText>
                    <br />
                    <Range id="money">Quanto você pretende gastar?</Range>
                </div>
            </div>
        </form>
    )
}