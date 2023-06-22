import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const initialBlocks = [
  { id: '1', content: 'saúde' },
  { id: '2', content: 'educação' },
  { id: '3', content: 'cultura' },
  { id: '4', content: 'transporte público' },
  { id: '5', content: 'área verde' },
];

function RightSideWindow({ closeWindow }) {
  const [blocks, setBlocks] = useState(initialBlocks);

  function onDragEnd(result) {
    if (!result.destination) return;
    
    const items = Array.from(blocks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setBlocks(items);
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setLocalFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  return (
    <div style={{
      position: 'fixed', 
      right: '0', 
      bottom: '0',
      margin: '16px',
      width: '35%',
      height: '80vh',
      backgroundColor: '#EAEDDC',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '16px',
      paddingTop: '6px',
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 32,
      borderStyle: 'solid'
    }}>
      <button 
        onClick={closeWindow} 
        style={{ 
          margin: '2px',
          alignSelf: 'flex-end',
          border: '0px',
          backgroundColor: '#EAEDDC',
          fontFamily: 'RobotoBold',
          fontSize: 16
         }}
      >
        X
      </button>
      <span style={{fontSize: 24, textAlign: 'start', fontFamily: 'RobotoBold'}}>descubra um lugar para se sentir em casa</span>
      <span style={{fontSize: 16, textAlign: 'start', marginTop: '32px', fontFamily: 'RobotoBold'}}>grau de importância</span>
      <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="blocks">
              {(provided) => (
                  <ul className="blocks" {...provided.droppableProps} ref={provided.innerRef} style={{paddingLeft: '0px', backgroundColor: '#EAEDDC'}}>
                      {blocks.map(({ id, content }, index) => (
                          <Draggable key={id} draggableId={id} index={index}>
                              {(provided) => (
                                  <div
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  style={{
                                    userSelect: 'none',
                                    padding: '9px',
                                    marginTop: '8px',
                                    marginBottom: '8px',
                                    minHeight: '10px',
                                    backgroundColor: '#bdbdbd',
                                    ...provided.draggableProps.style,
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    backgroundColor: '#EAEDDC',
                                    borderWidth: 1,
                                    borderColor: '#000000',
                                    borderStyle: 'solid',
                                    borderRadius: 12,
                                    width: '70vh'
                                  }}
                                >
                                  <span style={{marginLeft: '10px',marginRight: '15px', fontFamily: 'RobotoRegular'}}>☰</span>  {content}
                                </div>
                              )}
                          </Draggable>
                      ))}
                      {provided.placeholder}
                  </ul>
              )}
          </Droppable>
      </DragDropContext>
      <span className='font-roboto' style={{fontSize: 16, textAlign: 'start', marginTop: '8px', fontFamily: 'RobotoBold'}}>valor do metro quadrado</span>
      <select 
      style={{
          width: '180px', 
          backgroundColor: '#EAEDDC',
          borderRadius: 12,
          padding: '4px',
          marginTop: '16px',
          minHeight: '35px'
        }}
      name="preference">
        <option disabled={true} value="">selecione o valor</option>
        <option value="1">R$1000,00 - R$2000,00</option>
        <option value="2">R$2000,00 - R$3000,00</option>
        <option value="3">R$3000,00 - R$4000,00</option>
      </select>
      <button 
        onClick={closeWindow} 
        style={{ 
          margin: '2px',
          alignSelf: 'center',
          border: '0px',
          backgroundColor: '#009988',
          fontFamily: 'RobotoRegular',
          fontSize: 16,
          color: 'white',
          width: '70vh',
          borderRadius: 8,
          minHeight: '32px',
          marginTop: '24px',
          marginBottom: '8px',
          padding: '8px'
         }}
      >
        fazer busca
      </button>
    </div>
  );
}

export default RightSideWindow