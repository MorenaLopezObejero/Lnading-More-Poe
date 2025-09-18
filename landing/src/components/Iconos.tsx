import { AiOutlineTeam, AiOutlineLaptop, AiOutlineRise } from 'react-icons/ai';

const Iconos = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '30px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <AiOutlineTeam size={50} style={{ color: '#000' }} />
        <p>Inclusión</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <AiOutlineLaptop size={50} style={{ color: '#000' }} />
        <p>Tecnología</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <AiOutlineRise size={50} style={{ color: '#000' }} />
        <p>Crecimiento</p>
      </div>
    </div>
  );
};

export default Iconos;