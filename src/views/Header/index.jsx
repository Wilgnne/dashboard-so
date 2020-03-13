import React from 'react';
import { MdMemory, MdDns, MdDeviceHub } from 'react-icons/md';

import { Container } from './styles';

import MiniCard from './components/MiniCard';

export default function Header() {
  return (
    <Container>
        <MiniCard 
            title="CPU" 
            value="100%"
            description="Dado coletado a 1ms"
            Icon={MdMemory}
        />
        <MiniCard 
            title="Memory" 
            value="100MB/250MB"
            description="Dado coletado a 1ms"
            Icon={MdDns}
        />
        <MiniCard 
            title="Processos" 
            value="200"
            description="Dado coletado a 1ms"
            Icon={MdDeviceHub}
        />
    </Container>
  );
}
