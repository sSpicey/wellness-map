import React, {useContext, useEffect, useCallback} from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const containerStyle = {
  width: '50%',
  height: '800px'
};

const center = {
  lat: -25.43,
  lng: -49.27,
};

const neighborhoods = [
  { name: 'Centro', location: { lat: -25.4372039, lng: -49.2670373 }, data: 1 },
  { name: 'São Francisco', location: { lat: -25.427271, lng: -49.271658 }, data: 1 },
  { name: 'Cabral', location: { lat: -25.405699, lng: -49.252327}, data: 1 },
  { name: 'Jardim Botânico', location: { lat: -25.441528, lng: -49.246468 }, data: 1 },
  { name: 'Alto da Rua XV', location: { lat: -25.428440, lng: -49.245867 }, data: 1 },
  { name: 'Alto da Glória', location: { lat: -25.419878, lng: -49.261988 }, data: 1 },
  { name: 'Jardim das Américas', location: { lat: -25.453720, lng: -49.229708 }, data: 1 },
  { name: 'Bacacheri', location: { lat: -25.400545, lng: -49.234284 }, data: 1 },
  { name: 'Rebouças', location: { lat: -25.444618, lng: -49.265515 }, data: 1 },
  { name: 'Mercês', location: { lat: -25.423396, lng: -49.289679 }, data: 1 },
  { name: 'Santa Cândida', location: { lat: -25.375330, lng: -49.230930}, data: 1 },
  { name: 'Santa Felicidade', location: { lat: -25.405833, lng: -49.329683 }, data: 1 },
  { name: 'São Braz', location: { lat: -25.415506, lng: -49.349953 }, data: 1 },
  { name: 'Uberaba', location: { lat: -25.493222, lng: -49.217274 }, data: 1 },
  { name: 'Portão', location: { lat: -25.469572, lng: -49.301072 }, data: 1 },
  { name: 'Pilarzinho', location: { lat: -25.393425, lng: -49.291247 }, data: 1 },
  { name: 'Água Verde', location: { lat: -25.454344, lng: -49.280734 }, data: 1 },
  { name: 'Batel', location: { lat: -25.4432378, lng: -49.291611 }, data: 1 },
  { name: 'Novo Mundo', location: { lat: -25.489566, lng: -49.293768 }, data: 1 },
  { name: 'Cajuru', location: { lat: -25.451861, lng: -49.211448 }, data: 1 },
  { name: 'Capão Raso', location: { lat: -25.503865, lng: -49.300355 }, data: 1 },
  { name: 'Cidade Industrial', location: { lat: -25.493738, lng: -49.341470 }, data: 1 },
  { name: 'Tingui', location: { lat: -25.387016, lng: -49.220878 }, data: 15 },
  { name: 'Prado Velho', location: { lat: -25.451386, lng: -49.254019 }, data: 1 },
  { name: 'Cristo Rei', location: { lat: -25.433297, lng: -49.245010 }, data: 1 },
  { name: 'Bom Retiro', location: { lat: -25.406839, lng: -49.277885 }, data: 1 },
  { name: 'Boa Vista', location: { lat: -25.388907, lng: -49.247204 }, data: 1 },
  { name: 'Mossunguê', location: { lat: -25.438932, lng: -49.326261 }, data: 1 },
  { name: 'Pinheirinho', location: { lat: -25.523812, lng: -49.291785 }, data: 1 },
  { name: 'Sítio Cercado', location: { lat: -25.539702, lng: -49.273051 }, data: 1 },
  { name: 'Bigorrilho', location: { lat: -25.433840, lng: -49.294508 }, data: 1 },
  { name: 'Hauer', location: { lat: -25.476212, lng: -49.252672 }, data: 1 },
  { name: 'Tarumã', location: { lat: -25.429407, lng: -49.225500 }, data: 1 },
  { name: 'Santo Inácio', location: { lat: -25.424839, lng: -49.331336 }, data: 1 },
  { name: 'Xaxim', location: { lat: -25.511424, lng: -49.264392 }, data: 1 },
  { name: 'Bairro Alto', location: { lat: -25.404735, lng: -49.210016 }, data: 1 },
  { name: 'Guaíra', location: { lat: -25.468909, lng: -49.273329 }, data: 1 },
  { name: 'Boqueirão', location: { lat: -25.504579, lng: -49.235284 }, data: 1 },
  { name: 'Seminário', location: { lat: -25.450136, lng: -49.305017 }, data: 1 },
  { name: 'Campo Comprido', location: { lat: -25.449927, lng: -49.330414 }, data: 1 },
  { name: 'Vila Izabel', location: { lat: -25.455977, lng: -49.296157 }, data: 1 },
  { name: 'Juvevê', location: { lat: -25.414754, lng: -49.257124 }, data: 1 },
];

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCsGR7inEWgkE-eqY0EvJnMIEoE4UJcDuI',
  });

  const [map, setMap] = React.useState(null);
  const location = useLocation();
  const {blocks, squareFtValue} = location.state;
  const [selectedMarker, setSelectedMarker] = React.useState(null);
  var providers = [];

  const setProviders = useCallback((data) => {
    data.forEach(object => {
      providers.push(object);
    });
  }, [providers]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/providers').then(response =>{
      setProviders(response.data);
      buildRanks();
      normalizeValues();
      setMap(map);
    } );
  }, []);

  const buildRanks = () => {
    providers.forEach((provider) => {
      neighborhoods.forEach((neighborhood) => {
        const formattedNeighborhoodName = neighborhood.name
          .toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, ""); 
        if (formattedNeighborhoodName === provider.bairro) {
          blocks.forEach((block, index) => {
            const formattedBlockName = block.content
            .toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
            console.log(block, index);
            if(formattedBlockName ===  provider.tema){
              neighborhood.data += (5 - index);
            }
          });
          
        }
      });
    });
  };

  const normalizeValues = () => {
    const rankingScores = neighborhoods.map(neighborhood => Number(neighborhood.data));
    const validRankingScores = rankingScores.filter(value => !isNaN(value));

    let minValue = Math.min(...validRankingScores);
    let maxValue = Math.max(...validRankingScores);

    neighborhoods.forEach((neighborhood) => {
      let normalizedScore = ((neighborhood.data - minValue) / (maxValue - minValue) * 9 + 1) ;
      neighborhood.data = normalizedScore.toFixed(1);
    });

    console.log(minValue, maxValue)
  }

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  },);

  const onUnmount = useCallback(function callback() {
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
          label={neighborhood.data.toString()}
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
