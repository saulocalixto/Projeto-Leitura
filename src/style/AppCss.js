import logo from '../icons/arrow-drop-down.svg';

export const barraMenuStylus = {
  minHeight: '60px',
  position: 'absolute',
  top: '0',
  right: '0',
  left: '0',
  borderBottom: '1px solid #ccc',
  background: '#0066cc',
  zIndex: '2',
  fontWeight: 'bold',
  color: '#FFFFFF',
  fontSize: 'xx-large',
  textAlign: 'center',
  paddingTop: '30',
  margin: '10px'
};

export const formularioEstilo = {
  position:'relative',
  width: '900px',
  margin: '150px auto',
  padding: '10px'
};

export const selecionaCategoria = {
  position: 'relative',
  right: '0',
  bottom: '-10px',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  color: 'black',
  background: '#000099',
  backgroundImage: "url(" + logo + ")",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '20px',
  marginLeft: '10px',
  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
}

export const select = {
  width: '100%',
  height: '100%',
  opacity: '0',
  cursor: 'pointer'
}

export const linhaRodaPe = {
  position: 'fixed',
  bottom: '0px',
  width:'100%',
}

export const textoRodape = {
  textAlign: 'center',
  padding: '10px',
  color: '#000000'
}
