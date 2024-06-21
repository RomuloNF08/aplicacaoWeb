export interface Pedido {
    id: number;
    clientName: string;
    tipo: string;
    cnpjOuCpf: string;
    dataCompra: Date;
    valorTotal: number;
    itens: Item[];
  }
  
  export interface Item {
    idProduto: number;
    descricao: string;
    quantidade: number;
    valor: number;
  }
  