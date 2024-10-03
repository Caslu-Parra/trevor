import { createRoot } from 'react-dom/client';
import Historico from './componentes/left/historico'
import Roteiro from './componentes/left/roteiro'


const root = createRoot(document.getElementById('main'));
root.render(
    <div>
        <Historico>
            <Roteiro title='Vanessa Tucker' img='https://bootdey.com/img/Content/avatar/avatar5.png' data='2024-06-12 07:10:56' />
            <Roteiro title='William Harris' img='https://bootdey.com/img/Content/avatar/avatar2.png' data='2024-07-11 09:20:15' />
            <Roteiro title='Fiona Green' img='https://bootdey.com/img/Content/avatar/avatar3.png' data='2023-10-01 15:35:37' />
        </Historico>
    </div>
);