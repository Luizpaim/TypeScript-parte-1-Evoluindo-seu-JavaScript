// classe negociação 
export class Negociacao {

  //definindo atributos Classe
  private _data;
  private _quantidade;
  private _valor;

  //contrutor como a classe ira ser iniciada
  constructor(data: Date, quantidade: number, valor: number) {
    this._data = data
    this._quantidade = quantidade
    this._valor = valor
  }

  //metodos para leitura de metodos privados
  get data() {
    return this._data;
  }

  get quantidade() {
    return this._quantidade
  }

  get valor() {
    return this._valor
  }

  get volume() {
    return this._quantidade * this._valor
  }


}