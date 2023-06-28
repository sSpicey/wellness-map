import React, {useContext} from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { useLocation } from 'react-router-dom'



const containerStyle = {
  width: '50%',
  height: '800px'
};

const center = {
  lat: -25.43,
  lng: -49.27,
};

const neighborhoods = [
  { name: 'Centro', location: { lat: -25.4372039, lng: -49.2670373 }, data: 'Dados do Bairro 1' },
  { name: 'São Francisco', location: { lat: -25.427271, lng: -49.271658 }, data: 'exemplo' },
  { name: 'Cabral', location: { lat: -25.405699, lng: -49.252327}, data: 'exemplo' },
  { name: 'Jardim Botânico', location: { lat: -25.441528, lng: -49.246468 }, data: 'exemplo' },
  { name: 'Alto da XV', location: { lat: -25.428440, lng: -49.245867 }, data: 'exemplo' },
  { name: 'Alto da Glória', location: { lat: -25.419878, lng: -49.261988 }, data: 'exemplo' },
  { name: 'Jardim das Américas', location: { lat: -25.453720, lng: -49.229708 }, data: 'exemplo' },
  { name: 'Bacacheri', location: { lat: -25.400545, lng: -49.234284 }, data: 'exemplo' },
  { name: 'Rebouças', location: { lat: -25.444618, lng: -49.265515 }, data: 'exemplo' },
  { name: 'Mercês', location: { lat: -25.423396, lng: -49.289679 }, data: 'exemplo' },
  { name: 'Santa Cândida', location: { lat: -25.375330, lng: -49.230930}, data: 'exemplo' },
  { name: 'Santa Felicidade', location: { lat: -25.405833, lng: -49.329683 }, data: 'exemplo' },
  { name: 'São Braz', location: { lat: -25.415506, lng: -49.349953 }, data: 'exemplo' },
  { name: 'Uberaba', location: { lat: -25.493222, lng: -49.217274 }, data: 'exemplo' },
  { name: 'Portão', location: { lat: -25.469572, lng: -49.301072 }, data: 'exemplo' },
  { name: 'Pilarzinho', location: { lat: -25.393425, lng: -49.291247 }, data: 'exemplo' },
  { name: 'Água Verde', location: { lat: -25.454344, lng: -49.280734 }, data: 'exemplo' },
  { name: 'Batel', location: { lat: -25.4432378, lng: -49.291611 }, data: 'exemplo' },
  { name: 'Novo Mundo', location: { lat: -25.489566, lng: -49.293768 }, data: 'exemplo' },
  { name: 'Cajuru', location: { lat: -25.451861, lng: -49.211448 }, data: 'exemplo' },
  { name: 'Capão Raso', location: { lat: -25.503865, lng: -49.300355 }, data: 'exemplo' },
  { name: 'Cidade Industrial', location: { lat: -25.493738, lng: -49.341470 }, data: 'exemplo' },
  { name: 'Tingui', location: { lat: -25.387016, lng: -49.220878 }, data: 'exemplo' },
  { name: 'Prado Velho', location: { lat: -25.451386, lng: -49.254019 }, data: 'exemplo' },
  { name: 'Cristo Rei', location: { lat: -25.433297, lng: -49.245010 }, data: 'exemplo' },
  { name: 'Bom Retiro', location: { lat: -25.406839, lng: -49.277885 }, data: 'exemplo' },
  { name: 'Boa Vista', location: { lat: -25.388907, lng: -49.247204 }, data: 'exemplo' },
  { name: 'Mossunguê', location: { lat: -25.438932, lng: -49.326261 }, data: 'exemplo' },
  { name: 'Pinheirinho', location: { lat: -25.523812, lng: -49.291785 }, data: 'exemplo' },
  { name: 'Sítio Cercado', location: { lat: -25.539702, lng: -49.273051 }, data: 'exemplo' },
  { name: 'Bigorrilho', location: { lat: -25.433840, lng: -49.294508 }, data: 'exemplo' },
  { name: 'Hauer', location: { lat: -25.476212, lng: -49.252672 }, data: 'exemplo' },
  { name: 'Tarumã', location: { lat: -25.429407, lng: -49.225500 }, data: 'exemplo' },
  { name: 'Santo Inácio', location: { lat: -25.424839, lng: -49.331336 }, data: 'exemplo' },
  { name: 'Xaxim', location: { lat: -25.511424, lng: -49.264392 }, data: 'exemplo' },
  { name: 'Bairro Alto', location: { lat: -25.404735, lng: -49.210016 }, data: 'exemplo' },
  { name: 'Guaíra', location: { lat: -25.468909, lng: -49.273329 }, data: 'exemplo' },
  { name: 'Boqueirão', location: { lat: -25.504579, lng: -49.235284 }, data: 'exemplo' },
  { name: 'Seminário', location: { lat: -25.450136, lng: -49.305017 }, data: 'exemplo' },
  { name: 'Campo Comprido', location: { lat: -25.449927, lng: -49.330414 }, data: 'exemplo' },
  { name: 'Vila Izabel', location: { lat: -25.455977, lng: -49.296157 }, data: 'exemplo' },
  { name: 'Juvevê', location: { lat: -25.414754, lng: -49.257124 }, data: 'exemplo' },
];

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCVz5aasRb1Sn1l3RBr10E9XKPt08eW6Ec',
  });

  const [map, setMap] = React.useState(null);
  const location = useLocation();
  const {blocks, squareFtValue} = location.state;
  const [selectedMarker, setSelectedMarker] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
    console.log(blocks, squareFtValue)
  },);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} onLoad={onLoad} onUnmount={onUnmount}>
      {neighborhoods.map((neighborhood, index) => (
        <Marker
          key={index}
          position={neighborhood.location}
          label={neighborhood.data}
          onClick={() => handleMarkerClick(neighborhood)}
        />
      ))}

      {selectedMarker && (
        <InfoWindow position={selectedMarker.location} onCloseClick={handleInfoWindowClose}>
          <div>
            <h3>{selectedMarker.name}</h3>
            <p>{selectedMarker.data}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : null;
}

export default Map;
